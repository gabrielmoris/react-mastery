import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListenr } from "../utils/firebase/firebase.utils.js";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUSer: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUSer = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
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
