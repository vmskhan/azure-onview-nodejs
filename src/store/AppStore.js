import AdminDashboardSlice from "./AdminDashboardSlice";
import AuthSlice from "./AuthSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        adminDashboard:AdminDashboardSlice.reducer,
    },
});

export default store;