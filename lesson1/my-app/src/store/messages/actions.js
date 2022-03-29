import { useDispatch } from "react-redux"
// const dispatch = useDispatch()
export const CREATE_MESSAGE = 'CREATE_MESSAGE'


export const createMessage = (chatId, message) => ({
    type: CREATE_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const createMessageWhisThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(createMessage(chatId, message))

    if (message.author !== 'Bot') {
        setTimeout(() => {
            const botMessage = {
                id: `mess${Date.now()}`,
                name: 'Hi! How do you do?',
                author: 'Bot'
            }
            dispatch(createMessage(chatId, botMessage))
        }, 1500)
    }
}