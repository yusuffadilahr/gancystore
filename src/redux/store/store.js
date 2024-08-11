import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/slice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

console.log('create store: ', store.getState())

store.subscribe(() => {
    console.log('store updated:', store.getState())
})

export default store