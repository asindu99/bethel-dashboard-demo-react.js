import React, { useState } from 'react'
import "../Login_Register/Register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'
// import { UseForm, useForm } from 'react-hook-form';


function Register() {
    
    // const {register,formState:{ errors}} = useForm();  
  
    // const [firstName , setFirstName] = useState('');
    // const [lastName , setlastName] = useState('');
    // const [email , setemail] = useState('');
    // const [password , setPassword] = useState('');
    // const [userName , setUserName] = useState('');
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName:'',
      lastName:''
      
    })
  
    const [errors, setErrors] = useState({})
  
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({
          ...formData, [name] : value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const validationErrors = {}
      if(!formData.username.trim()) {
          validationErrors.username = "username is required"
      }
      
      if(!formData.firstName.trim()) {
        validationErrors.firstName = "FirstName is required"
    }
    
    if(!formData.lastName.trim()) {
      validationErrors.lastName = "LastName is required"
  }
  
      if(!formData.email.trim()) {
          validationErrors.email = "email is required"
      } else if(!/\S+@\S+\.\S+/.test(formData.email)){
          validationErrors.email = "email is not valid"
      }
  
      if(!formData.password.trim()) {
          validationErrors.password = "password is required"
      } else if(formData.password.length < 6){
          validationErrors.password = "password should be at least 6 char"
      }
  
      if(formData.confirmPassword !== formData.password) {
          validationErrors.confirmPassword = "password not matched"
      }
  
      setErrors(validationErrors)
  
      if(Object.keys(validationErrors).length === 0) {
          alert("Form Submitted successfully")
      }
    
    // const [isLoading , setIsLoading] = useState(false)

    // const Navigate = useNavigate();

    
      // const res = await axios.post('https://mw.bethel.network/auth/register', {
      //               email: email,
      //               username: userName,
      //               password: password,
      //               firstName : firstName,
      //               lastName : lastName,
      //           }, 
      //           {
      //               withCredentials: true
      //           });
      //           console.log(email,password,userName,firstName,lastName)
      // try {
      //   res.status === 200 ? Navigate('/') : setIsLoading(false)
      // } catch (error) {
      //   setIsLoading(false)
      // }
      
      
      

    }


  return (
  <section className='relative w-full min-h-screen px-5 bg-black'>
      {/* Top vector pattern */}
      <div className='flex flex-col items-center w-[98%] justifyl-center h-[400px] rounded-b-xl  absolute bg-black top-0'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill path3"></path>
      </svg>
    </div>
    
    <div className='flex flex-col items-center w-[98%] justifyl-center h-[200px] rounded-b-xl  absolute bg-black bottom-0 rotate-180'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill path3"></path>
      </svg>
    </div>
      
      {/* Middle content section */}
      <div className='flex items-center justify-center bg-transparent'>
        {/*Form Card  */}
      <div className='w-[400px]  bottom-8 absolute backdrop-blur-md bg-white/10 rounded-md items-center justify-center'>
        {/* Heading section */}
        <div className='relative'>
      <h1 className='text-center text-[18px] text-white pt-4 uppercase'>Register</h1>
      <div className='absolute -top-32'>
      <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
      <p className='text-center text-white text-[14px]'>Use these awesome forms to login or create new account in your project for free.</p>
      </div>
        </div>
        {/* Form section */}
        <form onSubmit={handleSubmit} className='px-10 py-5'>
          
      <div className='flex items-center px-3 py-2 border-2 mt-8mb-4 rounded-xl'>
        <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.username && <span className='absolute text-sm text-red-600 bottom-[450px] '>{errors.username}</span>}  
      </div>
      
      <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
        <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text"
          name="firstName"
          placeholder='firstName'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.firstName && <span className='absolute text-sm text-red-600 bottom-[380px] '>{errors.firstName}</span>}  
      </div>
      
      <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
        <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="text"
          name="lastName"
          placeholder='lastName'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.lastName && <span className='absolute text-sm text-red-600 bottom-[312px] mt-8'>{errors.lastName}</span>}  
      </div>
      
      <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
        <input  class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span className='absolute text-sm text-red-600 bottom-[245px]' >{errors.email}</span>}  
      </div>
      <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
        <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.password && <span className='absolute text-sm text-red-600 bottom-[175px]'>{errors.password}</span>}  
      </div>
      <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
        <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
          type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.confirmPassword && <span className='absolute text-sm text-red-600 bottom-[105px]'>{errors.confirmPassword}</span>}  
      </div>
      <button type="submit" class="block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">Submit</button>
      <span class="text-sm ml-2  text-white">Already have an account ?</span>
        <Link to="/"><span class="text-[#aaff00] cursor-pointer"> Login</span></Link>
     
        </form>
            
      </div> 
      
      </div>
      
      {/* Footer vector pattern */}
      {/* <div class=" top-[250px] relative ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div> */}
  </section>

  )
}

export default Register
