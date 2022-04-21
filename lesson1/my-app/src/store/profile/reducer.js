import { TOGGLE_PROFILE } from "./actions"
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions'

const initialState = {
    isShow: true,
    authed: true,
    pass: '',
    email: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case (TOGGLE_PROFILE): {
            return {
                ...state,
                isShow: !state.isShow
            }
        }

        case (SIGN_IN): {
            return {
                ...state,
                authed: true,
                pass: action.pass,
                email: action.email
            }
        }
        case (SIGN_OUT): {
            return {
                ...state,
                authed: false,
            }
        }
        case (SIGN_UP): {
            return {
                ...state,
                authed: true,
            }
        }

        default: {
            return state
        }
    }
}