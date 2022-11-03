import { React } from 'react';
import { SignForm } from "../../components/SignForm"
import { Link } from "react-router-dom"
import classnames from 'classnames';
import styles from './home.module.css'
import { logIn } from '../../services/firebase'
import { useState } from 'react'


export const Home = () => {

    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignIn = async (email, pass) => {
        setLoading(true)
        try {
            await logIn(email, pass)
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

    let classNames = classnames(styles.link, styles.margin);

    return (<>

        <SignForm onSubmit={handleSignIn} error={err} loading={loading} />
        <Link to="/signup" className={classNames}>Зарегистрироваться</Link>
    </>
    )
}

