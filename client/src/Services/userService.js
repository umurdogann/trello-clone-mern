import axios from "axios";
import { registrationStart, registrationEnd } from "../Redux/Slices/userSlice";
import { openAlert } from "../Redux/Slices/alertSlice";
const baseUrl = "http://localhost:3001/user/";

export const register = async (
  { name, surname, email, password, repassword },
  callback,
  dispatch
) => {
  dispatch(registrationStart());
  if (password !== repassword) {
    dispatch(
      openAlert({
        message: "Your passwords does not match!",
        severity: "error",
      })
    );
  } else {
    try {
      const res = await axios.post(`${baseUrl}register`, {
        name,
        surname,
        email,
        password,
      });
      dispatch(
        openAlert({
          message: res.data.message,
          severity: "success",
          callback,
          duration: 1500,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        openAlert({
          message: error?.response?.data?.errMessage
            ? error.response.data.errMessage
            : error.message,
          severity: "error",
        })
      );
    }
    dispatch(registrationEnd());
  }
};
