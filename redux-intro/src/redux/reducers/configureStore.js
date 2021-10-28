
import { createStore } from "redux";

import reducers from "./index";

export default function configureSore(){
    return createStore(reducers) // Create Store ile store oluşturup combineReducers ile kombin ettiğimiz reducers ları ekledik store içine.
    // Ana index dosyamıza export edip kullandık.
}

