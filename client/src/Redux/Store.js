import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice";
import alertReducer from "./Slices/alertSlice";

const Store = configureStore({
    reducer : {
        user: userReducer,
        alert: alertReducer,
    },
}) 
export default Store;