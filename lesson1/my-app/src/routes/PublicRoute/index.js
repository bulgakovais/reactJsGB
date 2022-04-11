
import { selectAuth } from "../../store/profile/selectors"
import { Redirect } from "react-router";
import { useSelector } from 'react-redux'
export const PublicRoute = ({ children }) => {

    const authed = useSelector(selectAuth)

    return (
        !authed ? { children } : <Redirect to="/chats" replace />
    )
}