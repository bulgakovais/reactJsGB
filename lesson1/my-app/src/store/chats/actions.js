

export const CREATE_CHAT = 'CREATE_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'

export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const deleteChat = (chat) => ({
    type: DELETE_CHAT,
    payload: chat,
})
