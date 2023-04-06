import { createSlice } from "@reduxjs/toolkit";

const AdminDashboardSlice=createSlice({
    name:'adminDashboard',
    initialState:{usersList:[],tests:[]},
    reducers:{
        updateUsers(state,action){
            state.usersList=action.payload;
        },
        updateTests(state,action){
            state.tests=action.payload;
        },
    },
});
export const adminDashboardActions=AdminDashboardSlice.actions;

export default AdminDashboardSlice;