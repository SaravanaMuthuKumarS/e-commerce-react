import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { AuthContextType } from "../type/AppTypes";
import { Outlet } from "react-router-dom";

export default function AdminRoutes() {
  const { isAdmin } = useContext<AuthContextType>(AuthContext);
  return (isAdmin && <Outlet />);
}
