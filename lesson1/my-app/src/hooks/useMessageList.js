import { useCallback, useState } from 'react';

export const useMessageList = () => {
    const [messageList, setMessageList] = useState([])

    const addNewMessage = useCallback(
        (message, auth) => {
            // messageList.pop().author == user ? author = bot : author = user
            const mes = {
                author: auth,
                message: message
            }
            setMessageList((prevState) => {
                return [
                    ...prevState,
                    mes
                ]
            })
            console.log(messageList)
        }, [messageList])

    return { messageList, addNewMessage }
}

