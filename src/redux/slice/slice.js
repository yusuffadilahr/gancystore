import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem('cart')) || []
    },
    reducers: {
        AddtoCart: (state, action) => {
            const ItemInCart = state.data.find(
                (item) => item.id === action.payload.id)
            if (ItemInCart) {
                ItemInCart.quantity++
            } else {
                state.data.push({ ...action.payload, quantity: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        RemoveCart: (state, action) => {
            const ItemInCart = state.data.find(
                (item) => item.id === action.payload.id
            )
            if (ItemInCart) {
                ItemInCart.quantity--
                if (ItemInCart.quantity === 0) {
                    state.data = state.data.filter((item) => item.id !== action.payload.id)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.data))
        }
    }
})

export const { AddtoCart, RemoveCart } = cartSlice.actions
export default cartSlice.reducer