import { NavigateFunction, useNavigate } from 'react-router-dom';
import profile from '../asserts/profile.png';
import Button from '../components/Button';
import { useContext } from 'react';
import Image from '../components/Image';
import { AuthContext } from '../context/AuthContextProvider';
import { AuthContextType } from '../type/AppTypes';

export default function Profile() {
    const { user } = useContext<AuthContextType>(AuthContext);
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className='flex justify-center font-mono'>
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md m-4 p-4 w-2/4">
                <Image source={profile} style='h-44 w-44 rounded-t' />
                <h2 className='text-lg font-semibold'>User - Details</h2>
                <h2 className="text-lg">Name : {user}</h2>
                <p className="text-lg">Date of Birth : 30-09-2002</p>
                <p className="text-lg">Location : Chennai</p>
                <p className="text-lg">Contact : 8248029445</p>
                <div className="flex justify-around w-full">
                    <Button title='Edit Profile' click={() => { }} />
                    <Button title='Change Password' click={() => { }} />
                    <Button title='Exit' click={() => { navigate(-1) }} />
                </div>
            </div>
        </div>
    );
}