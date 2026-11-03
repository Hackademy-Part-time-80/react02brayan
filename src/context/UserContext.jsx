import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const sign_in = (newUser) => setUser(newUser);
  const logout = () => setUser(null);
  return (
    <UserContext.Provider value={{ user, sign_in, logout }}>
      {children}
    </UserContext.Provider>
  )
}