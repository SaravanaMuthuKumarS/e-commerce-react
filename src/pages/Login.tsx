import { FormEvent, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { AuthContextType, UserDetail } from "../type/AppTypes";
import { UserData } from "../data/userData";
import Input from "../components/Input";
import Button from "../components/Button";
import { HOME_ROUTE } from "../constants/navigationConstants";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retry, setRetry] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const { setIsAuthenticated, setUserId, setIsAdmin } =
    useContext<AuthContextType>(AuthContext);

  function handleClick(e: FormEvent) {
    e.preventDefault();
    let user: UserDetail | undefined = UserData.find((data) => {
      return data.name === userName && data.password === password;
    });
    if (user !== undefined) {
      setIsAuthenticated(true);
      setUserId(user.id);
      if (user.isAdmin) setIsAdmin(true);
      navigate(HOME_ROUTE);
    } else {
      setRetry(true);
    }
  }

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center font-mono">
      <div className="bg-gray-200 rounded-lg shadow-md p-4 w-96">
        <h3 className="text-lg text-center font-bold mb-4">Login to Proceed</h3>
        <form onSubmit={(e) => handleClick(e)}>
          <div className="flex gap-6 items-center justify-between">
            <p>UserName : </p>
            <Input
              type="text"
              name="userName"
              content="Enter Your Name"
              change={(e: any) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex gap-6 items-center justify-between mt-2">
            <p>Password : </p>
            <Input
              type="password"
              name="password"
              content="Enter Password"
              change={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-around cursor-pointer">
            <p className="text-lg border rounded-lg px-2 shadow">
              forgot password ?
            </p>
            <Button title="Login" />
          </div>
          {retry && <p className="text-red-500">Wrong Credentials, Retry !</p>}
        </form>
      </div>
    </div>
  );
}
