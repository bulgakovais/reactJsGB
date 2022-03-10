import { List, ListItem, Button } from '@mui/material';
// import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom'
import classnames from 'classnames';
import styles from './chats.module.css'


export const ChatsList = () => {

    const generateId = () => {
        return (Math.random().toString(36).substr(2, 9))

    }
    const chats = [
        { name: 'Irina', id: generateId() },
        { name: 'Vit', id: generateId() },
        { name: 'Yliana', id: generateId() },
        { name: 'Kir', id: generateId() },
        { name: 'Svetlana', id: generateId() },
        { name: 'Serg', id: generateId() }
    ]

    let classNames = classnames(styles.link);


    return (
        <>
            <List>
                <h3 color='secondary'>Chats:</h3>
                {
                    chats.map((item) => {
                        return <ListItem key={item.id}>
                            <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link >
                        </ListItem>
                    })
                }
            </List>
        </>
    )
}

