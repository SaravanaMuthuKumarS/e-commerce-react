import logo from '../asserts/logo.png';
import profile from '../asserts/profile.png';
import home from '../asserts/home.png';
import product from '../asserts/product.png';
import cart from '../asserts/cart.png';
import logout from '../asserts/logout.png';
import Image from '../components/Image.tsx';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider.tsx';
import { AuthContextType, CartContextType } from '../type/AppTypes.tsx';
import { AuthContext } from '../context/AuthContextProvider.tsx';

export default function Dashboard() {
    const cartCount = useContext<CartContextType>(CartContext);
    const { setIsAuthenticated } = useContext<AuthContextType>(AuthContext);
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="flex w-full bg-gray-100 h-20 justify-between p-1 font-mono">
                <div className='flex'>
                    <Image source={logo} style='h-16 w-40' />
                    <div className='flex flex-col justify-center ms-6 text-base'>
                        <p className="border rounded-lg shadow p-1">
                            Delivering to Chennai 600007
                        </p>
                        <p className="border rounded-lg shadow text-center">
                            Update-location</p>
                    </div>
                </div>
                <div className='flex'>
                    <div onClick={() => navigate('/home')} className='flex border rounder-lg shadow p-2 m-2'>
                        <Image source={home} style="" />
                        <p className='flex flex-col justify-center'>Home</p>
                    </div>
                    <div onClick={() => navigate('product')} className='flex border rounder-lg shadow my-2'>
                        <Image source={product} style='w-20 h-14 mb-2' />
                        <p className='flex flex-col justify-center mx-2'>Products</p>
                    </div>
                </div>
                <div className='flex'>
                    <div onClick={() => navigate('profile')} className='flex border rounder-lg shadow p-2 m-2'>
                        <Image source={profile} style='' />
                        <p className='flex flex-col justify-center'>Profile</p>
                    </div>
                    <div onClick={() => navigate('cart')} className='flex border rounder-lg shadow p-2 m-2'>
                        <Image source={cart} style='' />
                        <p className='flex flex-col justify-center'>Cart : {cartCount.count}</p>
                    </div>
                    <Image source={logout} style="" click={() => setIsAuthenticated(false)} />
                </div>
            </div>
            <Outlet />
        </>
    );
}