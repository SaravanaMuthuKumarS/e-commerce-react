import { useState } from "react";
import Button from "../components/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate: NavigateFunction = useNavigate();

    function handleClick() {
        if (userName != '' && password != '') {
            navigate('/home')
        }
    }

    return (
        <>
            <div className="fixed bottom-72 left-96 bg-gray-200 rounded-lg shadow-md p-4">
                <h3 className="text-lg text-center font-bold mb-4">Login to Proceed</h3>
                <Input type="text" name="userName" content="Enter Your Name" click={setUserName} />
                <Input type="password" name="password" click={setPassword} content="Enter Password" />
                <div className="flex justify-center">
                <Button title="Login" click={handleClick} />
                </div>
            </div>
        </>
    )
}