import { TOGGLE_PROFILE } from "./actions"
import { SIGN_IN, SIGN_OUT } from './actions'

const initialState = {
    isShow: true,
    authed: true,
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
            }
        }
        case (SIGN_OUT): {
            return {
                ...state,
                authed: false,
            }
        }

        default: {
            return state
        }
    }
}