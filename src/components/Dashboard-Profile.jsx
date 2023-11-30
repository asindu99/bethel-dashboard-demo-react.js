import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import userDataSlice from '../reducers/userDataReducer';
import PasswordChangeProfile from './Password-Change-Profile'

import loaderGif from '../Images/Animation-gifs/loading-6324_256.gif'
import LoginSlice from '../reducers/Loginreducer';
import userDataSlice from '../reducers/userDataReducer'


import ChangePasswordProfile from './Change-Password-Profile';


export default function DashboardProfile() {

  const dispatch = useDispatch();
  const [isLoading , setIsLoading] = useState(false)

  //changing user data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    countryCode: ''
  })

 // const [formData1, setFormData1] = useState({
  //   email: '',
  //   password: '',
  //   newPassword: '',
  //   confirmPassword: ''


  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
   // const {email, value1} = e.target;
    setFormData({
        ...formData, [name] : value,
    })
    // setFormData1({
    //   ...formData1, [email] : value1,
    // })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(formData.country)
    const validationErrors = {}
    if(!formData.firstName.trim()) {
        validationErrors.firstName = "First Name is required"
    }
    
    if(!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required"
  }

  if(!formData.country.trim()) {
    validationErrors.country = "Country is required"
}

if(!formData.countryCode.trim()) {
  validationErrors.countryCode = "Country Code is required"
}

/ if(!formData1.email.trim()) {
//   validationErrors.email = "Email is required"
// } else if(!/\S+@\S+\.\S+/.test(formData1.email)){
//   validationErrors.email = "Email is not valid"
// }

// if(!formData1.password.trim()) {
//   validationErrors.password = " Password is required"
// } else if(formData1.password.length < 6){
//   validationErrors.password = " Password should be at least 6 char"
// }

// if(!formData1.newPassword.trim()) {
//   validationErrors.newPassword = "New Password is required"
// } else if(formData1.newPassword.length < 6){
//   validationErrors.newPassword = "New Password should be at least 6 char"
// }
    
// if(formData1.confirmPassword !== formData1.newPassword) {
//   validationErrors.confirmPassword = "Password not matched"


    setErrors(validationErrors)
    setIsLoading(true);

    const details = {
                details: {
                    "firstName": formData.firstName,
                    "lastName": formData.lastName,
                    "country": formData.country,
                    "code": formData.countryCode,
                    "mobile": ""
                }
            };

    const res2 = await axios.patch("https://mw.bethel.network/users/" + userId , details ,{withCredentials : true})
    const res = await axios.get('https://mw.bethel.network/users/' + userId ,{withCredentials : true})
    
    setIsLoading(false);

    dispatch(LoginSlice.actions.saveUser(res.data))
    dispatch(userDataSlice.actions.saveUserData(res2.data))

  }


  // const [isLoading , setIsLoading] = useState(false)


  // const [password , setPassword] = useState('');
  // const [userName , setUserName] = useState('');

  // get user ID from store
  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id

  const Details = useSelector((state)=> state.userDataReducer)
  
  return (
    <section>
      {/* Main profile content */}
      <div className='flex lg:flex-nowrap md:flex-wrap sm:flex-wrap min-[320px]:flex-wrap sm justify-center  gap-x-5 gap-y-5 pr-2'>
        
        {/* Edit profile section */}

        <div className='flex flex-col h-[610px] w-full  backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md '>
        <form onSubmit={handleSubmit} className='px-10 py-5'>
          
        <h1 className='text-center text-[18px] text-white p-4 uppercase'>Edit Profile</h1>
        
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd" />

          </svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="text"
              name="firstName"
              placeholder='First Name'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.firstName && <span className='absolute text-sm text-red-600 bottom-[440px] '>{errors.firstName}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd" />
    
              </svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="text"
              name="lastName"
              placeholder='Last Name'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.lastName && <span className='absolute text-sm text-red-600 bottom-[369px] mt-8'>{errors.lastName}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg viewBox="0 0 24 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#ffffff"></path> </g></svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="text"
              name="country"
              placeholder='Country'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.country && <span className='absolute text-sm text-red-600 bottom-[298px] '>{errors.country}</span>}  
          </div>
          
          <div className='flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
          <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>code</title> <path d="M12 24h4v4h-12v-4h4v-4h4v4zM28 24v-4h-4v4h4zM4 16v4h4v-4h-4zM20 28h4v-4h-4v4zM24 12v4h4v-12h-4v4h-4v4h4zM20 16v-4h-4v-4h4v-4h-12v4h-4v4h4v4h4v4h4v4h4v-4h4v-4h-4z"></path> </g></svg>
            <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
              type="text"
              name="countryCode"
              placeholder='Country Code'  
              autoComplete='off'  
              onChange={handleChange}   
            />
              {errors.countryCode && <span className='absolute text-sm text-red-600 bottom-[225px] mt-8'>{errors.countryCode}</span>}  
          </div>
          <button type="submit" class="block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">
        { !isLoading && <h3>Sign In</h3>} { isLoading && <div className='flex justify-center w-full'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}

          </button>
          
            
         
        </form>
        </div>
        
       {/* Change Password section */}
        {/* <div className='flex flex-col h-[610px] w-full  backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md'>
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
        </div> */}
        <ChangePasswordProfile></ChangePasswordProfile>

        
        {/* Information section */}
        <div className='h-[610px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md gap-y-8 px-10 py-10'>
          
          {/*Profile section heading*/}
          <div>
            <h3 className='text-left text-[18px] text-white p-4 uppercase'>Profile Information</h3>
          </div>
          
          {/*Profile section description */}
          <div className='py-8'>
            <p className='text-left text-white'>Hi, <span className='uppercase text-bethel-green'>{Details.details.firstName} {Details.details.lastName}</span>, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
          </div>
          
          {/*Profile section details*/}
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-row gap-x-2'>
              <p className='text-white/60'>First Name:</p>
              <p className='text-white uppercase'>{Details.details.firstName}</p>
            </div>
            <div className='flex flex-row gap-x-2'>
              <p className='text-white/60'>Mobile:</p>
              <p className='text-white'></p>
            </div>
            <div className='flex flex-row gap-x-2'>
              <p className='text-white/60'>Email:</p>
              <p className='text-white'>{Details.email}</p>
            </div>
            <div className='flex flex-row gap-x-2'>
              <p className='text-white/60'>Location:</p>
              <p className='text-white'></p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

