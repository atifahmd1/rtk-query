import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { mySlice } from "./reducer";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [api.reducerPath]: api.reducer,
        // Add the other slices we've written

        // Add the slice for mySlice
        // mySlice: mySlice.reducer
        [mySlice.name]: mySlice.reducer  // above line can be written like this also
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),

    //shortcut for above line
    middleware: (mid) => mid().concat(api.middleware)


});