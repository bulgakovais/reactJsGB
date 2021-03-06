import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import { profileReducer } from "./profile/reducer"
import { chatsReducer } from './chats/reducer'
import { messageReducer } from './messages/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//создаем конфигурацию, по которой будут сохраняться данные в хранилище
const config = {
    key: 'root',
    storage, // по умолчанию это localStorage в браузере
    // whitelist: 'chatsReducer',  // только данные из этого редьюсера кэшируются
    // blacklist: 'chatsReducer', //  данные этого редьюсера не кэшируются
}

const persistedReducer = persistReducer(config, combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer
}))

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store)

