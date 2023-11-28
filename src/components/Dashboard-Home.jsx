import React from 'react'
import iconBucket from "../Images/icons/icon-bucket.png"
import iconStorage from "../Images/icons/icon-storage.png"
import iconFile from "../Images/icons/icon-file.png"
import iconHome from "../Images/icons/icon-home.png"

// import { getRelativePosition } from 'chart.js/helpers'
// import Chart from 'chart.js/auto'



function DashboardHome() {
//   // CHART JS 
//   const chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
  
// });

// chart();

  return (
    <div className='text-white w-full'>

      {/* topic container */}
      <div className='flex'>
        <div>
          <img src={iconHome} alt="" className='w-[20px] inline-block' /> /
        </div>

        <div className='ml-2'>
          <h3>DASHBOARD</h3>
        </div>
      </div>

      <div>
        <h2 className='text-[2rem] font-bold'>DASHBOARD</h2>
      </div>
      {/* end- topic container */}



        {/* main container */}
        <div className='w-full flex mt-4'>

          {/* start- card divs */}
          <div className='flex flex-col gap-4'>
            {/* 2 cards DIVS */}
            
            {/* 1 row - cards  */}
            <div className='flex gap-8 '>
              {/* car 1 */}
              <div className='flex items-center w-[270px] justify-between px-4 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
                  <div className='flex flex-col py-2'>
                    <h3 className='text-[1.3rem] font-bold'>BUCKETS</h3>
                    <h3 className='text-white/50'>Total buckets : 1</h3>
                  </div>

                  <div className="relative">
                    <img src={iconBucket} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center w-[270px] justify-between px-4 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>STORAGE</h3>
                    <h3 className='text-white/50'>Total storage : 1</h3>
                  </div>

                  <div className="relative">
                    <img src={iconStorage} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>
            </div>





            {/* 2nd cards DIVS */}
            <div className='flex gap-8 '>
              {/* car 1 */}
              <div className='flex items-center w-[270px] justify-between px-4 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
                  <div className='flex flex-col py-2'>
                    <h3 className='text-[1.3rem] font-bold'>OBJECTS</h3>
                    <h3 className='text-white/50'>Total objects : 1</h3>
                  </div>

                  <div className="relative">
                    <img src={iconFile} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center w-[270px] justify-between px-4 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>BANDWIDTH</h3>
                    <h3 className='text-white/50'>Total bandwidth : 0</h3>
                  </div>

                  <div className="relative">
                    <img src={iconStorage} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>
            </div>
            {/* end of 2 div */}

          </div>
          {/* end- card div */}

          {/* start- chart div */}
          <div>

          </div>
          {/* end- chart div */}
        </div>
        {/* end-main container */}
    </div>
  )
}

export default DashboardHome
