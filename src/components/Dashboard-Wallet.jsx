import React from 'react'
import iconWallet from "../Images/icons/icon-wallet.png"

function DashboardWallet() {
  return (
    <section>
      {/* Heading */}
      <div className='flex mt-3 mb-5'>
        <div>
          <img src={iconWallet} alt="" className='w-[20px] inline-block text-white -mt-1' />
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>/ DASHBOARD / WALLET </h3>
        </div>
      </div>
      
      {/* button create faucet */}
      {/* <div class="ml-44">
        <button class="bg-bethel-green/50 text-white active:bg-bethel-green/50 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Create Faucet</button>
      </div> */}
     
      <div className='flex lg:flex-col gap-x-12 md:flex-col sm:flex-col min-[320px]:flex-col gap-y-4'>
        
        {/* <div className='py-4 px-44'>
          
          <form class="backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-gray-800/5 p-10">
			    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg viewBox="0 0 1024 1024" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"></path></g></svg>
				<input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Wallet Address" />
          </div>
				  <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8L12 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
					<input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Amount" />
          </div>
					<button type="submit" class="block w-full bg-bethel-green/50 mt-4 py-2  text-white font-semibold mb-2 uppercase rounded-md">TRansfer</button>
		      </form>
        
        </div> */}
        
        <div className='flex flex-row justify-between py-6'>
          
          <div className='flex flex-row gap-x-3'>
            <div class="flex items-center border-[0.5px] py-2 px-3 rounded-sm mb-4">
              <svg viewBox="0 0 1024 1024" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"></path></g></svg>
				      <input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Wallet Address" />
            </div>  
          
            <div class="flex items-center border-[0.5px] py-2 px-3 rounded-sm mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8L12 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
					    <input class="pl-2 outline-none border-none bg-transparent text-white" type="text" name="" id="" placeholder="Amount" />
            </div>
          
            <div>
            <button type="submit" class="block w-full bg-bethel-green/50  py-2 px-10 text-white font-semibold  uppercase rounded-sm">TRansfer</button>

            </div>
          </div>
          
          <div className='relative -left-6'>
            <button class="block w-full bg-bethel-green/50  py-2 px-10 text-white font-semibold  uppercase rounded-md outline-none focus:outline-none  ease-linear transition-all duration-150" type="button">Create Faucet</button>
          </div>
          
        </div>


          {/* content table */}
        <div className=''>
            <div class="block w-full overflow-x-auto backdrop-blur-xl  text-white">
              <table className='table w-full text-sm text-gray-400 border-separate border-transparent rounded-md border-spacing-2'>
              <thead className='text-gray-500 bg-gray-800/20'>
              <tr className='flex justify-between w-full'>
                <th className='p-3 text-left'>Time</th>
                <th className='p-3 text-left'>Type</th>
                <th className='p-3 text-left'>Wallet Address</th>
                <th className='p-3 text-left'>Amount</th>
                <th className='p-3 text-left'>Status</th>
                
              </tr>
              </thead>
              <tbody>
              <tr className='flex items-center justify-between bg-gray-800/20'>
             
              </tr>
              <tr className="relative menu-row">
             
              </tr>
              </tbody>
              </table> 
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default DashboardWallet
