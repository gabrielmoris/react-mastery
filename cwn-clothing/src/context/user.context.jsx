import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListenr } from "../utils/firebase/firebase.utils.js";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils.js";

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
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListenr((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUSer(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
