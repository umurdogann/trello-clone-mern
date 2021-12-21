import axios from "axios";

const setBearer = (bearerToken) => {
  if (bearerToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setBearer;
