import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logget } = useContext(AuthContext);

  return (!logget) ? children : <Navigate to="/"/>
}