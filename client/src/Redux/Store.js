import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice";
import alertReducer from "./Slices/alertSlice";
import boardsReducer from "./Slices/boardsSlice";
import boardReducer from "./Slices/boardSlice";
import listReducer from "./Slices/listSlice";

const Store = configureStore({
    reducer : {
        user: userReducer,
        alert: alertReducer,
        boards: boardsReducer,
        board: boardReducer,
        list: listReducer,
    },
}) 
export default Store;