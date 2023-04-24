import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducers";

// export default store = createStore(reducers);
var store = configureStore({ reducer: rootReducer })

export default store;