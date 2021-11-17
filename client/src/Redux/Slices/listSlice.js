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
        },
        successDeletingList: (state, action) => {            
            state.allLists = state.allLists.filter(list => list._id !== action.payload);
        }
    }
});

export const {setLoading, successCreatingList, successFetchingLists, successDeletingList} = listSlice.actions;

export default listSlice.reducer; 