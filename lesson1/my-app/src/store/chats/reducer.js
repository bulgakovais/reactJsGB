import { CREATE_CHAT, DELETE_CHAT, SET_CHATS } from './actions'

const initialState = { chatsList: [] }

export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case (CREATE_CHAT):
            {
                return {
                    chatsList: [
                        ...state.chatsList,
                        action.payload
                    ]
                }
            }
        case (DELETE_CHAT):
            {
                const { id } = action.payload
                return {

                    chatsList: [
                        ...state.chatsList.filter(ch => ch.id != id)

                    ]
                }
            }

        case (SET_CHATS):
            {
                return {
                    chatsList: [...action.payload]
                }
            }

        default:
            {
                return state
            }
    }
}