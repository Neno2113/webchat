import { useContext, useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { User } from "../../interfaces/authInterfaces";
import { AuthContext } from "../auth/authContext";
import { ChatContext } from "../chat/chatContext";
import { SocketContext } from "./socketContext";


interface Props {
    children: JSX.Element | JSX.Element[];
}

const baseUrl = process.env.REACT_APP_SERVER_PATH || '';

const SocketProvider = ({ children }:Props) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket( baseUrl );
    const { dispatch } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );

    
    useEffect(() => {
        if( auth.logged ){
            connectSocket();
        }
    }, [ auth, connectSocket ])

    useEffect(() => {
        if( !auth.logged ){
            disconnectSocket();
        }
    }, [ auth, disconnectSocket ])
    

    useEffect(() => {
        socket?.on('lista-usuarios', ( users:User[] ) => {
            dispatch({ type: 'loadUsers', payload: { users }})            
        })
    }, [ socket, dispatch ])

    useEffect(() => {
        socket?.on('mensaje-personal', ( message ) => {
            dispatch({ type: 'newMessage', payload: message})
            
        })
    }, [ socket, dispatch ])
    
    

    return (
        <SocketContext.Provider value={{
            socket
        }}>
            { children }
        </SocketContext.Provider>
        
    )
}

export default SocketProvider