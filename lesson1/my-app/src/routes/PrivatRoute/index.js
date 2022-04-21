
import { selectAuth } from "../../store/profile/selectors"
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export const PrivatRoute = ({ children }) => {

    const authed = useSelector(selectAuth)
    console.log(children)
    return (
        authed ? children : <Navigate to="/" replace />
    )
}