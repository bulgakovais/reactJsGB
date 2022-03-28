import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import { profileReducer } from "./profile/reducer"
import { chatsReducer } from './chats/reducer'
import { messageReducer } from './messages/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        message: messageReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

