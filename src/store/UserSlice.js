import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:'user',
    initialState:{tests:[],questions:[]},
    reducers:{
        updateTests(state,action){
            state.tests=action.payload;
        },
        updateQuestions(state,action){
            state.questions=action.payload;
        },
    },
});
export const userActions=UserSlice.actions;

export default UserSlice;