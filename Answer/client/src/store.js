import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./Features/EmployeeSlice"

export const store = configureStore({
    reducer: {employees:EmployeeReducer}
})