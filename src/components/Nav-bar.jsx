import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import iconUser from "../Images/icons/icon-male-user.png"
import iconDrop from "../Images/icons/icon-drop.png"
import iconHome from '../Images/icons/icon-home.png'
import iconLogoout from "../Images/icons/icon-logout.png"
import { useDispatch, useSelector } from 'react-redux'
import iconMenu from "../Images/icons/icons-menu.png"
import toggleSidebarSlice from '../reducers/toggleSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Navbar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const Navigate = useNavigate()
  const [data , setData] = useState(false)

  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id

  const getStorageData = async () =>{
    try {
      const res = await axios.get('https://mw.bethel.network/storagedetails/' + userId,
      {withCredentials : true}) 
      console.log("zsdzsdsdaw",res.data)
      setData(true)
    } catch (error) {
      Navigate('/')
    }
    
   }
    useEffect(()=>{
    getStorageData();
    
   },[])

   


  //dispathch 
  const dispatch = useDispatch();  
 

  const toggle = () =>{
    dispatch(toggleSidebarSlice.actions.toggleSidebar())
  }

  return (
    <div className='fixed top-3 lg:pl-[270px] md:px-2 sm:px-2 min-[320px]:px-2 w-full px-2 z-100'>
      {/* start-main nav bar */}
        <div className='relative flex backdrop-blur-xl bg-white/10
         w-full h-[70px] rounded-md text-white items-center px-4 justify-between'>

          {/* left side */}
          <div className='text-[1.3rem]'>
            <h3>TESTNET  </h3>
          </div>

          {/* right side */}
          <div className='flex gap-2 text-[1rem] items-center'>
            {/* img */}
            <div>
              <img src={iconUser} alt="" className='w-[25px]'/>
            </div>

            {/* name and the other */}
            { data && <div className='flex gap-2 uppercase lg:mr-0 md:mr-6 sm:mr-6 min-[320px]:mr-6'>
              <h2>{userData.details.firstName}</h2>
              <h2>{userData.details.lastName}</h2>
            </div> }

            {/* drop down menu */}
            {/* <button onClick={handleToggle} >
              <div>
                <img src={iconDrop} alt="" className='w-[20px] lg:flex md:hidden sm:hidden min-[32px]:hidden'/>
              </div>
            </button> */}
           
          </div>

          {/* toggle sidebar  */}
          <button onClick={toggle} className='absolute right-3 lg:hidden md:flex sm:flex min-[32px]:flex'>
            <img src={iconMenu} alt="" className='w-[25px]'/>
          </button>

        </div>
      {/* end-nav bar */}



      {/* start-drop down menu */}
      {toggleDropDown && 
      <div className='border-[1px] border-bethel-green z-100 absolute right-2 top-[80px] w-[220px] backdrop-blur-xl bg-white/10 flex flex-col gap-2 rounded-md p-2
       '>
        {/* email and user name  */}
        <div className='flex flex-col text-white'>
          <h3>{userData.email}</h3>
          <h3>{userData.username}</h3>
          <hr className='w-[90%] mt-1 opacity-20 ' />
        </div>

        {/* Dashboard */}
        <div className='flex flex-col'>
          {/* start-dashboard */}
            <div className='flex text-white w-full px-10 hover:bg-bethel-green/50  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>DASHBOARD</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}
        </div>

        <div className='flex flex-col'>
          {/* start-dashboard */}
            <div className='flex text-white w-full px-10 hover:bg-bethel-green/50  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconLogoout} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>LOGOUT</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}
        </div>


      </div>
      // {/* end- drop down menu */}
       }
      
    </div>
  )
}

export default Navbar
