import { useContext } from "react"
import { HiOutlineCheck } from "react-icons/hi"
import { IoLogInOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth/authContext"
import { useForm } from "../hooks/useForm"

const RegisterPage = () => {

  const { signUp } = useContext(AuthContext);
  const { formValues, name ,email, password, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    // console.log(formValues);
    signUp( formValues );
  }

  return (
    <div className="max-w-[1440px] h-screen bg-[#2155BF] flex items-center">
        <div className="bg-[#F3F6FF] w-[40%] sm:w-[40%] h-[500px] rounded-3xl mx-auto">
          <h3 className="text-center font-bold text-3xl text-gray-800 mt-3">Sign Up</h3>
          <form className="flex flex-col items-center mt-2">
            <p className="font-bold text-gray-700 my-3 self-start pl-10">Name</p>
            <input 
              type="text"
              className='w-[80%] p-3 focus:border-0 border-0 outline-0 shadow-md rounded-3xl ' 
              name="name" 
              value={ name }
              onChange={ handleChange }
              placeholder='Name'
            />
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
                className='flex justify-between items-center w-[70%] p-3 rounded-2xl mt-8 bg-[#E8EEF8] shadow-md cursor-pointer hover:bg-blue-300'
                onClick={ handleSubmit }  
              >
                <div className='bg-white rounded-full h-[33px] w-[18%] flex items-center'>
                    <IoLogInOutline color='#2155BF' className='mx-auto'/>
                </div>
                <p className='mr-10 text-base font-bold text-gray-700'>
                    Sign Up
                </p>
                <div>
                    <HiOutlineCheck color='rgb(55 65 81)'/>
                </div>
              </div>

              <Link
                className="mt-2 self-center pr-8 text-gray-600 text-sm" 
                to="/auth/"
              >
                <p className="">Already registered?</p>    
                <span  className="font-bold text-gray-600 text-sm hover:text-[#2155BF]">Log In, here</span>
              </Link>
          </form>
      </div>
    </div>
  )
}

export default RegisterPage