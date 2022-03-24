
import { CREATE_CHAT, DELETE_CHAT } from './actions'

const initialState = {
    chatsList: [
        { name: 'Mash', id: 1 },
        { name: 'GeekBrains', id: 2 },
        { name: 'Новости Москвы', id: 3 },
        { name: 'National Geographic', id: 4 },

    ],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CREATE_CHAT): {
            return {
                ...state,
                chatsList: [
                    ...state.chatsList,
                    action.payload
                ],
            }
        }
        case (DELETE_CHAT): {
            const { id } = action.payload
            return {

                chatsList: [
                    ...state.chatsList.filter(ch => ch.id != id
                    )

                ]
            }
        }
        default: {
            return state
        }
    }
}