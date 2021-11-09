import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeAlert } from "../Redux/Slices/alertSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackBar = () => {
  const dispatch = useDispatch();
  const { open, message, severity, duration, callback } = useSelector(
    (state) => state.alert
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(reason, duration);
    dispatch(closeAlert());
    try {
      callback();
    } catch (error) {}
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertSnackBar;
