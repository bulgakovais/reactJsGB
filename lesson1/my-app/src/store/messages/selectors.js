
//комбайнредьюсер => message => messageReducer
export const getMessageFromState = (state) => state.message

// из объекта редьюсера получаем массив [messagesList]
export const getMessageList = (state) => getMessageFromState(state).messagesList

// из всех сообщений получаем нужные по id чата
export const getMessageListByChat = (chatId, state) => getMessageList(state)[chatId]