import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pizzasReducer} from "./slices";

const rootReducer = combineReducers({
    pizzas:pizzasReducer
});

const store = configureStore({
    reducer:rootReducer
});

export {store};