import React, { useEffect } from "react";
import Index from "./Components/Pages/IndexPage/Index";
import Login from "./Components/Pages/LoginPage/Login";
import Register from "./Components/Pages/RegisterPage/Register";
import Alert from "./Components/AlertSnackBar";
import { BrowserRouter, Switch } from "react-router-dom";
import Boards from "./Components/Pages/BoardsPage/Boards";
import ProtectedRoute from "./Utils/ProtectedRoute";
import { loadUser } from "./Services/userService";
import Store from "./Redux/Store";
import FreeRoute from "./Utils/FreeRoute";
const App = () => {
  useEffect(() => {
    loadUser(Store.dispatch);
  }, []);
  return (
    <BrowserRouter>
      <Alert />
      <Switch>
        <ProtectedRoute exact path="/boards" component={Boards} />
        <FreeRoute exact path="/login" component={Login} />
        <FreeRoute exact path="/register" component={Register} />
        <FreeRoute exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
