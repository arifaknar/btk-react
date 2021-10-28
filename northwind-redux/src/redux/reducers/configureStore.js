import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index"

export default function congigureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}