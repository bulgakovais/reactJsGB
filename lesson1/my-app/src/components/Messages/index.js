import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMessageList } from "../../store/messages/selectors"
import { onValue, push } from "firebase/database"
import { nanoid } from 'nanoid'
import { getChatMsgRefById } from '../../services/firebase';
import { createMessage, setMessages } from "../../store/messages/actions"
import { Grid, Input, Button, Box, List, ListItem, ListItemText } from '@mui/material';


export const Messages = () => {


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
                        <Button type="submit" variant="contained" sx={{ marginLeft: "25px", color: "secondary" }} onClick={handleCreateMessage}>Отправить</Button>
                    </Grid>
                </Box>
            </Grid>

        </Grid>
    )
}