import { createSlice } from "@reduxjs/toolkit";
// import {Product} from '../types'

const cartSlice = createSlice({
    name: "CartSliceReducer",
    initialState: [{}],
    reducers:{
        addToCart: (state:Array<{}>, action)=>{
            const product = action.payload;
            return [...state, {product}]
        }
    }
})

export const {addToCart} = cartSlice.actions;
export const CartSliceReducer = cartSlice.reducer;