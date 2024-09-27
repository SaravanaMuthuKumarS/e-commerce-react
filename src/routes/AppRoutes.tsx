import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productpage from "../pages/Productpage";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="home" element={<Home />}>
                        <Route path="product" element={<Productpage />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route index element={<Navigate to="login" />} />
                </Route>
            </Routes>
        </>
    )
}