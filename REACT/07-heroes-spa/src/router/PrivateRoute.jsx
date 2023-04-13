import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logget } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', pathname + search);

  return (logget) ? children : <Navigate to="/login"/>
}