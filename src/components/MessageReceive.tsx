import { getHour } from "../helpers/getHour";
import { Message } from "../interfaces/messagesInterface";

interface Props {
    img?: string;
    msg: Message;
}

const MessageReceive = ({ img, msg }: Props ) => {
    const { mensaje:message, createdAt  } = msg;

    const date = getHour( createdAt );


    return (
        <div className='flex flex-row mr-4 mt-8 px-4'>
            <div className='w-[50px] self-end mr-2'>
                <img src={ img } className="rounded-full h-12" alt="avatar" />
            </div>
            <div>
                <div className=' w-[300px] shadow-md bg-[#FCFCFE] text-left p-2 pl-4 text-gray-700 rounded-t-3xl rounded-br-3xl mr-1'>
                    <p className='text-sm'>{message}</p>
                    <span className='text-[10px] text-gray-400'>{ date }</span>
                </div>
            </div>
        </div>
    )
}

export default MessageReceive