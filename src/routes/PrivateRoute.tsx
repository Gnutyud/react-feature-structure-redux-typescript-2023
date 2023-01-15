import { Outlet } from "react-router-dom";
import useAuth from './../hooks/useAuth';

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <h1>Login Page</h1>;
};

export default PrivateRoute;
