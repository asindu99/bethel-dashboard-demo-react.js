import React, { useState } from 'react'
import iconUser from "../Images/icons/icon-male-user.png"
import iconDrop from "../Images/icons/icon-drop.png"
import iconHome from '../Images/icons/icon-home.png'
import iconLogoout from "../Images/icons/icon-logout.png"
import { useSelector } from 'react-redux'



function Navbar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const userData = useSelector((state) => state.loginReducer)
   console.log(userData)

  // toggle drop down
  const handleToggle = () =>{
    setToggleDropDown(!toggleDropDown);
  }

  return (
    <div className='fixed top-3 pl-[270px] w-full px-2 z-100'>
      {/* start-main nav bar */}
        <div className='relative flex backdrop-blur-xl bg-white/10
         w-full h-[70px] rounded-md text-white items-center px-4 justify-between'>

          {/* left side */}
          <div className='text-[1.3rem]'>
            <h3>PLATFORM  </h3>
          </div>

          {/* right side */}
          <div className='flex gap-2 text-[1rem] items-center'>
            {/* img */}
            <div>
              <img src={iconUser} alt="" className='w-[25px]'/>
            </div>

            {/* name and the other */}
            <div className='flex gap-2 uppercase'>
              <h2>{userData.details.firstName}</h2>
              <h2>{userData.details.lastName}</h2>
            </div>

            {/* drop down menu */}
            <button onClick={handleToggle}>
              <div>
                <img src={iconDrop} alt="" className='w-[20px]'/>
              </div>
            </button>
           
          </div>

        </div>
      {/* end-nav bar */}




      {/* start-drop down menu */}
      {toggleDropDown && 
      <div className='z-100 absolute right-2 top-[80px] w-[220px] backdrop-blur-xl bg-white/10 flex flex-col gap-2 rounded-md p-2
       '>
        {/* email and user name  */}
        <div className='flex flex-col text-white'>
          <h3>User Name</h3>
          <h3>testwith</h3>
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
