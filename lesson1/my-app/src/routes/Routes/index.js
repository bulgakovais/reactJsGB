
import { Routes, Route } from 'react-router-dom'
import { Header } from '../../components'
import { Chats } from '../ChatsRoutes'
import { Home } from '../HomeRoute'
import { Page404 } from '../Page404'
import { Profile } from '../Profile'
import { AllChats } from '../AllChats'

import { Gallery } from '../Gallery'
import { SignUp } from '../../components'
import { PrivatRoute } from "../PrivatRoute"
import { PublicRoute } from "../PublicRoute"
import { auth } from '../../services/firebase'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { signIn, signOut, } from '../../store/profile/actions'


export const ProjectRoutes = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn())
            }
            else { dispatch(signOut()) }
        })

        return unsubscribe

    }, [])

    return (
        <Routes>
            <Route path='/' element={<Header />}>
                {/* в Header.index.js прописала <Outlet/> куда попадaют все руты, 
                находящиеся в Route path='/' element={<Header />}  */}

                <Route index element={<PublicRoute><Home /></PublicRoute>} />

                <Route path='signup' element={<SignUp />} />
                <Route exact path="chats" element={<PrivatRoute><AllChats /></PrivatRoute>} />


                <Route path="chats/:chatId" element={<PrivatRoute><Chats /></PrivatRoute>} />
                <Route exact path={"profile"} element={<PrivatRoute><Profile /></PrivatRoute>} />

                <Route path={"gallery"} element={<Gallery />} />
                <Route path={"*"} element={<Page404 />} />

            </Route>
        </Routes>

    )
}