import { createChat, deleteChat } from "../actions"
import { chatsReducer } from "../reducer"

describe('тесты на chatsReducer', () => {

    it("chatsReducer возвращает initialState при отсутствии в аргументах action", () => {
        const result = chatsReducer()
        expect(result).toEqual({ chatsList: [] })
    })

    it("чат добавляется в конец списка чатов", () => {
        const chat = {
            id: 1246,
            name: "John"
        }

        // undefined передается, чтобы установился initialState 
        // в редьюсере. И экшн с объектом
        const result = chatsReducer(undefined, createChat(chat))

        expect(result).toEqual({
            chatsList: [
                chat
            ]
        })
    })
    it("удаляет чат", () => {
        let chats = {
            chatsList: [
                { id: 1, chat: "chat1" },
                { id: 2, chat: "chat2" }
            ]
        }
        const chat = { id: 1, chat: "chat1" }
        const result = chatsReducer(chats, deleteChat(chat))

        expect(result).toEqual({
            chatsList: [
                { id: 2, chat: "chat2" }
            ]
        })
    })
})