import classnames from 'classnames';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'


export const Header = () => {

    let classNameFooter = classnames(styles.footer)
    let boxStyle = classnames(styles.box_style)
    let containerStyle = classnames(styles.container_style)
    let linkStyle = classnames(styles.link_style)

    const color2 = "#ff6492"
    const color3 = "#ffdd1c"
    const color4 = "#00dc82"
    return (
        <Container className={containerStyle}>
            <Box className={boxStyle}>
                <Link to='/chats' className={linkStyle} style={{ color: color2 }}>Список чатов</Link>
                <Link to='/profile' className={linkStyle} style={{ color: color3 }}> Личный кабинет</Link >
                <Link to="/" className={linkStyle} style={{ color: color4 }}> Вход / Регистрация</Link >
            </Box >
            <Outlet />
            <footer className={classNameFooter}>2022 Irina Bulgakova</footer>
        </Container>

    )
}

