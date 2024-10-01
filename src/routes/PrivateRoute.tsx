import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContextType } from "../type/AppTypes";

export default function PrivateRoute() {
    const { isAuthenticated } = useContext<AuthContextType>(AuthContext);
    return (
        <>
        {!isAuthenticated ? <Navigate to = "/login" replace/> : <Outlet />}
        </>
    );
}