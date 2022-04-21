
import { useDispatch, useSelector } from "react-redux"
import { getChatsList } from "../../store/chats/selectors"
import { List, ListItem, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './allChats.module.css'
import classnames from 'classnames';
import { useEffect } from "react";
import { onValue } from "firebase/database"
import { chatsRef } from "../../services/firebase";
import { setChats } from "../../store/chats/actions";




export const AllChats = () => {

    const chats = useSelector(getChatsList)
    console.log(chats)
    const dispatch = useDispatch()

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
    let classNames = classnames(styles.link);

    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Paper elevation={2} sx={{ padding: 2, height: '80vh', width: '100%' }}>

                <List>
                    <h3 color='secondary'>Chats:</h3>

                    {
                        chats?.map((item) => {
                            return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
                                <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>

                            </ListItem>
                        })
                    }
                </List>
            </Paper>
        </Container>
    )
}




// import { useSelector } from "react-redux"
// import { getChatsList } from "../../store/chats/selectors"
// import { List, ListItem, Container, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';

// import styles from './allChats.module.css'
// import classnames from 'classnames';
// import { useEffect, useState } from "react";
// import { onValue } from "firebase/database"
// import { chatsRef } from "../../services/firebase";

// export const AllChats = () => {

//     const [chats, setChats] = useState([])

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
//     let classNames = classnames(styles.link);
//     // const chats = useSelector(getChatsList)

//     return (
//         <Container maxWidth='xl' sx={{
//             display: 'flex',
//             alignItems: 'center',
//             height: '100vh'
//         }}>
//             <Paper elevation={2} sx={{ padding: 2, height: '80vh', width: '100%' }}>

//                 <List>
//                     <h3 color='secondary'>Chats:</h3>

//                     {
//                         chats?.map((item) => {
//                             return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
//                                 <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>

//                             </ListItem>
//                         })
//                     }
//                 </List>
//             </Paper>
//         </Container>
//     )
// }


