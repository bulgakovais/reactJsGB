
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components'
import { Chats } from './routes/ChatsRoutes'
import { Home } from './routes/HomeRoute'
import { Page404 } from './routes/Page404'
import { Profile } from './routes/Profile'
import { AllChats } from './routes/AllChats'
import { Provider } from 'react-redux'

import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/chats">
            <AllChats />
          </Route>
          <Route path="/chats/:chatId">
            <Chats />
          </Route>
          <Route exact path={"/profile"} component={Profile}></Route>

          <Route path={"*"} component={Page404}></Route>
        </Switch>
      </PersistGate>
    </Provider>
  )
}

export default App;
