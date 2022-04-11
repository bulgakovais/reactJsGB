import { SignForm } from "../SignForm"

import { Link } from "react-router-dom"

export const SignUp = () => {

    const handleSignUp = () => {

    }
    return (
        <>
            <SignForm onSubmit={handleSignUp}></SignForm>
            <Link to="/">Войти</Link>
        </>
    )
}