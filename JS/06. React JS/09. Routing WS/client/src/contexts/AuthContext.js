import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
}); //default context for intelisense

