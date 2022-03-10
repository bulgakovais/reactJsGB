
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components'
import { Chats } from './routes/ChatsRoutes'
import { Home } from './routes/HomeRoute'
import { Page404 } from './routes/Page404'
import { Profile } from './routes/Profile'
import { Chat } from './routes/ChatRoute'
function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/chats" component={Chats}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats/:chatsId" component={Chat}></Route>
        <Route path="*" component={Page404}></Route>
      </Switch>
    </div>
  )
}

export default App;
