import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products, Product } from "../types";

const MyProductsAPI = createApi({
    reducerPath: "MyProductsAPI",           //This is the name of the state  where all the data of this specific apislice related will be stored and shown to you on the Redux dev tools as a state
    tagTypes : ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder)=>({
        MyProducts: builder.query<Products, string>({                   //Remember that's why you have to put in "" every time you are using the hook of this getting/fetching data LMAO!! Now got it🤣
            query: ()=> "object",                               //It doesn't require a parameter or argument tho as you can see 
            providesTags: ['Product']
        }),
        AddMyProduct: builder.mutation<void, Product>({             //first argument shows what it will return and second is for the data that it requires while calling the post request (i.e: post data that you will be providing while calling the hook)
            query: (data)=>({                   //Think of what will you need to make a post request (url, body, method)                                      //Here the data is the data that it received to make a post request (which will go to the body for posting)
                url: "/object",     
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Product']
        }),
        UpdateMyProduct: builder.mutation<void, Product>({
            query: ({id, ...rest})=>({
                url: `/object/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ['Product']
        }),
        DeleteMyProduct: builder.mutation<void, string>({
            query: (id)=>({
                url: `/object/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product']
        }),
    })
})



export default MyProductsAPI;
export const { useMyProductsQuery, useAddMyProductMutation, useDeleteMyProductMutation, useUpdateMyProductMutation }  = MyProductsAPI;           //Hook being Exported from Here