import { React } from 'react';
import { SignForm } from "../../components"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectAuth } from "../../store/profile/selectors"
import classnames from 'classnames';
import styles from './home.module.css'
import { SIGN_IN } from "../../store/profile/actions"

export const Home = () => {

    const dispatch = useDispatch()

    const handleSignIn = () => {
        dispatch({
            type: SIGN_IN
        })
    }

    let classNames = classnames(styles.link, styles.margin);

    // const authed = useSelector(selectAuth)
    // console.log(authed)
    return (<>

        <SignForm onSubmit={handleSignIn} />
        <Link to="/signup" className={classNames}>Зарегистрироваться</Link>
    </>
    )
}

