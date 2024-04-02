import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const {autenticado} = useAuth();

  return autenticado > 0 ? <Item />: <RegisterUser />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="*" element={<RegisterUser />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
