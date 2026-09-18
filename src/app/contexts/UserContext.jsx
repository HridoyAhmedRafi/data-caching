"use client";
import { createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ User: "Rafi", isLoggenIn: true }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
