import classnames from 'classnames';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material'



export const Header = () => {
    let classNames = classnames(styles.link);
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Link to='/chats' className={classNames}>Список чатов</Link>
            <Link to='/profile' className={classNames}>Личный кабинет</Link>
        </Box>
    )
}