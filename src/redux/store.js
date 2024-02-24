import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer  from "./slices/cartSlice"
// import messageReducer from "./slices/messageSlice";
// import notesSlice from "./slices/notesSlice";

export default configureStore({
    reducer: {
        // messageReducer,
        // notesReducer: notesSlice
        productReducer,
        cartReducer
    }
})