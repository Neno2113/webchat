import { getHour } from "../helpers/getHour";
import { Message } from "../interfaces/messagesInterface";

interface Props {
    img?: string;
    msg: Message;

}

const MessageSent = ({ img, msg }:Props) => {
    const { mensaje:message, createdAt  } = msg;

    const date = getHour( createdAt );

    return (
        <div className='flex flex-row-reverse ml-4 mt-8'>
            <div className='w-[50px] self-end ml-2'>
                <img src={ img } className="rounded-full h-12" alt="avatar" />
            </div>
            <div>
                <div className=' w-[300px] bg-[#F26BAA] shadow-md text-right p-2 pr-4 text-white rounded-t-3xl rounded-bl-3xl mr-1'>
                    <p className='text-sm'>{ message }</p>
                    <span className='text-[10px] text-gray-700'>{ date }</span>
                </div>
            </div>
        </div>
    )
}

export default MessageSent