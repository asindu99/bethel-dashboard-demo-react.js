import React, { useEffect } from 'react'
import iconBucket from "../Images/icons/icon-bucket.png"
import iconStorage from "../Images/icons/icon-storage.png"
import iconFile from "../Images/icons/icon-file.png"
import iconHome from "../Images/icons/icon-home.png"

import { Doughnut , Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import userDataSlice from '../reducers/userDataReducer'


function DashboardHome() {

  const dispatch = useDispatch();
  // get user ID
  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id
    
  useEffect(()=>{
      fetchData();
    },[])
    // fetch user data
    const fetchData = async() =>{
      const res = await axios.get('https://mw.bethel.network/users/' + userId ,{withCredentials : true})
      dispatch(userDataSlice.actions.saveUserData(res.data))
    }




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
        {/* <h2 className='text-[2rem] font-bold'>DASHBOARD</h2> */}
      </div>
      {/* end- topic container */}



        {/* main container */}
        <div className='w-full flex mt-4 lg:gap-0 md:gap-4 pr-3 justify-around flex-wrap'>

          {/* start- card divs */}
          <div className='flex flex-col gap-8 w-[600px]'>
            {/* 2 cards DIVS */}
            
            {/* 1 row - cards  */}
            <div className='flex gap-4'>
              {/* car 1 */}
              <div className='flex items-center w-[300px] justify-between px-8 py-6 rounded-md
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
              <div className='flex items-center w-[300px] justify-between px-8 py-6 rounded-md
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
            <div className='flex gap-4 '>
              {/* car 1 */}
              <div className='flex items-center w-[300px] justify-between px-8 py-6 rounded-md
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
              <div className='flex items-center w-[300px] justify-between px-8 py-6 rounded-md
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
          <div className='flex items-center gap-2 bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 p-4 relative w-[600px]'>
            <div className=''>
              <div className='absolute right-4 top-2'>
                <h3 className='text-[1.3rem] text-white/40 font-bold uppercase '>Storage Chart</h3>
              </div>

              <Doughnut  className='mt-4 w-[220px]'
              data = {{
                labels: [
                  'Total',
                  'Remaining'
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: [100,30],
                  backgroundColor: [
                    'rgb(255, 255 , 255 )',
                    'rgb(170, 255, 0)',
                  ],
                  hoverOffset: 4
                }]
              }}
              />
            </div>

            {/* files section */}
            <div>
              <div class="flex flex-col gap-8 mt-6 px-8">
                        
                            <div className='flex gap-10'>
                              <div class="flex items-center justify-start w-full gap-2" >
                                  <img src={iconBucket} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Files</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1"> files</h3>
                                  </div>
                              </div>

                            
                              <div class="flex items-center justify-start w-full gap-2">
                                
                                  <img src={iconBucket} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Images</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                            </div>

                            <div className='flex gap-10'>
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconBucket} alt="" className='w-[35px] opacity-80'/>

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Musics</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                              
                              
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconBucket} alt="" className='w-[35px] opacity-80'/>

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Videos</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                            </div>

                    </div>
            </div>
              
          </div>
          {/* end- chart div */}
        </div>
        {/* end-main container */}

        {/* start-second container */}
        <div className='pb-10 w-full flex mt-6 justify-center gap-4 px-2 flex-wrap'>
            <div className='w-[600px] bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 p-4 '>
              <Line data={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
            datasets: [{
                label: 'Transactions',
                data: [12, 19, 3, 5, 2, 3, 4],
                backgroundColor: [
                    'rgba(255, 255,255, .7)',
                ],
                borderColor: [
                    'rgba(255,255,255, .3)',
                ],
                borderWidth: 1,

            }]
              }} />
            </div>

            <div className='w-[600px] bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 p-4 rounded-md'>
              <Bar data={{
        labels: ['Files', 'Videos', 'Images', 'Musics'],
        datasets: [{
            label: 'Files',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 255,255, .7)',
                'rgba(255, 255,255, .6)',
                'rgba(255, 255,255, .5)',
                'rgba(255, 255,255, .4)',
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
           }} />
            </div>
        <div>
        
        </div>

        </div>
        
        {/* end-second container */}
    </div>
  )
}

export default DashboardHome
