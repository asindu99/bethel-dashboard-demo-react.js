import React from 'react'
import iconHome from '../Images/icons/icon-home.png'

function SideBar() {
  return (
    // side nav bar
    <div className='fixed left-2 w-[250px] bg-white/10 backdrop:blur-xl border-white top-2 bottom-2 p-2'>
        {/* inside contenet */}
        <div className='flex flex-col items-baseline justify-around h-full'>
          {/* inside flex boxes */}

          {/* topic */}
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold'>BETHEL TESTNET</h1>
            <hr className='w-[90%] mt-1 opacity-20' />
          </div>
          {/* end-topic */}

          <div className='flex flex-col items-start justify-center gap-14 mt-10 px-14 w-full '>

            {/* start-dashboard */}
            <div className='flex '>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>DASHBOARD</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-storage */}
            <div className='flex'>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>STORAGE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-storage */}

            {/* start-dashboard */}
            <div className='flex'>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>WALLET</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex'>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>ACCESS KEY</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex'>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>PROFILE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex'>
              <div>
                {/* start-inside box */}
                <div className='flex text-white text-[0.875rem] w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>BILLING</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}\
    
          </div>

          {/* START-HELP AND LOGOUT FUNC */}
            <div className='flex flex-col gap-y-12 justify-center w-full px-14'>
                {/* start-dashboard */}
              <div className='flex'>
                <div>
                    {/* start-inside box */}
                    <div className='flex text-white text-[0.875rem] w-full gap-2'>
                      <div>
                        <img src={iconHome} alt="flex" className='w-[20px]' />
                      </div>
                      <h1>HELP</h1>
                    </div>
                    {/* end-insidebox */}
                  </div>
                </div>
                {/* end-dashboard */}
                
                
                {/* start-dashboard */}
                <div className='flex'>
                  <div>
                    {/* start-inside box */}
                    <div className='flex text-white text-[0.875rem] w-full gap-2'>
                      <div>
                        <img src={iconHome} alt="flex" className='w-[20px]' />
                      </div>
                      <h1>LOGOUT</h1>
                    </div>
                    {/* end-insidebox */}
                  </div>
                </div>
              {/* end-dashboard */}
            </div>
            {/* END-HELP AND LOGOUT */}

          
        </div>
        {/* end of inside content */}
    </div>
  )
}

export default SideBar
