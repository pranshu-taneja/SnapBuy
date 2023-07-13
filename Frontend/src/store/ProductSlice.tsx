
import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    
    name:"ProductSliceReducer",
    initialState: [{}],
    reducers: {  
        addToCart : (state:Array<{}>, action)=>{
            const {productName} = action.payload;           
            return [...state, {productName}]                
        }
    }
})


export const ProductSliceReducer = ProductSlice.reducer;    
export const {addToCart} = ProductSlice.actions;            