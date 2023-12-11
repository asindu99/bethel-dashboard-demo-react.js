// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom'
// import LoginSlice from '../../reducers/Loginreducer';
// import axios from 'axios';
// import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'
// import userDataSlice from '../../reducers/userDataReducer';
import Web3Modal from "web3modal";
const { ethers } = require("ethers");
// import { ethers } from "ethers";


const providerOptions = {

}

function Login() {
  async function connectWallet(){
    try {
      let web3Modal = new Web3Modal({
        cacheProvider : false,
        providerOptions,
      })

      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.provider.web3Provider(web3ModalInstance);

      console.log(web3ModalProvider)
    } catch (error) {
      console.log(error)
    }
  }
// const [email , setEmail] = useState('')
// const [password , setPassword] = useState('')

// const [isLoading , setIsLoading] = useState(false)
// const [logFail , setLogFail] = useState(false)


// const dispatch = useDispatch(); 
// const Navigate = useNavigate();

// const handleSubmit = async(e) =>{
//   e.preventDefault();
//   setIsLoading(true)

//   try {
//     const res = await axios.post('https://mw.bethel.network/auth/login' ,
//       {
//         email: email,
//         password: password,  
//       },
//       {withCredentials: true})
   
//     if(res.status === 200){
//       dispatch(LoginSlice.actions.saveUser(res.data))
//       setIsLoading(false)
//       Navigate('/dashboard')
//     } else{
//       setLogFail(true)
//     }
//     } catch (error) {

//       console.log(error)
//       setIsLoading(false)
//       setLogFail(true)

//       setTimeout(() => {
//         setLogFail(false)
//       }, 3000);
//     }
  
  
 

  return (

    <section className='relative w-full min-h-screen px-5 bg-black'>
    {/* Top vector pattern */}
    <div className='flex flex-col items-center w-[98%] h-[400px] rounded-b-xl  absolute bg-black top-0'>
      <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
    {/* Bottom vector pattern */}
    <div className='flex flex-col items-center w-[98%] h-[200px] rounded-b-xl  absolute bg-black bottom-0 rotate-180'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
    
    {/* Middle content section */}
    <div className='flex items-center justify-center w-full min-h-screen'>
     
      {/* <div className='flex'>
        <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
        <p className='text-center text-white text-[14px]'>Use these awesome forms to login or create new account in your project for free.</p>
      </div> */}
      
      

      <div className='w-[400px] h-[400px] backdrop-blur-md bg-white/10 rounded-md  flex relative'>
        
      <div className='absolute -top-36'>
        <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
        <p className='text-center text-white text-[14px]'>Please connect in to the your account and start the adventure!</p>
      </div>
        
      
        <form class="px-10 relative left-16 top-10 ">
        <h1 className='text-center text-[18px] text-white p-5 uppercase'>Login</h1>
      <div class="flex items-center border-2 py-2 px-3 rounded-xl mb-4 mt-10">
      <svg viewBox="0 0 1024 1024" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"></path></g></svg>

      <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px]" type="email" name="" id="" placeholder="Wallet Address" />
      </div> 
      
      <button onClick={connectWallet} type="submit" class="block w-full bg-bethel-green/80 mt-4 py-2 rounded-xl text-white font-semibold mb-2 uppercase">
       <h3>Connect Wallet</h3>
        </button>

      {/* { logFail && <div>


        <h3 className='p-2 text-sm text-center text-red-700 border-2 rounded-lg border-bethel-green'>Invalid Email or Password</h3>

      </div> } */}
      
      {/* <div class="flex items-center justify-center pt-10">
            <span class="text-sm ml-2  text-white">New to our platform ? <span class="text-gray-400 text-sm cursor-pointer">Create an account</span></span>
      </div> */}
      <div class="flex items-center justify-center relative">
      {/* <Link to='/register'><span class="text-bethel-green cursor-pointer text-center ">Register</span></Link> */}

      <div className='absolute bottom-[-50px] text-[10px] text-white'>
        <h3>Version 3.4.1</h3>
      </div>
      </div>
       
        </form>  
      </div>

      
      
    </div>
    
        {/* Footer vector pattern */}
    {/* <div class="flex flex-col items-center w-full  h-[400px] rounded-b-xl  absolute bg-white top-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div> */}

    
    

  </section>

  )
}

export default Login
