import { User } from "../../interfaces/authInterfaces";
import { Message } from "../../interfaces/messagesInterface";


export interface ChatState {
    uid?: string,
    activeChat?: User,
    users?: User[],
    messages?: Message[]
}


export type ChatAction = 
 | { type: 'loadUsers', payload:{ users: User[] }}
 | { type: 'activeChat', payload: User }
 | { type: 'logoutMessages' }
 | { type: 'loadMessages', payload: Message[] }
 | { type: 'newMessage', payload: any }





export const chatReducer = ( state:ChatState, action:ChatAction, ):ChatState => {

    switch ( action.type ) {
        case 'loadUsers':
            return {
                ...state,
                users: [ ...action.payload.users ]
            }
        case 'activeChat':
            if( state.activeChat === action.payload ) return state;

            return {
                ...state,
                activeChat: action.payload,
                messages: []
            }
        case 'logoutMessages':
            return {
                uid: '',
                activeChat: undefined,
                users: [],
                messages: []
            }
        case 'loadMessages':
            return {
                ...state,
                messages: [ ...action.payload ]
            }
        case 'newMessage':
            if( state.activeChat?.uid === action.payload.de || 
                state.activeChat?.uid === action.payload.para)
            {
                return {
                    ...state,
                    messages: [ ...state?.messages!, action.payload]
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}
