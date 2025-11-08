import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link } from "react-router-dom"
import Input from '../../inputs/input';
import { validateEmail } from '../../Utils/helper';


const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error, setError] = useState(null);
  // const navigate = useNavigate(); // Will be used for navigation after login
// handle login 

const handleLogin = async (e) => {
  e.preventDefault();

  if(!email || !password){
    setError("please fill in both fields");
    return;
  }
  if (!validateEmail(email)) {
    setError("Please Enter a valid Email")
    return
    
  }
  if(!password){
    setError("Please Enter the password")
    return;
  }
  
  setError("")
  // login API call
}

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please Enter your Details to login</p>


        <form onSubmit={handleLogin}>
          <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            placeholder='John*******@gmail.c**'
            type='text'
            className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder='••••••••'
            type='password'
            className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {error &&  <p className='text-red-500 text-sm'>{error}</p>}
            
            <button
              type='submit'
              className="btn-primary"
            >
              LOGIN
            </button>

            <p className='mt-4 text-sm text-center text-gray-600'>
                Don't have an Account?{" "}
              <Link className="text-blue-600 hover:text-blue-800 font-medium hover:underline" to="/Signup">
                SignUp
              </Link>
            </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
