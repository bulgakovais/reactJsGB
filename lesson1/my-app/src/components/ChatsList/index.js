
import { List, ListItem, Button, FormControl, Input, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './chatsList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getChatsList } from '../../store/chats/selectors'
import { createChat, setChats } from '../../store/chats/actions'
import { chatsRef, getChatMsgRefById, getChatRefById } from '../../services/firebase'
import { onValue, set, remove } from "firebase/database"
import { useEffect } from 'react';


export const ChatsList = () => {

    const chats = useSelector(getChatsList)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    let classLink = classnames(styles.link);
    let classContainer = classnames(styles.container)

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

    // Изменение значения инпута
    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    // Добавление чата
    const handleCreateChat = () => {

        if (inputValue === '') {
            alert("Введите название чата")
            return
        }
        const newChatId = `${inputValue}${nanoid()}`
        dispatch(createChat({
            id: newChatId,
            name: inputValue,
        }))
        set(getChatRefById(newChatId), { name: inputValue, id: newChatId })

        setInputValue('')

    }

    // Удаление чата
    const handleDeleteChat = (itemId) => {
        remove(getChatRefById(itemId))
        remove(getChatMsgRefById(itemId))
    }


    return (
        <Container className={classContainer}  >
            <List>
                <h3 color='secondary'>Мои чаты</h3>

                {
                    chats?.map((item) => {
                        return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
                            <Link to={`/chats/${item.id}`} className={classLink}>{item.name} </Link>
                            <Button sx={{ color: '#f98b8b', fontSize: '10px', fontWeight: 'bold' }} variant="outlined" color="secondary" onClick={() => handleDeleteChat(item.id)}> х</Button>
                        </ListItem>
                    })
                }
            </List>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', marginTop: '5em' }}>
                <Input type="text" value={inputValue} onChange={onChangeInput}></Input>
                <Button variant="contained" color="secondary" sx={{ marginTop: '40px' }} onClick={handleCreateChat}>Добавить чат</Button>
            </FormControl>
        </Container>
    )
}
