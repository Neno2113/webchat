import AuthProvider from "./context/auth/AuthProvider"
import ChatProvider from "./context/chat/ChatProvider"
import SocketProvider from "./context/sockets/SocketProvider"
// import ChatPage from "./pages/ChatPage"
import AppRouter from "./router/AppRouter"

const App = () => {
    return (
      <ChatProvider>
        <AuthProvider>
          <SocketProvider>
            <AppRouter />
          </SocketProvider>
        </AuthProvider>
      </ChatProvider>
    )
}

export default App