// import { Message } from './components'
// import { Button } from './components'
import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { styles } from './App.css'
import { useCreateMessageForm } from './hooks/useCreateMessageForm'
import { useMessageList } from './hooks/useMessageList'

function App() {

  const { messageList, addNewMessage } = useMessageList()
  const { handleSubmit, onChangeInput, inputValue } = useCreateMessageForm({ onSubmit: addNewMessage })
  const messageText = 'Привет'
  useEffect(() => {
    if (messageList.length === 0) {
      return
    }
    const text = messageList[messageList.length - 1]
    if (text.author == 'bot') {
      return
    }
    addNewMessage(messageText, 'bot')
  }, [messageList])

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
