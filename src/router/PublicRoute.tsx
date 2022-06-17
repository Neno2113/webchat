import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const PublicRoute = ({ children }:Props) => {

    const { auth } = useContext( AuthContext );

    if( auth.logged ){
        return <Navigate to="/" />
    } else {
        return <>{ children }</>
    }


}

export default PublicRoute