import React from 'react'
import { useEffect, useRef } from 'react'
import { ChatsList } from '../../components'
import { useCreateMessageForm } from '../../hooks/useCreateMessageForm'
import { useMessageList } from '../../hooks/useMessageList'

import { Input, Container, Paper, Button, Box, List, ListItem, ListItemText, Grid } from '@mui/material';


export const Chats = () => {

    const { messageList, addNewMessage } = useMessageList()
    const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({ onSubmit: addNewMessage })
    const messageText = 'Привет'

    const inputRef = useRef(null)
    // т.к. у useEffect нет зависимостей - он вызывается на каждый рендер страницы
    useEffect(() => {
        inputRef.current.focus()
    })

    useEffect(() => {
        if (messageList.length === 0) {
            return
        }
        const text = messageList[messageList.length - 1]
        if (text.author === 'bot') {
            return
        }
        addNewMessage(messageText, 'bot')
    }, [messageList])

    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Paper elevation={2} sx={{ padding: 2, height: '80vh', width: '100%' }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <ChatsList />
                    </Grid>
                    <Grid item xs={10}>
                        <Grid item xs={12}>
                            <List>
                                {
                                    messageList.map((item) => {
                                        return <ListItem className="list" key={item.id}>
                                            <ListItemText sx={{ minWidth: '150px' }}>{item.author}</ListItemText>
                                            <ListItemText sx={{ overflowWrap: 'break-word' }} primary={item.message} />
                                        </ListItem>
                                    })
                                }
                            </List>
                        </Grid>


                        <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', marginTop: "25px", padding: "8px 16px" }}>
                            <Grid item xs={6}>
                                <Input inputRef={inputRef} fullWidth={true} value={inputValue} onChange={onChangeInput} type="text" />
                            </Grid>
                            <Grid item xs={6}>
                                <Button type="submit" variant="outlined" sx={{ marginLeft: "25px" }}>Отправить</Button>
                            </Grid>
                        </Box>


                    </Grid>
                </Grid>

            </Paper>


        </Container >
    );
}
