import { useState } from "react"
import { Button, TextField } from '@mui/material';
import classnames from 'classnames';
import styles from './signForm.module.css'

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePass = (event) => {
        setPass(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit(email, pass)
        setEmail('')
        setPass('')
    }

    let classNames = classnames(styles.form);
    let classNameBtn = classnames(styles.btn)
    return (
        <>
            <form className={classNames} onSubmit={handleSubmit} >
                <TextField sx={{ margin: '15px' }}
                    onChange={handleChangeEmail}
                    value={email}
                    type="text"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" />
                <TextField
                    sx={{ margin: '15px' }}
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChangePass}
                    value={pass}
                />
                <Button className={classNameBtn} type="submit">Отправить</Button>
            </form>

            {error && <h4>{error}</h4>}
        </>
    )
}