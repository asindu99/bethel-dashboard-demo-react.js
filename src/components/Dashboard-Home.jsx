import React, { useEffect } from 'react'
import iconBucket from "../Images/icons/icon-bucket.png"
import iconStorage from "../Images/icons/icon-storage.png"
import iconFile from "../Images/icons/icon-file.png"
import iconHome from "../Images/icons/icon-home.png"
import iconVideo from "../Images/icons/icon-video.png"
import iconImage from "../Images/icons/icons-images-96.png"
import iconFiles from "../Images/icons/icon-file.png"
import iconMusic from "../Images/icons/icons8-music-100.png"

import { Doughnut , Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import userDataSlice from '../reducers/userDataReducer'
import storageDataSlice from '../reducers/storageDetailsSlice'
import uploadSlice from '../reducers/uploadDetailsSlice'


function DashboardHome() {
  //  const [storageDetails , setStorageDetails] = useState(null)
  const dispatch = useDispatch();
  // get user ID
  const userData = useSelector((state)=> state.loginReducer)
  const userId = userData._id


  // get all the data and save to the store funcs ----------------------
  const getStorageData = async () =>{
    const res = await axios.get('https://mw.bethel.network/storagedetails/' + userId,
    {withCredentials : true})

    dispatch(storageDataSlice.actions.saveStorageData(res.data[0]))
   }

   const getUploadData = async () =>{
    const res2 = await axios.get('https://mw.bethel.network/storage/' + userId ,{withCredentials :true})
    dispatch(uploadSlice.actions.uploadData(res2.data))
   }

  useEffect(()=>{
      fetchData();
      getStorageData();
      getUploadData();
    },[])

    const fetchData = async() =>{
      const res = await axios.get('https://mw.bethel.network/users/' + userId ,{withCredentials : true})
      dispatch(userDataSlice.actions.saveUserData(res.data))
    }

    const storageDetails = useSelector((state) => state.storageDetailsReducer)
  return (

    <div className='w-full text-white'>


      {/* topic container */}
      <div className='flex '>
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
        <div className='flex justify-around w-full pr-3 mt-4 lg:flex-row lg:gap-8 md:gap-4 sm:gap-4 md:flex-col sm:flex-col min-[320px]:flex-col'>

          {/* start- card divs */}
          <div className='flex flex-col justify-center lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full gap-x-8 gap-y-6'>
            {/* 2 cards DIVS */}
            
            {/* 1 row - cards  */}
            <div className='flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-center items-center gap-4'>
              {/* car 1 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>BUCKETS</h3>
                    <h3 className='text-white/50'>Total buckets : 1</h3>
                  </div>

                  <div className="relative">
                    <img src={iconBucket} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center w-full justify-between px-8 lg:py-12 md:py-12 sm:py-10 min-[320px]:py-14 rounded-md
              backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
                  <div className='flex flex-col '>
                    <h3 className='text-[1.3rem] font-bold'>STORAGE</h3>
                    <h3 className='text-white/50'>Total storage : {storageDetails.totalsize}</h3>
                  </div>

                  <div className="relative">
                    <img src={iconStorage} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>
            </div>

            {/* 2nd cards DIVS */}
            <div className='flex gap-4 lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-center items-center'>
              {/* car 1 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
                  <div className='flex flex-col'>
                    <h3 className='text-[1.3rem] font-bold'>OBJECTS</h3>
                    <h3 className='text-white/50'>Total objects : {storageDetails.filecount}</h3>
                  </div>

                  <div className="relative">
                    <img src={iconFile} className='w-[20px] z-[100] relative' alt="" />
                    <div className='w-[30px] h-[30px] bg-bethel-green/50 absolute -top-1 -left-[5px] rounded-full scale-[1.2] z-[0]'></div>

                  </div>
              </div>

              {/* card 2 */}
              <div className='flex items-center justify-between w-full px-8 py-12 rounded-md backdrop-blur-xl bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
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
          <div className='flex lg:mt-0 md:mt-2 sm:mt-2 min-[320px]:mt-4
           lg:flex-row md:flex sm:flex-col min-[320px]:flex-col items-center gap-2 bg-gradient-to-b from-bethel-white/10 to-bethel-green/5 p-4 relative
          lg:gap-0 md:gap-10  lg:w-1/2 rounded-md md:w-full sm:w-full min-[320px]:w-full'>
            <div className=''>
              <div className='absolute right-4 top-2'>
                {/* <h3 className='text-[1.3rem] text-white/40 font-bold uppercase '>Storage Chart</h3> */}
              </div>

              <Doughnut  className='w-full mt-4'
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
                                  <img src={iconFiles} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Files</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">{storageDetails.filecount} files</h3>
                                  </div>
                              </div>

                            
                              <div class="flex items-center justify-start w-full gap-2">
                                
                                  <img src={iconImage} alt="" className='w-[35px] opacity-80'/>
                                  

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Images</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                            </div>

                            <div className='flex gap-10'>
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconMusic} alt="" className='w-[35px] opacity-80'/>

                                  <div class="flex flex-col items-center justify-center mt-[2px]">
                                      <h3 class="text-[1.1rem] text-white/80">Musics</h3>
                                      <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                  </div>
                              </div>
                              
                              
                              <div class="flex items-center justify-start w-full gap-2">
                                  <img src={iconVideo} alt="" className='w-[35px] opacity-80'/>

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
        <div className='flex w-full pb-10 mt-6 lg:flex-row gap-x-6 md:flex-col sm:flex-col min-[320px]:flex-col gap-y-8 justify-evenly'>
            <div className='rounded-md lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
              <Line data={{
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
            datasets: [{
                label: 'Transactions',
                data: [12, 0, 0, 0, 0, 0, 0],
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

            <div className='rounded-md lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full lg:ml-4 bg-gradient-to-b from-bethel-white/10 to-bethel-green/5'>
              <Bar data={{
        labels: ['Files', 'Videos', 'Images', 'Musics'],
        datasets: [{
            label: 'Files',
            data: [storageDetails.filecount, 0, 0, 0],
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
