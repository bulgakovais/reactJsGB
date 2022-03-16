import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_PROFILE } from "../../store/profile/actions"

export const Profile = () => {

    const dispatch = useDispatch()
    const checkBoxIsShow = useSelector((state) => state.isShow)

    const onChangeCheckBox = () => {
        dispatch({
            type: TOGGLE_PROFILE
        })
    }

    return (

        <div>
            <Checkbox checked={checkBoxIsShow} color="secondary" onChange={onChangeCheckBox} />
        </div>
    )

}


