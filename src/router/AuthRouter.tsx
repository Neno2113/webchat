import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"


const AuthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <LoginPage />}/>
                <Route path="/register" element={ <RegisterPage />}/>
            </Routes>
        </>
    )
}

export default AuthRouter