import { createContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
}); //default context for intelisense or if imported somewhere outside of the context provider

