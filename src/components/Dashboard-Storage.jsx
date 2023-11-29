import React from 'react'
import iconStorage from "../Images/icons/icon-storage.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DashboardStorage() {
   

  return (
  <section>
    
    {/* Heading section */}
    <div className='flex'>
        <div>
          <img src={iconStorage} alt="" className='w-[20px] inline-block text-white' />         
          
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>/ DASHBOARD / STORAGE</h3>
        </div>
      </div>
    
    {/* card section*/}
    	<div className='flex flex-row pt-5 gap-x-5'>
        <Link to='/dashboard/storage/folder'>
        <div className='p-5 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
          
          <div className='w-[50px] h-[50px] rounded-full'>
          <svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 1C6.092 1 3.002 2.592 3.21 3.95c.06.389.225 1.945.434 3.273C1.239 8.157.442 9.672.549 10.907c.127 1.461 1.441 3.025 4.328 3.295 1.648.154 3.631-.75 4.916-2.295a1.4 1.4 0 1 1 1.238.691c-1.529 1.973-3.858 3.164-6.064 3.025.051.324.07.947.096 1.113.09.579 2.347 2.26 5.937 2.264 3.59-.004 5.847-1.685 5.938-2.263.088-.577 1.641-11.409 1.852-12.787C18.998 2.592 15.907 1 11 1zm-9.057 9.785c-.055-.643.455-1.498 1.924-2.139l.643 4.074c-1.604-.313-2.498-1.149-2.567-1.935zM11 6.024C7.41 6.022 4.863 4.69 4.863 4.192 4.861 3.698 7.41 2.402 11 2.404c3.59-.002 6.139 1.294 6.137 1.788 0 .498-2.547 1.83-6.137 1.832z"></path></g></svg>
          </div>
          
          <div className='pt-4'>
            <p className='text-white'>publicStorage</p>
          </div>
          
          
        </div>
        </Link>
        
        <div className='p-5 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
          
          <div className='w-[50px] h-[50px] rounded-full'>
          <svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 1C6.092 1 3.002 2.592 3.21 3.95c.06.389.225 1.945.434 3.273C1.239 8.157.442 9.672.549 10.907c.127 1.461 1.441 3.025 4.328 3.295 1.648.154 3.631-.75 4.916-2.295a1.4 1.4 0 1 1 1.238.691c-1.529 1.973-3.858 3.164-6.064 3.025.051.324.07.947.096 1.113.09.579 2.347 2.26 5.937 2.264 3.59-.004 5.847-1.685 5.938-2.263.088-.577 1.641-11.409 1.852-12.787C18.998 2.592 15.907 1 11 1zm-9.057 9.785c-.055-.643.455-1.498 1.924-2.139l.643 4.074c-1.604-.313-2.498-1.149-2.567-1.935zM11 6.024C7.41 6.022 4.863 4.69 4.863 4.192 4.861 3.698 7.41 2.402 11 2.404c3.59-.002 6.139 1.294 6.137 1.788 0 .498-2.547 1.83-6.137 1.832z"></path></g></svg>
          </div>
          
          <div className='pt-4'>
            <p className='text-white'>publicStorage</p>
          </div>
          
        </div>
        
        <div className='p-5 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
          
          <div className='w-[50px] h-[50px] rounded-full'>
          <svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 1C6.092 1 3.002 2.592 3.21 3.95c.06.389.225 1.945.434 3.273C1.239 8.157.442 9.672.549 10.907c.127 1.461 1.441 3.025 4.328 3.295 1.648.154 3.631-.75 4.916-2.295a1.4 1.4 0 1 1 1.238.691c-1.529 1.973-3.858 3.164-6.064 3.025.051.324.07.947.096 1.113.09.579 2.347 2.26 5.937 2.264 3.59-.004 5.847-1.685 5.938-2.263.088-.577 1.641-11.409 1.852-12.787C18.998 2.592 15.907 1 11 1zm-9.057 9.785c-.055-.643.455-1.498 1.924-2.139l.643 4.074c-1.604-.313-2.498-1.149-2.567-1.935zM11 6.024C7.41 6.022 4.863 4.69 4.863 4.192 4.861 3.698 7.41 2.402 11 2.404c3.59-.002 6.139 1.294 6.137 1.788 0 .498-2.547 1.83-6.137 1.832z"></path></g></svg>
          </div>
          
          <div className='pt-4'>
            <p className='text-white'>publicStorage</p>
          </div>
          
        </div>

        <div className='p-5 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
          
          <div className='w-[50px] h-[50px] rounded-full'>
          <svg fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 1C6.092 1 3.002 2.592 3.21 3.95c.06.389.225 1.945.434 3.273C1.239 8.157.442 9.672.549 10.907c.127 1.461 1.441 3.025 4.328 3.295 1.648.154 3.631-.75 4.916-2.295a1.4 1.4 0 1 1 1.238.691c-1.529 1.973-3.858 3.164-6.064 3.025.051.324.07.947.096 1.113.09.579 2.347 2.26 5.937 2.264 3.59-.004 5.847-1.685 5.938-2.263.088-.577 1.641-11.409 1.852-12.787C18.998 2.592 15.907 1 11 1zm-9.057 9.785c-.055-.643.455-1.498 1.924-2.139l.643 4.074c-1.604-.313-2.498-1.149-2.567-1.935zM11 6.024C7.41 6.022 4.863 4.69 4.863 4.192 4.861 3.698 7.41 2.402 11 2.404c3.59-.002 6.139 1.294 6.137 1.788 0 .498-2.547 1.83-6.137 1.832z"></path></g></svg>
          </div>
          
          <div className='pt-4'>
            <p className='text-white'>publicStorage</p>
          </div>
          
        </div>
        
        
      </div>
  </section>
  )
}

export default DashboardStorage
