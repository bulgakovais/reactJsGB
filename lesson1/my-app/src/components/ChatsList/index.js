import { List, ListItem } from '@mui/material';
import { nanoid } from 'nanoid';

export const ChatsList = () => {
    const chats = [
        { name: 'Irina', id: nanoid() },
        { name: 'Vit', id: nanoid() },
        { name: 'Yliana', id: nanoid() },
        { name: 'Kir', id: nanoid() },
        { name: 'Svetlana', id: nanoid() },
        { name: 'Serg', id: nanoid() }
    ]



    return (
        <List>
            <h3 color='secondary'>Chats:</h3>
            {
                chats.map((item) => {
                    return <ListItem key={item.id}>
                        {item.name}
                    </ListItem>
                })
            }
        </List>
    )
}