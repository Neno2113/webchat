import { useCallback, useContext, useState } from "react";
import chatApi from "../../api/chatApi";
import { LoginData, LoginInterface } from "../../interfaces/authInterfaces";
import { ChatContext } from "../chat/chatContext";
import { AuthContext } from "./authContext"

interface Props {
    children: JSX.Element | JSX.Element[];
}

export interface InitialStateProps {
    uid: string,
    checking: boolean,
    logged: boolean,
    name: string,
    email: string,
}

const initialState: InitialStateProps = {
    uid: '',
    checking: true,
    logged: false,
    name: '',
    email: ''
}

const AuthProvider = ({ children }: Props ) => {

    const [ auth, setAuth ] = useState(initialState);
    const { dispatch } = useContext( ChatContext );


    const signIn = async( { email, password }:LoginData ) => {
        try {
            const resp = await chatApi.post<LoginInterface>('/auth/login', {email, password });
            const { uid, nombre:name, email:mail } = resp.data.user;
            localStorage.setItem('token', resp.data.token);
            setAuth({
                uid,
                name,
                email: mail,
                logged: true,
                checking: false,
            });

        } catch (error) {
            console.log(error);
            
        }
    }

    const signUp = async( { name:nombre, email, password }:LoginData ) => {
        try {
            const resp = await chatApi.post<LoginInterface>('/auth/new', {nombre, email, password });
            const { uid, nombre:name, email:mail } = resp.data.user;
            localStorage.setItem('token', resp.data.token);
            setAuth({
                uid,
                name,
                email: mail,
                logged: true,
                checking: false,
            });

        } catch (error) {
            console.log(error);
            
        }
    }



    const checkToken = useCallback( async() => {
       const token = localStorage.getItem('token');
       
       if( !token ){
        setAuth({
            uid: '',
            checking: false,
            logged: false,
            name: '',
            email: ''
        })
        return false;
       }

       try {
            const resp = await chatApi.get<LoginInterface>('auth/renew')
            if( resp.data.ok ){
    
                localStorage.setItem('token', resp.data.token);
                const { uid, nombre:name, email:mail } = resp.data.user;
                setAuth({
                    uid,
                    name,
                    email: mail,
                    logged: true,
                    checking: false,
                });
    
                return true;
            } else {
            
            setAuth({
                uid: '',
                checking: false,
                logged: false,
                name: '',
                email: ''
            })
            return false;
            }
       } catch (error) {
            console.log(error);
            setAuth({
                uid: '',
                checking: false,
                logged: false,
                name: '',
                email: ''
            })
       }
    
    },[])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            uid: '',
            checking: false,
            logged: false,
            name: '',
            email: ''
        });

        dispatch({ type: 'logoutMessages'})


    }
    

    return (
        <AuthContext.Provider value={{
            auth,
            ...auth,

            signIn,
            signUp,
            checkToken,
            logout,

        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider