import MessageReceive from './MessageReceive';
import MessageSent from './MessageSent';
import Img from '../assets/user.png';
import { useContext } from 'react';
import { ChatContext } from '../context/chat/chatContext';
import { AuthContext } from '../context/auth/authContext';


interface Props {
    img?: string;
    userName?: string;
    online?: boolean;
}

const UserHeader = ({ img, userName, online }:Props) => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );
    const { messages } = chatState;

    return (
        <>
            {
                messages?.map( ( msg, index ) => (
                    ( msg.para === auth.uid)
                    ? <MessageReceive 
                        key={ index }
                        img={ Img } 
                        msg={ msg }
                    />
                    : <MessageSent 
                        key={ index }
                        img={ Img } 
                        msg={ msg }
                    />
                ))
            }
        </>
    )
}

export default UserHeader