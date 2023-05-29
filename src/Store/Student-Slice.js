import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name:'student',
    initialState:{
        studentData:{}
    },
    reducers:{
        addStudentInfo : (state, action) => {
            const newData = action.payload;
            state.studentData = newData;
        }
    }
})

export const studentSliceActions = studentSlice.actions;
export default studentSlice.reducer;