import React from 'react'

function SideBar() {
  return (
    // side nav bar
    <div className='fixed left-2 w-[250px] bg-white/10 backdrop:blur-xl border-white top-2 bottom-2 p-2 rounded-lg'>
        {/* inside contenet */}
        <div className='flex flex-col '>
          {/* inside flex boxes */}

          {/* topic */}
          <div className='w-full flex flex-col justify-center items-center mt-2'>
            <h1 className='text-white font-bold'>BETHEL TESTNET</h1>
            <hr className='w-[90%] mt-1 opacity-20' />
          </div>
          {/* dashboard */}
          <div className='flex px-2 bg-black'>
            {/* icon */}
            <div>
              <img src="" alt="" />
            </div>

            {/* text */}
            <div>

            </div>
          </div>

          {/* Storage */}
          <div>

          </div>

          {/* Wallet */}
          <div>

          </div>

          {/* access keys */}
          <div>

          </div>

          {/* profile */}
          <div>

          </div>

          {/* biling */}
          <div>

          </div>

          {/* help */}
          <div>

          </div>
        </div>
    </div>
  )
}

export default SideBar
