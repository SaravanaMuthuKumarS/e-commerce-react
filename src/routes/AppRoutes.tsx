import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";
import OfferPage from "../pages/OfferPage";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="home" element={<Home />}>
                        <Route path="cart" element={<Cart />} />
                        <Route path="product" element={<ProductPage />} />
                        <Route index element={<OfferPage />} />
                        {/* <Route index element={<Navigate to="product" />} /> */}
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route index element={<Navigate to="login" />} />
                </Route>
            </Routes>
        </>
    )
}