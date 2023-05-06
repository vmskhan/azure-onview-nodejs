import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:'user',
    initialState:{tests:[],questions:[],submission:{},searchValue:''},
    reducers:{
        updateTests(state,action){
            state.tests=action.payload;
        },
        updateQuestions(state,action){
            state.questions=action.payload;
        },
        updateSubmission(state,action){
            state.submission=action.payload;
        },
        updateSearchValue(state,action){
            state.searchValue=action.payload;
        },
    },
});
export const userActions=UserSlice.actions;

export default UserSlice;