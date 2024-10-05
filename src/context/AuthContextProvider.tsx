import { createContext, useState } from "react";
import { AuthContextType } from "../type/AppTypes";

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isAdmin: false,
  userId: 0,
  setUserId: () => {},
  setIsAuthenticated: () => {},
  setIsAdmin: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userId,
        isAdmin,
        setIsAdmin,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
