import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    nums: 0,
    sum: 0
}


const cartSlice = createSlice({
        name: 'cartSlice',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
                state.nums = state.cart.length;
                state.sum += action.payload.price;
            },
            removeOnePizza: (state, action) => {
                state.sum -= state.cart[action.payload].price;
                state.cart.splice(action.payload, 1);
                state.nums = state.cart.length;
            },
            cartClear: (state) => {
                state.cart = [];
                state.nums = 0;
                state.sum = 0;
            }
        }

    })
;

const {reducer: cartReducer, actions: {addToCart, removeOnePizza,cartClear}} = cartSlice;

const cartAction = {
    addToCart,
    removeOnePizza,
    cartClear
}
export {
    cartReducer,
    cartAction
};
