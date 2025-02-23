import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import counterReducer from "./counterSlice"; 
import taskReducer from "./taskSlice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: counterReducer, 
        tasks: taskReducer,
    },
});
export default store;
