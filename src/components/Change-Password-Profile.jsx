import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userDataSlice from '../reducers/userDataReducer';
import {useForm} from "react-hook-form"
// import userDataSlice from '../reducers/userDataReducer';

import loaderGif from '../Images/Animation-gifs/loading-6324_256.gif'
import LoginSlice from '../reducers/Loginreducer';


export default function ChangePasswordProfile() {

  const dispatch = useDispatch();

  const [formData1, setFormData1] = useState({
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {email, value1} = e.target;
  
    setFormData1({
      ...formData1, [email] : value1,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

if(!formData1.email.trim()) {
  validationErrors.email = "Email is required"
} else if(!/\S+@\S+\.\S+/.test(formData1.email)){
  validationErrors.email = "Email is not valid"
}

if(!formData1.password.trim()) {
  validationErrors.password = " Password is required"
} else if(formData1.password.length < 6){
  validationErrors.password = " Password should be at least 6 char"
}

if(!formData1.newPassword.trim()) {
  validationErrors.newPassword = "New Password is required"
} else if(formData1.newPassword.length < 6){
  validationErrors.newPassword = "New Password should be at least 6 char"
}
    
if(formData1.confirmPassword !== formData1.newPassword) {
  validationErrors.confirmPassword = "Password not matched"
}

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }
  

  // get user ID from store
  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id

  const Details = useSelector((state)=> state.userDataReducer)

  // update edit details
  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const details = {
  //               details: {
  //                   "firstName": firstName,
  //                   "lastName": lastName,
  //                   "country": country,
  //                   "code": code,
  //                   "mobile": "123123123"
  //               }
  //           };

  //   const res2 = await axios.patch("https://mw.bethel.network/users/" + userId , details ,{withCredentials : true})
  //   const res = await axios.get('https://mw.bethel.network/users/' + userId ,{withCredentials : true})
    
  //   setIsLoading(false);

  //   dispatch(LoginSlice.actions.saveUser(res.data))
  //   }
  
  return (
    <section>
       {/* Change Password section */}
       <div className='flex flex-col h-[610px] w-full  backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md'>
          <form onSubmit={handleSubmit} className='px-10 py-5'>
          
        <h1 className='text-center text-[18px] text-white p-4 uppercase'>Change Password</h1>
        
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
      </svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="email"
              name="email"
              placeholder='Email'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.email && <span className='absolute text-sm text-red-600 bottom-[440px] '>{errors.email}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
      </svg>
          
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="password"
              name="password"
              placeholder='Password'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.password && <span className='absolute text-sm text-red-600 bottom-[369px] mt-8'>{errors.password}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
      </svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="password"
              name="newPassword"
              placeholder='New Password'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.newPassword && <span className='absolute text-sm text-red-600 bottom-[298px] '>{errors.newPassword}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
      </svg>            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="password"
              name="confirmPassword"
              placeholder='Confirm Password'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.confirmPassword && <span className='absolute text-sm text-red-600 bottom-[225px] mt-8'>{errors.confirmPassword}</span>}  
          </div>
          <button type="submit" class="block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">Submit</button>
          
            
         
        </form>
        </div>
    </section>
  )
}

