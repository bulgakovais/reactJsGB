
import { List, ListItem, Button, FormControl, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './chats.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { createMessage } from "../../store/messages/actions"
import { getChatsList } from '../../store/chats/selectors'
import { createChat, deleteChat } from '../../store/chats/actions'

export const ChatsList = () => {

    const chats = useSelector(getChatsList)
    const dispatch = useDispatch()
    let inputValue = ''

    const onChangeInput = (event) => {
        inputValue = event.target.value
    }

    const handleCreateChat = () => {
        dispatch(createChat({
            id: nanoid(),
            name: inputValue,
        }))
    }

    const handleDeleteChat = (itemId) => {
        dispatch(deleteChat({
            id: itemId,
        }))
    }
    // const handleCreateMessage = (itemId) => {
    //     dispatch(createMessage({
    //         chatId: itemId,
    //     }))
    // }

    let classNames = classnames(styles.link);


    return (
        <>
            <List>
                <h3 color='secondary'>Chats:</h3>

                {
                    chats?.map((item) => {
                        return <ListItem sx={{ display: 'flex', justifyContent: "space-between" }} key={item.id}>
                            <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>
                            <Button sx={{ color: 'darkred', fontSize: '10px' }} onClick={() => handleDeleteChat(item.id)}> х</Button>
                        </ListItem>
                    })
                }
            </List>
            <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
                <Input type="text" onChange={onChangeInput}></Input>
                <Button variant="outlined" sx={{ marginTop: '40px' }} onClick={handleCreateChat}>Добавить чат</Button>
            </FormControl>
        </>
    )
}

