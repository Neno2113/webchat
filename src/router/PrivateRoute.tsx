import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const PrivateRoute = ({ children }:Props) => {


    const { auth } = useContext( AuthContext );

    if( auth.logged ){
        return <>{ children }</>
    } else {
        return <Navigate to="/auth/" />
    }


}

export default PrivateRoute