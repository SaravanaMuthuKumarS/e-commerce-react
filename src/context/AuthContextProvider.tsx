import { createContext, useState } from "react";
import { AuthContextType } from "../type/AppTypes";

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    userId: 0,
    setUserId: () => {},
    setIsAuthenticated: () => {}
});

export default function AuthContextProvider(props: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userId, setUserId] = useState<number>(0);

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, userId, setUserId}}>
      {props.children}
    </AuthContext.Provider>
  );
}