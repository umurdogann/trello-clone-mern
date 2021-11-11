import axios from "axios";
import { openAlert } from "../Redux/Slices/alertSlice";
import {
  failFetchingBoards,
  startFetchingBoards,
  successFetchingBoards,
} from "../Redux/Slices/boardsSlice";

const baseUrl = "http://localhost:3001/board";

export const getBoards = async (dispatch) => {
  dispatch(startFetchingBoards());
  try {
    const res = await axios.get(baseUrl + "/");
    dispatch(successFetchingBoards({ boards: res.data }));
  } catch (error) {
    dispatch(failFetchingBoards());
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};
