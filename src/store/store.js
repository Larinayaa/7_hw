import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import counterReducer from "./counterSlice";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice"; 

const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: counterReducer,
        tasks: taskReducer,
        users: userReducer, 
    },
});

export default store;
