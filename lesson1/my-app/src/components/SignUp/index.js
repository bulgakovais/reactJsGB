import { SignForm } from "../SignForm"
import { useState } from 'react'
import { Link } from "react-router-dom"

import classnames from 'classnames';
import styles from './signUp.module.css'
import { Typography } from '@mui/material'
import { signUp } from '../../services/firebase'

export const SignUp = () => {

    let classNames = classnames(styles.link)

    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (email, pass) => {
        setLoading(true)
        try {
            await signUp(email, pass)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
            setErr(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (

        <>

            <SignForm onSubmit={handleSignUp} error={err} loading={loading} ></SignForm>


            <Typography sx={{ margin: '65px 0 25px 20px' }} variant="h5" gutterBottom component="div">
                А если аккаунта еще нет - Зарегистрироваться
            </Typography>



            <Link className={classNames} to="/">Войти в имеющийся аккаунт</Link>
        </>
    )
}