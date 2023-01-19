import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./listsSlice";

export default configureStore({
    reducer: {
        data: listsReducer,
    },
});