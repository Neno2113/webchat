import { createContext } from "react";
import { ChatAction, ChatState } from "./chatReducer";

export interface ChatContextProps {
    chatState: ChatState;
    dispatch: React.Dispatch<ChatAction>;
} 


export const ChatContext = createContext( {} as ChatContextProps);