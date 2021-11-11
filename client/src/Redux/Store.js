import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice";
import alertReducer from "./Slices/alertSlice";
import boardsReducer from "./Slices/boardsSlice";

const Store = configureStore({
    reducer : {
        user: userReducer,
        alert: alertReducer,
        boards: boardsReducer,
    },
}) 
export default Store;