import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchThunk = createAsyncThunk("api/data", async()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = response.json();
        return data;
})