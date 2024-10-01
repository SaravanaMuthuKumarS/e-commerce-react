import { createContext, useState } from "react";
import { AuthContextType } from "../type/AppTypes";

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: '',
    setUser: () => {},
    setIsAuthenticated: () => {}
});

export default function AuthContextProvider(props: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<string>('');

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}