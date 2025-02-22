import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        changeCount: (state, action) => {
            state.count += action.payload; 
        },
    },
});
export const { changeCount } = counterSlice.actions;
export default counterSlice.reducer;
