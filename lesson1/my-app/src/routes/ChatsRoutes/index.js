import React from 'react'
import { ChatsList } from '../../components'
import { Container, Paper, Grid } from '@mui/material';
import { Messages } from '../../components/Messages';
import styles from './chatsRoute.module.css'
import classnames from 'classnames';

// (Компонент-контейнер)
export const ChatsRoutes = () => {

    let classContainer = classnames(styles.container);
    let classPaper = classnames(styles.paper);

    return (<Container maxWidth='xl'
        className={classContainer}>
        <Paper elevation={2}
            className={classPaper}>
            <Grid container spacing={2} >
                <Grid item xs={3} >

                    { /* СПИСОК ЧАТОВ И ФОРМА ДЛЯ СОЗДАНИЯ ЧАТА*/}
                    <ChatsList />

                </Grid>
                <Grid item xs={9} >

                    { /* СПИСОК СООБЩЕНИЙ И ФОРМА ДЛЯ ВВОДА СООБЩЕНИЯ */}
                    <Messages > </Messages>

                </Grid>
            </Grid>
        </Paper>
    </Container >);
}