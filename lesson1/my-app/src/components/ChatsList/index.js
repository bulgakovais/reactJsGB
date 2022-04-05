
import { List, ListItem, Button, FormControl, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './chats.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getChatsList } from '../../store/chats/selectors'
import { createChat, deleteChat } from '../../store/chats/actions'

export const ChatsList = () => {

    const chats = useSelector(getChatsList)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleCreateChat = () => {
        dispatch(createChat({
            id: nanoid(),
            name: inputValue,
        }))
        setInputValue('')
    }

    const handleDeleteChat = (itemId) => {
        dispatch(deleteChat({
            id: itemId,
        }))
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

