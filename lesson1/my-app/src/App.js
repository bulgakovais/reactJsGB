
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components'
import { Chats } from './routes/ChatsRoutes'
import { Home } from './routes/HomeRoute'
import { Page404 } from './routes/Page404'
import { Profile } from './routes/Profile'
import { AllChats } from './routes/AllChats'
import { Provider } from 'react-redux'
import { Gallery } from './routes/Gallery'
import { SignUp } from './components'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { PublicRoute } from "./routes/PublicRoute"
import { PrivatRoute } from "./routes/PrivatRoute"

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path='/signup' component={SignUp}> </Route>
          <Route exact path="/chats" element={<PrivatRoute><AllChats /></PrivatRoute>} />


          <Route path="/chats/:chatId">
            <Chats />
          </Route>
          <Route exact path={"/profile"} element={<PrivatRoute><Profile /></PrivatRoute>} />

          <Route path="/gallery" component={Gallery}></Route>
          <Route path={"*"} component={Page404}></Route>
        </Switch>

      </PersistGate>
    </Provider >
  )
}

export default App;
