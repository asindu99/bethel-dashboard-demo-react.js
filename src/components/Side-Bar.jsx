import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import iconHome from '../Images/icons/icon-home.png'
import iconKey from "../Images/icons/icon-key.png"
import iconHelp from "../Images/icons/icon-help.png"
import iconUser from "../Images/icons/icon-male-user.png"
import iconWallet from "../Images/icons/icon-wallet.png"
import iconStorage from "../Images/icons/icon-storage.png"
import iconLogoout from "../Images/icons/icon-logout.png"
import { useDispatch, useSelector } from 'react-redux'
import { revertAll } from '../reducers/Loginreducer'
import { revertAll2 } from '../reducers/storageDetailsSlice'
import { revertAll3 } from '../reducers/uploadDetailsSlice'
import { revertAll4 } from '../reducers/userDataReducer'
import toggleSidebarSlice from '../reducers/toggleSidebar'
import iconClose from '../Images/icons/icons8-close-96.png'


function SideBar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const toggle = () =>{
    dispatch(toggleSidebarSlice.actions.toggleSidebar())
  }

  const logOut = () =>{
    Navigate('/')
    dispatch(revertAll(), revertAll4() ,revertAll2() ,revertAll3())
  }

  const toggleSidebar = useSelector((state) => state.toggleSidebarReducer)

  return (
    // side nav bar for mobile
    <div>
      { !toggleSidebar.toggleSidebar &&
      <div className=' fixed lg:hidden md:flex sm:fixed left-2 rounded-md w-[250px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 top-2 bottom-2 p-2'>
        {/* inside contenet */}
        <div className='relative flex flex-col items-baseline justify-start h-full'>
          {/* inside flex boxes */}

          {/* CLOSE BUTTON */}
          <div onClick={toggle} className='absolute top-0 right-1'>
              <img src={iconClose} alt="" className='w-[20px]'/>
          </div>

          {/* topic */}
          <div className='w-full flex flex-col justify-center items-center text-[1.4rem] mt-5'>
            <h1 className='text-white font-bold'>BETHEL TESTNET</h1>
            <hr className='w-[90%] mt-1 opacity-20' />
          </div>
          {/* end-topic */}

          <div className='flex flex-col items-start justify-center gap-4 mt-14 w-full text-[1rem] text-white'>

            {/* start-dashboard */}
            <Link to='/dashboard' className='w-full'>
            <button onClick={toggle} className='flex w-full px-10  py-2 hover:bg-bethel-green/50'>
              <div className=''>
                {/* start-inside box */}
                <div className='flex  w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="" className='w-[20px]' />
                  </div>
                  <h1>DASHBOARD</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </button>
            </Link>
            {/* end-dashboard */}

            {/* start-storage */}
            <Link to='/dashboard/storage' className='w-full'>
            <div onClick={toggle} className='flex  w-full px-10 hover:bg-bethel-green/50  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex  w-full gap-2'>
                  <div>
                    <img src={iconStorage} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>STORAGE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            </Link>
            {/* end-storage */}

            {/* start-dashboard */}
            <div onClick={toggle} className='flex  w-full px-10 hover:bg-bethel-green/10  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconWallet} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>WALLET</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex  w-full px-10 hover:bg-bethel-green/50  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconKey} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>ACCESS KEY</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <Link to='/dashboard/profile' className='w-full'>
            <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
              
              <div>
                {/* start-inside box */}
                <div onClick={toggle} className='flex w-full gap-2'>
                  <div>
                    <img src={iconUser} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>PROFILE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            </Link>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div onClick={toggle} className='flex  w-full px-10 hover:bg-bethel-green/10  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>BILLING</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}
    
          </div>

          {/* START-HELP AND LOGOUT FUNC */}
            <div className='absolute bottom-0 flex flex-col gap-y-4 justify-center w-[95%] text-[1rem] text-white'>
                {/* start-dashboard */}
              <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
                <div>
                    {/* start-inside box */}
                    <div className='flex  w-full gap-2'>
                      <div>
                        <img src={iconHelp} alt="flex" className='w-[20px]' />
                      </div>
                      <h1>HELP</h1>
                    </div>
                    {/* end-insidebox */}
                  </div>
                </div>
                {/* end-dashboard */}
                
                
                {/* start-dashboard */}
                <button onClick={logOut} className='w-full'>
                  <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
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
                </button>
                
              {/* end-dashboard */}
            </div>
            {/* END-HELP AND LOGOUT */}

          
        </div>
        {/* end of inside content */}
    </div>
    }

    {/* side bar for pc */}
    <div className='fixed lg:flex md:hidden sm:hidden min-[320px]:hidden left-2 rounded-md w-[250px] backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 top-2 bottom-2 p-2'>
        {/* inside contenet */}
        <div className='flex flex-col items-baseline justify-start h-full'>
          {/* inside flex boxes */}

          {/* topic */}
          <div className='w-full flex flex-col justify-center items-center text-[1.4rem] mt-3'>
            <h1 className='text-white font-bold'>BETHEL TESTNET</h1>
            <hr className='w-[90%] mt-4 opacity-20' />
          </div>
          {/* end-topic */}

          <div className='flex flex-col items-start justify-center gap-4 mt-6 w-full text-[1rem] text-white'>

            {/* start-dashboard */}
            <Link to='/dashboard' className='w-full'>
            <button  className='flex w-full px-10  py-2 hover:bg-bethel-green/50'>
              <div className=''>
                {/* start-inside box */}
                <div className='flex  w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="" className='w-[20px]' />
                  </div>
                  <h1>DASHBOARD</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </button>
            </Link>
            {/* end-dashboard */}

            {/* start-storage */}
            <Link to='/dashboard/storage' className='w-full'>
            <div className='flex  w-full px-10 hover:bg-bethel-green/50  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex  w-full gap-2'>
                  <div>
                    <img src={iconStorage} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>STORAGE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            </Link>
            {/* end-storage */}

            {/* start-dashboard */}
            <div className='flex  w-full px-10 hover:bg-bethel-green/10  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconWallet} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>WALLET</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex  w-full px-10 hover:bg-bethel-green/10  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconKey} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>ACCESS KEY</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <Link to='/dashboard/profile' className='w-full'>
            <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
              
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconUser} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>PROFILE</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            </Link>
            {/* end-dashboard */}

            {/* start-dashboard */}
            <div className='flex  w-full px-10 hover:bg-bethel-green/10  py-2'>
              <div>
                {/* start-inside box */}
                <div className='flex w-full gap-2'>
                  <div>
                    <img src={iconHome} alt="flex" className='w-[20px]' />
                  </div>
                  <h1>BILLING</h1>
                </div>
                {/* end-insidebox */}
              </div>
            </div>
            {/* end-dashboard */}
    
          </div>

          {/* START-HELP AND LOGOUT FUNC */}
            <div className='absolute bottom-0 flex flex-col gap-y-4 justify-center w-[95%] text-[1rem] text-white'>
                {/* start-dashboard */}
              <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
                <div>
                    {/* start-inside box */}
                    <div className='flex  w-full gap-2'>
                      <div>
                        <img src={iconHelp} alt="flex" className='w-[20px]' />
                      </div>
                      <h1>HELP</h1>
                    </div>
                    {/* end-insidebox */}
                  </div>
                </div>
                {/* end-dashboard */}
                
                
                {/* start-dashboard */}
                <button onClick={logOut} className='w-full'>
                  <div className='flex  w-full px-10 hover:bg-bethel-green/50 py-2'>
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
                </button>
                
              {/* end-dashboard */}
            </div>
            {/* END-HELP AND LOGOUT */}

          
        </div>
        {/* end of inside content */}
    </div>
    </div>
    
  )
}

export default SideBar
