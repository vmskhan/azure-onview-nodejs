import { createSlice } from "@reduxjs/toolkit";

const AdminDashboardSlice=createSlice({
    name:'adminDashboard',
    initialState:{usersList:[],tests:[],questions:[],submissions:[]},
    reducers:{
        updateUsers(state,action){
            state.usersList=action.payload;
        },
        updateTests(state,action){
            state.tests=action.payload;
        },
        updateQuestions(state,action){
            state.questions=action.payload;
        },
        updateSubmissions(state,action){
            state.submissions=action.payload;
        },
    },
});
export const adminDashboardActions=AdminDashboardSlice.actions;

export default AdminDashboardSlice;