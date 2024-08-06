import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);
        
        return authData;
    }

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext()

    const registerHandler = async (username, email, password) => {
        const { password: _, ...authData } = await register(username, email, password);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext()

    const logoutHandler = async () => {
        await logout();
        localLogout();
    }

    return logoutHandler;
}