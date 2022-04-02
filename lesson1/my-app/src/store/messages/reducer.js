import { CREATE_MESSAGE } from "./actions"
import { DELETE_CHAT } from '../chats/actions'
import { CREATE_CHAT } from '../chats/actions'

const initialState = {
    messagesList: {}
}


export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case (CREATE_MESSAGE): {

            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.chatId]: [
                        ...(state.messagesList[action.payload.chatId] || []),
                        action.payload.message
                    ]
                }
            }
        }
        case (DELETE_CHAT): {
            const newState = { ...state }
            delete newState.messagesList[action.payload.chatId]

            return newState
        }

        default:
            return state;
    }
}