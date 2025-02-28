import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/toDoSlice.js'

export const store = configureStore({
    reducer: todoReducer,
})

