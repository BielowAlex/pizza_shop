import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pizzasReducer} from "./slices";
import {cartReducer} from "./slices/cart_slice";

const rootReducer = combineReducers({
    pizzas:pizzasReducer,
    cart:cartReducer
});

const store = configureStore({
    reducer:rootReducer
});

export {store};