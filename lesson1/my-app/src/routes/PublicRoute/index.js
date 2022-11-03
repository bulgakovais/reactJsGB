
import { selectAuth } from "../../store/profile/selectors"
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export const PublicRoute = ({ children }) => {

    const authed = useSelector(selectAuth)

    return (
        !authed ? children : <Navigate to="/chats" replace />

    )
}