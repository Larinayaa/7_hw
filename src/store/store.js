import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import counterReducer from "./counterSlice";
import taskReducer from "./taskSlice";
import postReducer from "./postSlice"; 
import userReducer from "./userSlice"; 
const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: counterReducer,
        tasks: taskReducer,
        posts: postReducer, 
        users: userReducer,  
    },
});
export default store;