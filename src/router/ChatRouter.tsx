import { Route, Routes } from "react-router-dom"
import ChatPage from "../pages/ChatPage"

const ChatRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <ChatPage />}/>
            </Routes>
        </>
    )
}

export default ChatRouter