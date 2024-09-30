import logo from '../asserts/logo.png'
import profile from '../asserts/profile.png'
import cart from '../asserts/cart.png'
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './Home';

export default function Dashboard() {
  const cartCount = useContext(CartContext);
  const navigate = useNavigate();

  function handleClick() {
    navigate('cart')
  }
  
    return (
        <>
            <div className="flex w-full bg-gray-100 h-20 justify-between p-1">
                <div className='flex'>
                    <img className='h-full w-36' src={logo} />
                    <div className='flex flex-col justify-center ms-6 text-base'>
                        <p className="font-mono border rounded-lg shadow p-1">
                            Delivering to Chennai 600007
                        </p>
                        <p className="font-mono border rounded-lg shadow text-center">
                            Update-location</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='font-mono flex border rounder-lg shadow p-2 m-2'>
                        <img src={profile} />
                        <p className='flex flex-col justify-center'>Profile</p>
                    </div>
                    <div onClick={handleClick} className='font-mono flex border rounder-lg shadow p-2 m-2'>
                        <img src={cart} />
                        <p className='flex flex-col justify-center'>Cart : {cartCount.count}</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}