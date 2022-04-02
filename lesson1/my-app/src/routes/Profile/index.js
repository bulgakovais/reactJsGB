import * as React from 'react';
import { Checkbox, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_PROFILE } from "../../store/profile/actions"

export const Profile = () => {

    const dispatch = useDispatch()
    const isShow = useSelector((state) => state.profile.isShow)
    const onChangeCheckBox = () => {
        dispatch({
            type: TOGGLE_PROFILE
        })
    }

    return (
        <div>
            <Box sx={{ padding: '15px', marginTop: '50px', fontSize: '18px', color: '#0099FF', fontWeight: 'bold' }}>PROFILE</Box>

            <Checkbox sx={{ padding: '15px' }} checked={isShow} color="secondary" onChange={onChangeCheckBox} />
        </div>
    )

}


