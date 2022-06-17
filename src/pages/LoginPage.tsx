import { useContext } from "react"
import { HiOutlineCheck } from "react-icons/hi"
import { IoLogInOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth/authContext"
import { useForm } from "../hooks/useForm"

const LoginPage = () => {

  const { signIn } = useContext(AuthContext);
  const { formValues ,email, password, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    // console.log(formValues);
    signIn( formValues );
  }

  return (
    <div className="max-w-[1440px] h-screen bg-[#2155BF] flex items-center">
        <div className="bg-[#F3F6FF] w-[60%] sm:w-[40%] h-[450px] rounded-3xl mx-auto">
          <h3 className="text-center font-bold text-3xl text-gray-800 mt-3">Sign In</h3>
          <form className="flex flex-col items-center mt-2">
            <p className="font-bold text-gray-700 my-3 self-start pl-10">Email</p>
            <input 
              type="text"
              className='w-[80%] p-3 focus:border-0 border-0 outline-0 shadow-md rounded-3xl ' 
              name="email" 
              value={ email }
              onChange={ handleChange }
              placeholder='Email'
            />
            <p className="font-bold text-gray-700 my-3 self-start pl-10">Password</p>
            <input 
              type="password"
              value={ password }
              onChange={ handleChange }
              className='w-[80%] p-3 focus:border-0 border-0 outline-0 shadow-md rounded-3xl ' 
              name="password" 
              placeholder='Password'
            />
              <div 
                className='flex justify-between items-center w-[70%] p-3 rounded-2xl mt-20 bg-[#E8EEF8] shadow-md cursor-pointer hover:bg-blue-300'
                onClick={ handleSubmit }  
              >
                <div className='bg-white rounded-full h-[33px] w-[18%] flex items-center'>
                    <IoLogInOutline color='#2155BF' className='mx-auto'/>
                </div>
                <p className='mr-10 text-base font-bold text-gray-700'>
                    Sign In
                </p>
                <div>
                    <HiOutlineCheck color='rgb(55 65 81)'/>
                </div>
              </div>

              <Link
                className="mt-2 self-center pr-8 text-gray-600 text-sm" 
                to="/auth/register"
              >
                <p className="">Don't have an account?</p>    
                <span  className="font-bold text-gray-600 text-sm hover:text-[#2155BF]">Sign Up, here</span>
              </Link>


          </form>
      </div>
    </div>
  )
}

export default LoginPage