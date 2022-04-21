import classnames from 'classnames';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'


export const Header = () => {

    let classNames = classnames(styles.link);
    let classNameFooter = classnames(styles.footer)

    return (

        <Container maxWidth='xl'>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Link to="/" className={classNames}>Главная страница</Link>
                <Link to='/chats' className={classNames}>Список чатов</Link>
                <Link to='/gallery' className={classNames}>Галерея</Link>
                <Link to='/profile' className={classNames}>Личный кабинет</Link>
            </Box >
            <Outlet />
            <footer className={classNameFooter}>2022</footer>
        </Container>

    )
}