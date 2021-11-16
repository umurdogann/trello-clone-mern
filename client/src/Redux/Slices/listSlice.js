import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allLists:[],
    loadingListService:true,
}

const listSlice = createSlice({
    name:"list",
    initialState,
    reducers: {
        setLoading: (state,action)=>{
            state.loadingListService = action.payload;
        },
        successCreatingList: (state,action)=>{
            state.allLists.push(action.payload);
        },
        successFetchingLists: (state,action)=>{
            state.allLists = action.payload;
        }
    }
});

export const {setLoading, successCreatingList, successFetchingLists} = listSlice.actions;

export default listSlice.reducer; 