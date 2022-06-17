import { useContext, useState } from 'react';
import Img from '../../assets/user.png';
import { HiOutlineLogout, HiOutlineCheck } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../context/auth/authContext';


const Profile = () => {

    const { logout } = useContext(AuthContext);
    const [ nav, setNav ] = useState(false);

    const handleMenuMobile = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className=" hidden lg:grid bg-[#F3F6FF] w-[300px] h-[610px] rounded-3xl mt-5 ml-6">
                <div className='flex flex-col justify-center h-[50%] items-center'>
                    <div className='w-[70px] border-4 border-white rounded-full shadow-md'>
                        <img src={ Img } className="rounded-full h-14" alt="avatar" />
                    </div>
                    <h4 className='font-bold text-gray-700 mt-2'>Anel Dominguez</h4>
                    <p className='text-xs text-gray-400'>Software Developer</p>

                    <div
                        onClick={ logout }
                        className='flex justify-between items-center w-[70%] p-3 rounded-2xl mt-20 bg-[#FEF0F6] shadow-md cursor-pointer hover:bg-red-100'
                    >
                        <div className='bg-white rounded-full h-[33px] w-[18%] flex items-center'>
                            <HiOutlineLogout color='#F26BAA' className='mx-auto'/>
                        </div>
                        <p className='mr-16 text-sm font-bold text-gray-700'>
                            Logout
                        </p>
                        <div>
                            <HiOutlineCheck color='rgb(55 65 81)'/>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                onClick={ handleMenuMobile }
                className='lg:hidden cursor-pointer z-10 absolute top-[5%] right-[1%]'
            >
                {!nav ? <FaBars color='#fff' size={20}/> : <FaTimes color='#fff' size={20}/>}
            </div>

            <div className={!nav ? 'hidden' : 'absolute bg-[#2155BF] w-[300px] right-[2%] lg:hidden  h-[610px] rounded-3xl mt-5 ml-6'}>
                <div className='flex flex-col justify-center h-[50%] items-center'>
                    <div className='w-[70px] border-4 border-white rounded-full shadow-md'>
                        <img src={ Img } className="rounded-full h-14" alt="avatar" />
                    </div>
                    <h4 className='font-bold text-white mt-2'>Anel Dominguez</h4>
                    <p className='text-xs text-gray-400'>Software Developer</p>

                    <div 
                        onClick={ logout }
                        className='flex justify-between items-center w-[70%] p-3 rounded-2xl mt-20 bg-[#FEF0F6] shadow-md cursor-pointer hover:bg-red-100'
                    >
                        <div className='bg-white rounded-full h-[33px] w-[18%] flex items-center'>
                            <HiOutlineLogout color='#F26BAA' className='mx-auto'/>
                        </div>
                        <p className='mr-16 text-sm font-bold text-gray-700'>
                            Logout
                        </p>
                        <div>
                            <HiOutlineCheck color='rgb(55 65 81)'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile