import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";
import OfferPage from "../pages/OfferPage";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute.tsx";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route index element={<Navigate to="login" replace />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="home" element={<Home />}>
                            <Route path="cart" element={<Cart />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="product" element={<ProductPage />} />
                            <Route index element={<OfferPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}