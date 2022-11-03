import * as React from 'react';
import { Box, Button } from '@mui/material';
import { logOut } from '../../services/firebase';
import { useState } from 'react'


export const Profile = () => {

    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClickLogOut = async () => {
        setLoading(true)
        try {
            await logOut()
            setLoading(false)
        } catch (err) {
            console.error(err)
            setErr(err)
        } finally { setLoading(false) }
    }

    return (<div>
        <Box sx={{
            height: 60, marginTop: "40px", color: "white", marginLeft: '20px', fontSize: '20px'
        }}>
            Это Ваш личный кабинет. Скоро здесь вы сможете здесь написать что-нибудь интересное о себе.
             </Box>

        <Button sx={
            { display: 'flex', marginTop: '20px', marginLeft: '10px' }}
            onClick={handleClickLogOut}
            color="secondary" > Выйти из аккаунта  </Button>

    </div>)

}