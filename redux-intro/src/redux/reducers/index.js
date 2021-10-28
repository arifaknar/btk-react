import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
const reducers=combineReducers({
    counterReducer //Bütün reducerlar combineReducer ile toplanıp configureStore dosyasına export edilir.
})

export default reducers;