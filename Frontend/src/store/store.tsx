import { configureStore } from "@reduxjs/toolkit";
import api from "./ApiSlice";

import { ProductSliceReducer } from "./ProductSlice";
import { CartSliceReducer } from "./CartSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    CartSliceState: CartSliceReducer,
    ProductSliceState: ProductSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export { store };
