import { TOGGLE_PROFILE } from "./actions"


const initialState = {
    isShow: true,
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case (TOGGLE_PROFILE): {
            return {
                isShow: !state.isShow
            }
        }
        default: {
            return state
        }
    }
}