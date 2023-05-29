import { configureStore } from "@reduxjs/toolkit";
import StudentSliceReducer from './Student-Slice'

const Store = configureStore({
    reducer:{studentStore:StudentSliceReducer}
})

export default Store