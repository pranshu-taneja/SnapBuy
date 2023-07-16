import { createSlice } from "@reduxjs/toolkit";
import { FetchThunk } from "./Thunks/FetchThunk";


interface State = {
    
}

const ThunkSlice = createSlice({
    name: "ThunkSlice",
    initialState: {
        data : [{}],
        status: `Loading | Success | Error`,
        error: 
    },
    reducers:{
        //Normal Reducers
    },
    extraReducers:(builder)=>{
        builder.
        addCase(FetchThunk.pending, (state)=>{
            state.status = 'Loading'
        })
        .addCase(FetchThunk.fulfilled, (state, action)=>{
            state.status = 'Sucess',
            state.data.push(action.payload);
        })
        .addCase(FetchThunk.rejected, (state, action)=>{
            state.status = 'Error',
            state.error = action.error.message  
        })
    }
})