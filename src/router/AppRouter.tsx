import { useContext, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
import AuthRouter from "./AuthRouter";
import ChatRouter from "./ChatRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const { auth, checkToken } = useContext( AuthContext );

    useEffect(() => {
        checkToken();

    }, [ checkToken ])
    
    if( auth.checking ){
        return (
        <div className="h-screen w-full flex items-center">
            <h1 className="font-bold mx-auto text-3xl text-gray-600 animate-pulse">Espere por favor...</h1>
        </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <ChatRouter />
                    </PrivateRoute>
                }/>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter