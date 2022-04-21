
import { List, ListItem, Button, FormControl, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './chats.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getChatsList } from '../../store/chats/selectors'
import { createChat, setChats } from '../../store/chats/actions'
import { chatsRef, getChatRefById } from '../../services/firebase'
import { onValue, set, remove } from "firebase/database"
import { useEffect } from 'react';


export const ChatsList = () => {

    const chats = useSelector(getChatsList)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }


    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapShots) => {
            const newChats = []

            snapShots.forEach(snapshot => {
                newChats.push(snapshot.val())
            })
            dispatch(setChats(newChats))
        })

        return unsubscribe
    }, [])


    const handleCreateChat = () => {

        const newChatId = `${inputValue}${nanoid()}`
        dispatch(createChat({
            id: newChatId,
            name: inputValue,
        }))
        set(getChatRefById(newChatId), { name: inputValue, id: newChatId })

        setInputValue('')
    }

    const handleDeleteChat = (itemId) => {
        remove(getChatRefById(itemId))

    }

    let classNames = classnames(styles.link);


    return (
        <>
            <List>
                <h3 color='secondary'>Chats:</h3>

                {
                    chats?.map((item) => {
                        return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
                            <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>
                            <Button sx={{ color: 'darkred', fontSize: '10px' }} onClick={() => handleDeleteChat(item.id)}> х</Button>
                        </ListItem>
                    })
                }
            </List>
            <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
                <Input type="text" value={inputValue} onChange={onChangeInput}></Input>
                <Button variant="outlined" sx={{ marginTop: '40px' }} onClick={handleCreateChat}>Добавить чат</Button>
            </FormControl>
        </>
    )
}

// import { List, ListItem, Button, FormControl, Input } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useState } from 'react'
// import { nanoid } from 'nanoid';
// import classnames from 'classnames';
// import styles from './chats.module.css'
// // import { useSelector, useDispatch } from 'react-redux'
// // import { getChatsList } from '../../store/chats/selectors'
// // import { createChat, deleteChatWithThunk, setChats } from '../../store/chats/actions'
// import { chatsRef, getChatRefById } from '../../services/firebase'
// import { onValue, set, remove } from "firebase/database"
// import { useEffect } from 'react';
// // import { mapChatSnapShotToChat } from '../../helpers';


// export const ChatsList = () => {

//     // const chats = useSelector(getChatsList)
//     // const dispatch = useDispatch()
//     const [chats, setChats] = useState([])
//     const [inputValue, setInputValue] = useState('')

//     const onChangeInput = (event) => {
//         setInputValue(event.target.value)
//     }


//     useEffect(() => {
//         const unsubscribe = onValue(chatsRef, (snapShots) => {
//             const newChats = []

//             snapShots.forEach(snapshot => {
//                 newChats.push(snapshot.val())
//             })
//             setChats(newChats)
//             // dispatch(setChats(newChats))
//         })

//         return unsubscribe
//     }, [])

//     const handleCreateChat = () => {

//         const newChatId = `${inputValue}${nanoid()}`
//         // dispatch(createChat({
//         //     id: newChatId,
//         //     name: inputValue,
//         // }))
//         set(getChatRefById(newChatId), { name: inputValue, id: newChatId })

//         setInputValue('')
//     }

//     const handleDeleteChat = (itemId) => {
//         remove(getChatRefById(itemId))

//     }

//     // useEffect(() => {
//     //     dispatch(onTrackingCreateChatWithThunk)
//     //     dispatch(onTrackingDeleteChatWithThunk)

//     //     return () => {
//     //         dispatch(offTrackingCreateChatWithThunk)
//     //         dispatch(offTrackingDeleteChatWithThunk)
//     //     }
//     // }, [])


//     let classNames = classnames(styles.link);


//     return (
//         <>
//             <List>
//                 <h3 color='secondary'>Chats:</h3>

//                 {
//                     chats?.map((item) => {
//                         return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
//                             <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>
//                             <Button sx={{ color: 'darkred', fontSize: '10px' }} onClick={() => handleDeleteChat(item.id)}> х</Button>
//                         </ListItem>
//                     })
//                 }
//             </List>
//             <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <Input type="text" value={inputValue} onChange={onChangeInput}></Input>
//                 <Button variant="outlined" sx={{ marginTop: '40px' }} onClick={handleCreateChat}>Добавить чат</Button>
//             </FormControl>
//         </>
//     )
// }
