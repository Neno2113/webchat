import { useReducer } from "react";
import { ChatContext } from "./chatContext"
import { chatReducer, ChatState } from "./chatReducer";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const chatInitialState:ChatState = {
    uid: '',
    activeChat: { 
        uid: '',
        nombre: '',
        email: '',
        online: false
    },
    users: [],
    messages: [],
}

const ChatProvider = ({ children }: Props ) => {

    const [ chatState, dispatch ] = useReducer( chatReducer, chatInitialState )

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch,
        }}>
            { children }
        </ChatContext.Provider>
    )
}

export default ChatProvider