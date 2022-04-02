import { useSelector } from "react-redux"
import { getChatsList } from "../../store/chats/selectors"
import { List, ListItem, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './allChats.module.css'
import classnames from 'classnames';

export const AllChats = () => {

    let classNames = classnames(styles.link);
    const chats = useSelector(getChatsList)

    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Paper elevation={2} sx={{ padding: 2, height: '80vh', width: '100%' }}>

                <List>
                    <h3 color='secondary'>Chats:</h3>

                    {
                        chats?.map((item) => {
                            return <ListItem sx={{ display: 'flex', justifyContent: "space-between", paddingRight: '0px' }} key={item.id}>
                                <Link to={`/chats/${item.id}`} className={classNames}>{item.name}</Link>

                            </ListItem>
                        })
                    }
                </List>
            </Paper>
        </Container>
    )
}

