
export const SET_MESSAGE = 'SET_MESSAGE'
export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const REMOVE_MESSAGE_BY_CHAT_ID = "REMOVE_MESSAGE_BY_CHAT_ID"

export const createMessage = (chatId, message) => ({
    type: CREATE_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const setMessages = (messages) => ({
    type: SET_MESSAGE,
    payload: {
        messages
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

export const removeMessageByChatId = (chatId) => ({
    type: "REMOVE_MESSAGE_BY_CHAT_ID",
    payload: chatId
})