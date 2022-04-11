import { useState } from "react"
import { FormControl, Input, Button, TextField } from '@mui/material';

export const SignForm = ({ onSubmit }) => {
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

    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }} onSubmit={handleSubmit}>
            <TextField sx={{ margin: '15px' }}
                onChange={handleChangeEmail}
                value={email}
                type="text"
                id="outlined-basic"
                label="Email"
                variant="outlined" />
            {/* <Input onChange={handleChangeEmail} value={email} type="text">Email</Input> */}
            <TextField
                sx={{ margin: '15px' }}
                id="outlined-password-input"
                label="Пароль"
                type="password"
                autoComplete="current-password"
                onChange={handleChangePass}
                value={pass}
            />
            {/* <Input onChange={handleChangePass} value={pass} type="password">Пароль</Input> */}
            <Button type="submit">Отправить</Button>
        </FormControl>
    )





}