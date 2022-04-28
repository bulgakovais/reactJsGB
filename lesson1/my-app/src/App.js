
import React from 'react'
import { ProjectRoutes } from './routes/ProjectRoutes/index'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <ProjectRoutes />

      </PersistGate>
    </Provider >
  )
}

export default App;
