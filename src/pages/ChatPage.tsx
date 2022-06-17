import MainChat from "../components/layout/MainChat"
import Profile from "../components/layout/Profile"
import Sidebar from "../components/layout/Sidebar"

const ChatPage = () => {
    return (
        <div className="max-w-[1440px] h-[680px] bg-[#2155BF] flex">
            <Sidebar />
            <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <MainChat />
                <Profile />  

            </div>
        </div>
    )
}

export default ChatPage