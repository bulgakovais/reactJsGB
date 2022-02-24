import { Message } from './components'
import { Button } from './components'
import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { styles } from './App.css'
import { useCreateMessageForm } from './components/hooks/useCreateMessageForm'

// const onClick = () => {
//   console.log("клик")
// }


function App() {

  // const [inputValue, setInputValue] = useState('')
  const [messageList, setMessageList] = useState([])

  // const onChangeInput = useCallback((event) => {
  //   setInputValue(event.target.value)
  // })

  const addNewMessage = useCallback(
    (message) => {
      const mes = {
        author: 'User',
        message: message
      }
      setMessageList((prevState) => {
        return [
          ...prevState,
          mes
        ]
      })
      console.log(messageList)
    }, [])

  const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({ onSubmit: addNewMessage })
  // const resetInputValue = useCallback(() => {
  //   setInputValue('')
  // }, [])

  // const handleSubmit = useCallback((event) => {
  //   // отменяем действие по умолчанию
  //   event.preventDefault()
  //   addNewMessage(inputValue)
  //   resetInputValue()
  // }, [addNewMessage, inputValue, resetInputValue])

  return (
    <div className="App">
      <ul>
        {
          messageList.map(({ author, message }) => {
            return <li className="list" key={message}>
              {author} <input readOnly value={message} />
            </li>
          })
        }
      </ul>

      <form onSubmit={handleSubmit}>

        <input value={inputValue} onChange={onChangeInput} type="text" />
        <button className="btn" type="submit">Отправить</button>
      </form>

    </div>
  );
}
//<Message text={'lorem ipsum dolor sit am'}>
//         lorem ipsum dolor sit amet
//       </Message>

//       <Button onClick={onClick} text={'Button for example'}> </Button>

export default App;
