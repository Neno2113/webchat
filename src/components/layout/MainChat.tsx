import { useContext } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import Img from '../../assets/user.png';
import ChatUser from '../ChatUser';
import UserHeader from '../UserHeader';
import { ChatContext } from '../../context/chat/chatContext';
import { AuthContext } from '../../context/auth/authContext';
import ChatInactive from '../ChatInactive';
import { useForm } from '../../hooks/useForm';
import { SocketContext } from '../../context/sockets/socketContext';



const MainChat = () => {

    const { chatState } = useContext( ChatContext );
    const { socket } = useContext( SocketContext );
    const { auth } = useContext( AuthContext );
    const { users } = chatState;
    const { uid } = auth;

    const { handleChange, message, resetForm } = useForm({
        message: ''
    });

    const sendMessage = () => {
        if( message.length === 0) return;

        socket?.emit('mensaje-personal', {
            de: auth.uid,
            para: chatState.activeChat?.uid,
            mensaje: message
        })
        
        resetForm();
    }

    return (
        <div className="md:col-span-2 bg-[#F3F6FF] lg:w-full w-[94%] ml-4 h-[610px] rounded-3xl mt-5">
            <div className="grid md:grid-cols-3 h-screen">
                <div className="bg-[#FCFCFE] rounded-3xl  w-full h-[560px] ml-4 mt-4 shadow-md">
                    <div className="flex flex-col h-full w-full">
                        <div className='flex flex-row justify-between px-4 py-4'>
                            <h3 className='text-xl font-bold text-gray-700'>Chat</h3>
                            <BsThreeDots className='self-end' color='#ccc' />
                        </div>
                        <div>
                            <div className=' mt-16 h-[390px] overflow-hidden overflow-y-scroll'>
                                {
                                    users?.filter( user => user.uid !== uid ).map( ( user, index) => (
                                        <ChatUser key={ index } img={Img} user={ user } />
                                    ))
                                }
                            </div>
                          
                        </div>
                    </div>
                </div>
                {
                    ( chatState.activeChat?.uid.length! > 0 )
                    ?  
                    <div className="col-span-2 h-[77%] overflow-y-scroll">
                        <div className='px-8 py-4'>
                        
                            <UserHeader 
                                img={ Img }
                                userName="Anel Dominguez"
                                online={true}
                            />

                            <div className='bg-[#FCFCFE] absolute bottom-16 w-[48%]  lg:w-[38%] rounded-3xl shadow-md h-[4.5rem]'>
                                <div className='flex items-center h-full justify-between px-10'>
                                    <input 
                                        type="text"
                                        className='w-full p-2 focus:border-0 border-0 outline-0' 
                                        name="message" 
                                        value={ message }
                                        onChange={ handleChange}
                                        placeholder='Type a message here...'
                                    />
                                    <div 
                                        onClick={ sendMessage }
                                        className='w-[3.5rem] bg-[#ecf1ff] shadow-md rounded-full cursor-pointer hover:bg-[#d9deee]'
                                    >
                                        <FiSend  size={18} color="#2155BF" className='rotate-45 h-12 ml-[1rem] mt-1'/>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                
                    </div>
                    : <ChatInactive />
                }


              
            </div>
        </div>
    )
}

export default MainChat