// import { useCallback, useState } from 'react';

// import { nanoid } from 'nanoid'

// export const useMessageList = () => {
//     const [messageList, setMessageList] = useState([])

//     const addNewMessage = useCallback(
//         (message, auth) => {

//             const mes = {
//                 author: auth,
//                 message: message,
//                 id: nanoid()
//             }
//             setMessageList((prevState) => {
//                 return [
//                     ...prevState,
//                     mes
//                 ]
//             })
//             console.log(messageList)
//         }, [messageList])

//     return { messageList, addNewMessage }
// }

