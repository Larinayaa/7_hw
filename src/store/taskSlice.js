import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: ["Задача 1", "Задача 2", "Задача 3"],
};
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((_, index) => index !== action.payload);
        },
        updateTask: (state, action) => {
            const { index, updatedTask } = action.payload;
            state.tasks[index] = updatedTask;
        },
    },
});
export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
