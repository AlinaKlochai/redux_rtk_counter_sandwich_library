import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";
import libraryReducer from "./libraryReducer";

// const rooReducer = combineReducers({
//     counter: counterReducer,
//     sandwich: sandwichReducer    //добавдения нового reducer в storage
// }

// const store = legacy_createStore(rooReducer);

//the same

const store = legacy_createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,   //добавдения нового reducer в storage
    library: libraryReducer
}))

export default store;

export type RootState = ReturnType<typeof store.getState>;