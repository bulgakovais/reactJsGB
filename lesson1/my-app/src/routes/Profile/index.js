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
        <Box sx={
            { padding: '15px', marginTop: '50px', fontSize: '18px', color: '#0099FF', fontWeight: 'bold' }} > PROFILE </Box>

        <Button sx={
            { display: 'flex', marginTop: '20px', marginLeft: '10px' }}
            onClick={handleClickLogOut}
            color="secondary" > Выйти из аккаунта  </Button>

    </div>)

}