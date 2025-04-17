import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    cartItems : []
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers : {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem) {
                state.cartItems.push(action.payload)
                alert("Item added successfully")
            } else {
                alert("Item is already in the cart")
            }
        },

        removeFromCart : (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload)
        },

        clearCart : (state) => {
            state.cartItems = [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;