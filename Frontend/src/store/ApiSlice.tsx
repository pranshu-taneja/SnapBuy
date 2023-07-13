import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Product, Products} from "../types"

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({             
    Products: builder.query<Products, string>({      
      query : () => "products",  
    }),
    Product: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    })
  }),
});

export default api;
export const { useProductsQuery, useProductQuery } = api;       


