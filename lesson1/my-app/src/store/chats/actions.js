

export const CREATE_CHAT = 'CREATE_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const SET_CHATS = 'SET_CHATS'

export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const deleteChat = (chat) => ({
    type: DELETE_CHAT,
    payload: chat,
})

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats
})


// Thunk для взаимодействия с firebase 

// export const deleteChatWithThunk = (chatId) => {
//     chatsRef.child(chatId).remove((err) => {
//         if (err) {
//             console.error(err)
//         }
//     })
// }

// export const createChatWithThunk = (chat) => {
//     chatsRef.push(chat)
// }

// // Подписываемся на событие добавления чата
// export const onTrackingCreateChatWithThunk = (dispatch) => {
//     chatsRef.on('child_added', (snapshot) => {
//         dispatch(createChat(mapChatSnapShotToChat(snapshot)))
//     })
// }

// // Отписываемся от события добавления чата
// export const offTrackingCreateChatWithThunk = () => {
//     chatsRef.off('child_added')
// }

// // Подписываемся на событие удаления чата
// export const onTrackingDeleteChatWithThunk = (dispatch) => {
//     chatsRef.on('child_removed', (snapshot) => {
//         dispatch(deleteChat(snapshot.key))
//     })
// }

// // Отписываемся от события удаления чата
// export const offTrackingDeleteChatWithThunk = () => {
//     chatsRef.off('child_removed')
// }
