import { createStore } from "redux"
import { profileReducer } from "./profile/reducer"

export const store = createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(profileReducer(undefined, {}))
// console.log(profileReducer(undefined, { type: 'TOGGLE_PROFILE' }))

