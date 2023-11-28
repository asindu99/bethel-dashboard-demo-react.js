import React, { useState } from 'react'
import iconUser from "../Images/icons/icon-male-user.png"
import iconDrop from "../Images/icons/icon-drop.png"

function Navbar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  // toggle drop down
  const handleToggle = () =>{
    setToggleDropDown(true);
  }

  return (
    <div className='fixed top-3 pl-[280px] w-full px-2 '>
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
            <div className='flex gap-2'>
              <h2>First</h2>
              <h2>Last</h2>
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
      <div className='absolute w-[200px] backdrop-blur-xl bg-white/10 flex
       '>
        {/* email and user name  */}
        <div className='flex flex-col'>
          <h3>User Name</h3>
          <h3>testwith</h3>
        </div>
      </div>
      {/* end- drop down menu */}
    </div>
  )
}

export default Navbar
