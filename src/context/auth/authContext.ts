import { createContext } from "react";
import { LoginData } from "../../interfaces/authInterfaces";
import { InitialStateProps } from './AuthProvider'

interface ContextProps {
    auth: InitialStateProps;

    signIn: ({ email, password }: LoginData) => Promise<void>;
    signUp: ({ name, email, password }: LoginData) => Promise<void>;
    checkToken: () => Promise<boolean | undefined>
    logout: () => void;
}

export const AuthContext = createContext({} as ContextProps)