
export const CREATE_MESSAGE = 'CREATE_MESSAGE'


export const createMessage = (chatId, message) => ({
    type: CREATE_MESSAGE,
    payload: {
        chatId,
        message
    }
})
