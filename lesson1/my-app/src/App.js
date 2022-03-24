
import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import { Header } from './components'
import { Chats } from './routes/ChatsRoutes'
import { Home } from './routes/HomeRoute'
import { Page404 } from './routes/Page404'
import { Profile } from './routes/Profile'
import { Messages } from './components/Messages'

import { store } from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Header />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path={'/chats'}>
          <Chats>

            {/* chatId НЕ ЗАПИСЫВАЕТСЯ В USEPARAMS!!!!???*/}

            <Route path={':chatId'}>
              <Messages />
            </Route>
          </Chats>
        </Route>
        <Route exact path={"/profile"} component={Profile}></Route>

        <Route path={"*"} component={Page404}></Route>
      </Switch>
    </Provider>
  )
}

export default App;
