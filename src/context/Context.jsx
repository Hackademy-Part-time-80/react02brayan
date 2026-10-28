import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [author, setAuhtor] = useState('Brayan Marino VilchezDaga');
  return (
    <Context.Provider value={{ author }}>
      {children}
    </Context.Provider>
  )
}