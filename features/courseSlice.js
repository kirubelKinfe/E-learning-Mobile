import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course:[]
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourse: (state, action) => {
            state.course= action.payload
        }
    }
})

export const { setCourse } = courseSlice.actions

export const selectCourse = (state) => state.course.course;

export default courseSlice.reducer