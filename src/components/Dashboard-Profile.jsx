import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import loaderGif from '../Images/Animation-gifs/loading-6324_256.gif'
import LoginSlice from '../reducers/Loginreducer';
import userDataSlice from '../reducers/userDataReducer'
import ChangePasswordProfile from './Change-Password-Profile';
import { useFormik } from 'formik';
import {EditProfileValidation} from "../components/Validations/EditProfile"


const initialValues = {
  firstName : '',
  lastName : '',
  country : '',
  code : ''
}


export default function DashboardProfile() {

  const dispatch = useDispatch();
  const [isLoading , setIsLoading] = useState(false) //for the loading button
  const [success , setSuccess] = useState(false)
 
  const userData = useSelector((state)=> state.loginReducer) //get the user id
  const userId = userData._id

  const Details = useSelector((state)=> state.userDataReducer) //get the data from store

  const {values , handleChange, handleSubmit, errors } = useFormik({
      initialValues : initialValues,
      validationSchema: EditProfileValidation,

      onSubmit : async (values) =>{ //submit func 
        setIsLoading(true)

        const details = {
          details: {
              "firstName": values.firstName,
              "lastName": values.lastName,
              "country": values.country,
              "code": values.code,
              "mobile": "123123"
          }
      };

    const res2 = await axios.patch("https://mw.bethel.network/users/" + userId , details ,{withCredentials : true})
    const res = await axios.get('https://mw.bethel.network/users/' + userId ,{withCredentials : true})
    
    setIsLoading(false);
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 2000);

    dispatch(LoginSlice.actions.saveUser(res.data))
    dispatch(userDataSlice.actions.saveUserData(res2.data))
      }
    })
  return (
    <section>
      {/* Main profile content */}
      <div className='flex lg:flex-nowrap md:flex-wrap sm:flex-wrap min-[320px]:flex-wrap sm justify-center  gap-x-5 gap-y-5 pr-2'>
        
        {/* Edit profile section */}

        <div className='flex flex-col h-[610px] w-full  backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 rounded-md '>

          <div className='flex w-full justify-center mt-6'>
            <h3 className='text-[24px] text-white '>Edit Profile</h3>
          </div>
            <form onSubmit={handleSubmit} className='px-10 py-2'>
              
              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd" />
                  </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px]"
                  type="text" name='firstName' value={values.firstName} placeholder='Enter first Name'
                  onChange={handleChange}
                    
                />
                {errors.firstName && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.firstName}</h4>}

              </div>
              
              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd" />

                  </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                  type="text" name='lastName' value={values.lastName} placeholder='Enter Last Name'
                  onChange={handleChange}
                  
                />
                {errors.lastName && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.lastName}</h4>}

              </div>

              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd" />

                  </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                  type="text" name='country' value={values.country} placeholder='Enter your Country Name'
                  onChange={handleChange}
                  
                />
                {errors.country && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.country}</h4>}

              </div>

              <div className='relative flex items-center px-3 py-2 mt-8 mb-4 border-2 rounded-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd" />

                  </svg>
                <input class="pl-2 outline-none border-none bg-transparent text-white text-[12px] relative"
                  type="text" name='code' value={values.code} placeholder='Enter your country Code'
                  onChange={handleChange}
                  
                />
                {errors.code && <h4 className='text-red-600 absolute bottom-[-25px] text-[12px]'>{errors.code}</h4>}

              </div>
          
              <button type="submit" class="relative block w-full bg-[#aaff00]/80  py-2 rounded-xl text-white font-semibold mb-2 uppercase mt-8">
                { !isLoading && <h3>Save Changes</h3>} { isLoading && <div className='flex justify-center w-full'><img src={loaderGif} alt='' className='flex w-[100px] py-1 justify-center' /></div>}
              </button>
               
              { success && <h3 className='mt-2 text-sm text-center text-green-700 border-2 rounded-lg border-bethel-green p-2'>Sucess</h3> }



        </form>
        </div>
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