import { setMessages } from "../actions";
import { messageReducer } from "../reducer";

it('добавляет список сообщений', () => {
    const messages = {}

    const result = messageReducer(undefined, setMessages(messages));

    expect(result).toEqual({
        messagesList: {
            ...messages
        }
    })
})