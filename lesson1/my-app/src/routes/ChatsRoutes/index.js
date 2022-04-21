import React, { useEffect } from 'react'
import { ChatsList } from '../../components'
import { Container, Paper, Grid, Input, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { getMessageList } from '../../store/messages/selectors'
import { createMessage, setMessages } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { nanoid } from 'nanoid'
import { useState } from "react"
import { onValue, push } from "firebase/database"
import { getChatMsgRefById } from '../../services/firebase';


export const Chats = () => {

    let { chatId } = useParams()
    const dispatch = useDispatch()

    let [inputValue, setInputValue] = useState('')

    const messageList = useSelector(getMessageList)

    // Для приведения объекта к массиву используем Object.values
    const messages = Object.values(messageList)
    console.log(messages)

    useEffect(() => {
        const unsubscribe = onValue(getChatMsgRefById(chatId), (snapShots) => {

            const newMsgs = {}

            snapShots.forEach((snapshot) => {
                newMsgs[snapshot.key] = snapshot.val()
            })
            console.log(newMsgs)
            dispatch(setMessages(newMsgs))
        })

        return unsubscribe
    }, [chatId])



    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleCreateMessage = (event) => {
        event.preventDefault()

        const newMsg = {
            text: inputValue,
            id: nanoid(),
            author: 'Irina'
        }

        push(getChatMsgRefById(chatId), newMsg)
        dispatch(createMessage(chatId, newMsg))

        setInputValue('')
    }


    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Paper elevation={2} sx={{ padding: 2, height: '80vh', width: '100%' }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={3}>

                        {/* СПИСОК ЧАТОВ */}
                        <ChatsList />

                    </Grid>
                    <Grid item xs={9}>
                        {/* СПИСОК СООБЩЕНИЙ */}
                        <Grid item xs={12}>
                            <List>
                                {
                                    messages.map((item) => {
                                        console.log(item)
                                        return <ListItem className="list" key={item.id}>
                                            <ListItemText sx={{ minWidth: '150px' }} primary={item.author} />
                                            <ListItemText sx={{ overflowWrap: 'break-word' }} >{item.text}</ListItemText>
                                        </ListItem>
                                    })
                                }
                            </List>
                        </Grid>

                        {/* ФОРМА СОЗДАНИЯ СООБЩЕНИЯ */}
                        <Grid item xs={12}>
                            <Box component='form' sx={{ display: 'flex', marginTop: "25px", padding: "8px 16px" }}>
                                <Grid item xs={6}>
                                    <Input fullWidth={true} value={inputValue} onChange={onChangeInput} type="text" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button type="submit" variant="outlined" sx={{ marginLeft: "25px" }} onClick={handleCreateMessage}>Отправить</Button>
                                </Grid>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </Container >
    );
}