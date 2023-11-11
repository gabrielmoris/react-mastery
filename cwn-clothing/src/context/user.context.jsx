import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUSer: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState(null);
  const value = {
    currentUser,
    setCurrentUSer,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
