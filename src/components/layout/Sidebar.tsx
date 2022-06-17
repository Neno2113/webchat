// import { AiOutlineSetting, AiOutlineUsergroupAdd, AiOutlineFileText } from 'react-icons/ai';
// import { IoNotificationsOutline } from 'react-icons/io5'
// import { RiMessage2Line } from 'react-icons/ri';
// import { BsCalendar4Range } from 'react-icons/bs'
import Logo from '../../assets/LogoV2.png'

const Sidebar = () => {
    return (
        <div className="w-[80px] bg-[#2155BF]  flex flex-col justify-around items-center px-4 ">
            <div className=''>
                <img src={ Logo } alt="logo" />
            </div>

            {/* <ul className='mb-30 '>
                <li className='py-4'>
                    <AiOutlineFileText color='#fff' size={25} />
                </li>
                <li className='py-4'>
                    <BsCalendar4Range color='#fff' size={25} />
                </li>
                <li className='py-4'>
                    <RiMessage2Line color='#fff' size={25} />
                </li>
                <li className='py-4'>
                    <IoNotificationsOutline color='#fff' size={25} />
                </li>
                <li className='py-4'>
                    <AiOutlineUsergroupAdd color='#fff' size={25} />
                </li>
                <li className='py-4'>
                    <AiOutlineSetting color='#fff' size={25} />
                </li>
            </ul> */}

        </div>
    )
}

export default Sidebar