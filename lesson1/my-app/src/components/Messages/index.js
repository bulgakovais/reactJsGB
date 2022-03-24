
// import { getMessageListByChat, getMessageList } from "../../store/messages/selectors"

import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"
import { store } from '../../store'
import { List, ListItem, ListItemText } from '@mui/material';

export const Messages = () => {

    const { chatId } = useParams()
    const messageList = store.getState().message.messagesList[[chatId]]
    console.log(messageList)
    console.log((chatId))

    // !!!!!????????
    // какой-то ГЛЮК, не находит через селекторы (store/messages/selector.js) message из combineReducer, ПОЧЕМУ?

    // const messagesListByChat = useSelector(getMessageListByChat(chatId))
    // console.log(messagesListByChat)
    // const messageList = useSelector(getMessageList)
    // console.log(messageList)

    return <>

        <List>
            {
                messageList?.map((item) => {
                    return <ListItem className="list" key={item.id}>
                        <ListItemText sx={{ minWidth: '150px' }}>{item.name}</ListItemText>
                        <ListItemText sx={{ overflowWrap: 'break-word' }} primary='hi' />
                    </ListItem>
                })
            }
        </List>

    </>
}


