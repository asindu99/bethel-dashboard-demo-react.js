import React, {useEffect, useState } from 'react'
import iconUser from "../Images/icons/icon-male-user.png"
import { useDispatch, useSelector } from 'react-redux'
import iconMenu from "../Images/icons/icons-menu.png"
import toggleSidebarSlice from '../reducers/toggleSidebar'
import { useNavigate } from 'react-router-dom'
import { revertAll4 } from '../reducers/userDataReducer'
import { revertAll3 } from '../reducers/uploadDetailsSlice'
import { revertAll2 } from '../reducers/storageDetailsSlice'
import WalletAddressSlice, { revertAll5 } from '../reducers/WalletAddressSlice'
import { revertAll } from '../reducers/Loginreducer'


function Navbar() {
  const dispatch = useDispatch();  
  const Navigate = useNavigate();

  const accountChanged = async () =>{
    try {
      const accounts = await window.ethereum.request({method : "eth_requestAccounts"})
      dispatch(WalletAddressSlice.actions.saveWalletAddress(accounts[0]))
    } catch (error) {
      Navigate('/')
      window.location.reload();
    dispatch(revertAll(), revertAll4(),revertAll2(),revertAll3(), revertAll5())

    }
  } 
  useEffect(() => {
      window.ethereum.on('accountsChanged' , accountChanged)
  });
  const walletAddress = useSelector((state) => state.WalletAddressReducer)
  const trimWalletAddress = walletAddress.substring(0, 4) + "..." + walletAddress.substring(39);
 

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
            <div className='flex gap-2 uppercase lg:mr-0 md:mr-6 sm:mr-6 min-[320px]:mr-6'>
              <button className='px-2 bg-bethel-green/60 py-2 rounded-md'>
                Connected : {trimWalletAddress}
              </button>
            </div>

            <div className='flex gap-2 uppercase lg:mr-0 md:mr-6 sm:mr-6 min-[320px]:mr-6'>
              <button className='px-2 bg-bethel-green/60 py-2 rounded-md'>
                Create ID
              </button>
            </div>
           
          </div>

          {/* toggle sidebar  */}
          <button onClick={toggle} className='absolute right-3 lg:hidden md:flex sm:flex min-[32px]:flex'>
            <img src={iconMenu} alt="" className='w-[25px]'/>
          </button>

        </div>
      {/* end-nav bar */}

      
    </div>
  )
}

export default Navbar
