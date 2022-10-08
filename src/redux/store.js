import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

let ext = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore({
  reducer, ext
  
});

export default store;
