import { NavigateFunction, useNavigate } from 'react-router-dom';
import profile from '../asserts/profile.png';
import Button from '../components/Button';
import { useContext } from 'react';
import Image from '../components/Image';
import { AuthContext } from '../context/AuthContextProvider';
import { AuthContextType, UserDetail } from '../type/AppTypes';
import { UserData } from '../data/UserData';

export default function Profile() {
    const { userId } = useContext<AuthContextType>(AuthContext);
    const navigate: NavigateFunction = useNavigate();
    const user: UserDetail = UserData.find((data) => data.id == userId)!;
    return (
        <div className='flex justify-center font-mono'>
            <div className="flex flex-col items-center bg-gray-100 rounded shadow-md m-4 p-4 w-2/4">
                <Image source={profile} className='h-44 w-44 rounded-t' />
                <h2 className='text-lg font-semibold'>User - Details</h2>
                <h2 className="text-lg">Name : {user.name}</h2>
                <p className="text-lg">Date of Birth : {user.dob}</p>
                <p className="text-lg">Gender : {user.gender}</p>
                <p className="text-lg">Contact : {user.contact}</p>
                <p className="text-lg">Email : {user.email}</p>
                <p className="text-lg">Location : {user.location}</p>
                <div className="flex justify-around w-full">
                    <Button title='Edit Profile' click={() => { }} />
                    <Button title='Change Password' click={() => { }} />
                    <Button title='Exit' click={() => { navigate(-1) }} />
                </div>
            </div>
        </div>
    );
}