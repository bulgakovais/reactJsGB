import { CREATE_MESSAGE } from "./actions"
// import { CREATE_CHAT } from '../chats/actions'
// import { VIEW_MESSAGE } from "./actions"

const initialState = {
    messagesList: {}
}


export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case (CREATE_MESSAGE): {
            // const { chatId, message } = action.payload
            // return {
            //     ...state,
            //     messagesList: [
            //         ...state.messagesList,
            //         message
            //     ],

            // }
            return {
                ...state,
                messagesList: {
                    // ...state.messagesList,
                    [action.payload.chatId]: [
                        ...(state.messagesList[action.payload.chatId] || []),
                        action.payload.message
                    ]
                }
            }
        }
        // case (CREATE_CHAT): {
        //     return {
        //         ...state,
        //         [action.payload.chatId]: []
        //     }
        // }
        default:
            return state;
    }
}