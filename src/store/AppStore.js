import AdminDashboardSlice from "./AdminDashboardSlice";
import AuthSlice from "./AuthSlice";
import UserSlice from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        adminDashboard:AdminDashboardSlice.reducer,
        user:UserSlice.reducer,
    },
});

export default store;