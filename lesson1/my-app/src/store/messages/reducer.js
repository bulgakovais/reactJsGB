import { CREATE_MESSAGE, SET_MESSAGE } from "./actions"
import { DELETE_CHAT } from '../chats/actions'
import { REMOVE_MESSAGE_BY_CHAT_ID } from "./actions"


const initialState = {
    messagesList: {}
}


export const messageReducer = (state = initialState, action) => {

    switch (action?.type) {
        case (CREATE_MESSAGE):
            {
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
        case (SET_MESSAGE):
            {
                return {
                    messagesList: {
                        ...(action.payload.messages)

                    }
                }
            }
        case (DELETE_CHAT):
            {
                const newState = { ...state }
                delete newState.messagesList[action.payload.chatId]

                return newState
            }

        default:
            return state;
    }

}