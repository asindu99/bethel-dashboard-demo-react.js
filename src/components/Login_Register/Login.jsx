import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import LoginSlice from '../../reducers/Loginreducer';
import axios from 'axios';
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'


function Login() {

const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

const [isLoading , setIsLoading] = useState(false)


const dispatch = useDispatch(); 
const Navigate = useNavigate();

const handleSubmit = async(e) =>{
  e.preventDefault();
  setIsLoading(true)

  const res = await axios.post('https://mw.bethel.network/auth/login' ,
    {
        email: email,
        password: password,  
    },
    {
        withCredentials: "true",  
    })

  dispatch(LoginSlice.actions.saveUser(res.data))
  setIsLoading(false)
  Navigate('/dashboard')
}

  return (

    <section className='h-screen px-5 bg-black'>
    {/* Top vector pattern */}
    <div className='flex flex-col items-center w-full justifyl-center h-[400px] rounded-b-xl  relative bg-black '>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill path3"></path>
      </svg>
    </div>
    
    {/* Middle content section */}
    <div className='flex items-center justify-center bg-transparent'>
      {/*Form Card  */}
    <div className='w-[400px] h-[400px] bottom-16 absolute backdrop-blur-md bg-white/10 rounded-md'>
      {/* Heading section */}
      <div className='relative'>
    <h1 className='text-center text-[18px] text-white p-5 '>Login</h1>
    <div className='absolute -top-32'>
    <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
    <p className='text-center text-white text-[14px]'>Use these awesome forms to login or create new account in your project for free.</p>
    </div>
      </div>
      {/* Form section */}
      <form class="px-10 py-5">
      
      <div class="flex items-center border-2 py-2 px-3 rounded-xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input onChange={(e) =>{setEmail(e.target.value)}} class="pl-2 outline-none border-none bg-transparent text-white text-[14px]" type="text" name="" id="" placeholder="Email Address" />
      </div> 
      
      <div class="flex items-center border-2 py-2 px-3 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd" />
          </svg>
          <input onChange={(e) =>{setPassword(e.target.value)}} class="pl-2 outline-none border-none bg-transparent  text-white text-[14px]" type="text" name="" id="" placeholder="Password" />
      </div>
      
      <button onClick={handleSubmit} type="submit" class="block w-full bg-[#aaff00]/80 mt-4 py-2 rounded-xl text-white font-semibold mb-2 uppercase">
        { !isLoading && <h3>Sign In</h3>} { isLoading && <div className='w-full flex justify-center'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}
      </button>

      <div class="flex items-center justify-center pt-10">
            <span class="text-sm ml-2  text-white">New to our platform ? <span class="text-gray-400 text-sm cursor-pointer">Create an account</span></span>
      </div>
      <div class="flex items-center justify-center">
      <Link to='/register'><span class="text-[#aaff00] cursor-pointer text-center ">Register</span></Link>
      </div>
       
      </form>  
          
   </div>
    
    </div>
    
    {/* Footer vector pattern */}
    <div class=" top-[250px] relative ">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
  </div>
</section>

  )
}

export default Login
