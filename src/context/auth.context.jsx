import { createContext, useReducer } from "react";

const DEFAULT_AUTH = { user: null };

export const AuthContext = createContext();

export const AUTH_ACTION_TYPES = {
  JOIN: "AUTH/JOIN",
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTION_TYPES.JOIN:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, DEFAULT_AUTH);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
