import { CREATE_MESSAGE } from "./actions"
// import { VIEW_MESSAGE } from "./actions"

const initialState = {
    messagesList: {}

    // { id: 1, name: 'привет' }, { id: 2, name: 'медвед' }
    // {
    //     1: [{ id: 11, message: 'hi' },
    //     { id: 12, message: 'hif' },
    //     { id: 13, message: 'hiff' },
    //     { id: 14, message: 'hiffff' },]
    // },
    // { 2: [{ id: 15, message: '' }] }
}


export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case (CREATE_MESSAGE): {
            const { chatId, message } = action.payload
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [chatId]: [
                        ...(state.messagesList[chatId] || []),
                        message
                    ]
                }
            }
        }

        default:
            return state;
    }
}