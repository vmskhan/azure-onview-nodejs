import { createSlice } from "@reduxjs/toolkit";

const AuthSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,userInfo:{}},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
        addUserInfo(state,action){
           state.userInfo=action.payload; 
        },
        removeUserInfo(state){
            state.userInfo=undefined;
        },
    },
});
export const authActions=AuthSlice.actions;
export default AuthSlice;