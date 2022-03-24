import React from 'react'
import { ChatsList } from '../../components'
import { Container, Paper, Grid, Input, Button, Box } from '@mui/material';

import { createMessage } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { nanoid } from 'nanoid'

export const Chats = ({ children }) => {

    const dispatch = useDispatch()
    const { chatId } = useParams()
    console.log(useParams())
    console.log(chatId)
    let inputValue = ''
    const onChangeInput = (event) => {
        inputValue = event.target.value
    }

    const handleCreateMessage = () => {
        dispatch(createMessage(chatId, {
            id: nanoid(),
            name: inputValue
        }))
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
                        <Grid item xs={12}> {children}</Grid>

                        {/* ФОРМА СОЗДАНИЯ СООБЩЕНИЯ */}
                        <Grid item xs={12}>
                            <Box component='form' sx={{ display: 'flex', marginTop: "25px", padding: "8px 16px" }}>
                                <Grid item xs={6}>
                                    <Input fullWidth={true} onChange={onChangeInput} type="text" />
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