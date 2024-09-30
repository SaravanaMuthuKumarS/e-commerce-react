import logo from '../asserts/logo.png'
import profile from '../asserts/profile.png'
import home from '../asserts/home.png'
import product from '../asserts/product.png'
import cart from '../asserts/cart.png'
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ContextProvider.tsx';

export default function Dashboard() {
    const cartCount = useContext(CartContext);
    const navigate = useNavigate();

    function handleCart() {
        navigate('cart')
    }

    function handleProduct() {
        navigate('product')
    }

    function handleHome() {
        navigate('/home')
    }

    return (
        <>
            <div className="flex w-full bg-gray-100 h-20 justify-between p-1">
                <div className='flex'>
                    <img className='h-16 w-36' src={logo} />
                    <div className='flex flex-col justify-center ms-6 text-base'>
                        <p className="font-mono border rounded-lg shadow p-1">
                            Delivering to Chennai 600007
                        </p>
                        <p className="font-mono border rounded-lg shadow text-center">
                            Update-location</p>
                    </div>
                </div>
                <div className='flex'>
                    <div onClick={handleHome} className='font-mono flex border rounder-lg shadow p-2 m-2'>
                        <img src={home} />
                        <p className='flex flex-col justify-center'>Home</p>
                    </div>
                    <div onClick={handleProduct} className='font-mono flex border rounder-lg shadow my-2'>
                        <img className='w-20 h-14 mb-2' src={product} />
                        <p className='flex flex-col justify-center mx-2'>Products</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='font-mono flex border rounder-lg shadow p-2 m-2'>
                        <img src={profile} />
                        <p className='flex flex-col justify-center'>Profile</p>
                    </div>
                    <div onClick={handleCart} className='font-mono flex border rounder-lg shadow p-2 m-2'>
                        <img src={cart} />
                        <p className='flex flex-col justify-center'>Cart : {cartCount.count}</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}