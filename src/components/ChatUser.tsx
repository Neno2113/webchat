import { useContext } from "react";
import chatApi from "../api/chatApi";
import { ChatContext } from "../context/chat/chatContext";
import { User } from "../interfaces/authInterfaces";
import { MessageInterface } from "../interfaces/messagesInterface";



interface Props {
    user: User;
    img?: string;
}

const ChatUser = ( { img, user }: Props ) => {

  const {nombre:name, online, uid, email } = user;

  const { dispatch } = useContext( ChatContext );

  const handleActiveChat = async() => {
    dispatch({ type: 'activeChat', payload: user })

    const resp =  await chatApi.get<MessageInterface>(`/messages/${ uid }`);
    dispatch({
      type: 'loadMessages',
      payload: resp.data.messages
    })
    
  }

  return (
    <div
      onClick={ handleActiveChat } 
      className='flex justify-center border-b items-center
    border-gray-200 h-[4.5rem] hover:bg-[#F3F6FF] hover:border-l-4 hover:border-l-[#F26BAA] cursor-pointer'
    > 
        <div className='w-[50px] '>
            <img src={ img } className="rounded-full h-12" alt="avatar" />
        </div>
        <div className='ml-2'>
            <p className='font-bold text-gray-700'>{ name }</p>
            {
              online ? (
                <span className='text-green-600 text-sm'>Online</span>
              ) : (
                <span className='text-gray-400 text-sm'>Offline</span>
              )
            }
        </div>
    </div>



  )
}

export default ChatUser