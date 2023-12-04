import React, { useState } from 'react'
import "../components/Dashboard-Storage_Folder"
import iconStorage from "../Images/icons/icon-storage.png"
// import userDataSlice from '../reducers/userDataReducer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import iconLoad from "../Images/Animation-gifs/loading-6324_256.gif"
import uploadSlice from '../reducers/uploadDetailsSlice'
import storageDataSlice from '../reducers/storageDetailsSlice'


function DashboardStorageFolder() {
    // get user ID
    const userData = useSelector((state)=> state.loginReducer)
    const userId = userData._id

    const dispatch = useDispatch()

    const [file , setFile] = useState(null) 
    const [fileName , setFileName] = useState('')
    const [hasFile , setHasFile] = useState(false)

    const [uplaodWait , setUploadWait] = useState(false)
    const [empty , setEmpty] = useState(false)
    const [uploadSucess , setUploadSucess] = useState(false)

  // handle file 
  const handleFileUpload = (event) => {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
      setHasFile(true);
      
    }

  // cancel uplaod
  const cancelUpload = () =>{
    setFile(null);
    setFileName('');
  }

  // handle upload 
  const uplaodFile = async () =>{
    if(file != null){
        try {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('userid', userId);
          formData.append('bucket', 'Public_storage_0');

          setUploadWait(true)

          
          const res = await axios.post('https://api.bethelnet.io/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
        
          },{withCredentials : true})
          dispatch(uploadSlice.actions.uploadData(res.data))
          dispatch(storageDataSlice.actions.saveStorageData());
          setUploadWait(false)


        } catch (error) {
          console.log(error)
          setUploadWait(false)

          setUploadSucess(true)

          setTimeout(() => {
            setUploadSucess(false)  
          }, 2000);
          
          // upadate new data
          const res2 = await axios.get('https://mw.bethel.network/storage/' + userId ,{withCredentials :true})
          dispatch(uploadSlice.actions.uploadData(res2.data))
        }
      }else {
        setUploadWait(false)
        setEmpty(true)

        // time out
        setTimeout(() => {
        setEmpty(false)
        }, 1000);
      }

      dispatch(uploadSlice.actions.uploadData())


}

// get the upload details from store
const uploadData = useSelector((state)=> state.uploadDetailsReducer)
console.log(uploadData)
  
  return(
    <div>

    {/* Heading section */}
      <div className='flex my-3'>
        <div>
          <img src={iconStorage} alt="" className='w-[20px] inline-block text-white' />
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>/ DASHBOARD / STORAGE / FOLDER</h3>
        </div>
      </div>

      <div class=" h-full w-full lg:px-3  sm:px-8 md:px-16 sm:py-8">
      <main class="container w-full h-[500px]">
        {/* file upload modal */}
        <article aria-label="File Upload Modal" class="relative h-full flex flex-col backdrop-blur-xl bg-gradient-to-b from-bethel-white/5 to-bethel-green/5 shadow-xl rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">

          {/* scroll area  */}
          <section class=" overflow-auto w-full h-full flex flex-col">
            <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p class="mb-3 font-semibold text-white flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
              </p>
              <input onChange={handleFileUpload} id="file-type" type="file" multiple hidden />
              <label for="file-type" id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                Upload a file
              </label>
            </header>

            <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
              <li id="empty" class="h-full w-full text-center flex flex-col  justify-center items-center">
                <img class="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                <span class="text-small text-gray-500">{!hasFile && <h3>No file selected</h3>}{hasFile && <h3>{fileName}</h3>} </span>
              </li>
            </ul>
          </section>

           {/* sticky footer  */}
          <footer class=" flex justify-end px-8 pb-8 pt-4">
            <button onClick={uplaodFile}  id="submit" className="relative px-3 py-1 bg-bethel-green/50 hover:bg-bethel-green/30 text-white font-bold focus:shadow-outline focus:outline-none rounded-md">
              { !uplaodWait && <h3>Upload Now</h3>}  { uplaodWait && <img src={iconLoad} alt='' className='w-[100px]' />}
              { empty && <h3 className='absolute left-[-120px] top-2 text-sm text-center text-red-700'>Select a File</h3>}
              { uploadSucess && <h3 className='absolute left-[-120px] top-2 text-sm text-center text-green-700'>Upload Sucess</h3>}
            </button>
            <button onClick={cancelUpload} id="cancel" class="ml-3 rounded-md px-3 py-1 bg-gray-300 hover:bg-gray-400 focus:shadow-outline focus:outline-none">
              Cancel
            </button>
          </footer>
        </article>

        {/* using two similar templates for simplicity in js code */}
        <template id="file-template">
      <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
        <article tabindex="0" class="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
          <img alt="upload preview" class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

          <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
            <h1 class="flex-1 group-hover:text-blue-800"></h1>
            <div class="flex">
              <span class="p-1 text-blue-800">
                <i>
                  <svg class="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                  </svg>
                </i>
              </span>
              <p class="p-1 size text-xs text-gray-700"></p>
              <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                </svg>
              </button>
            </div>
          </section>
        </article>
      </li>
        </template>

        <template id="image-template">
      <li class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
        <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
          <img alt="upload preview" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

          <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
            <h1 class="flex-1"></h1>
            <div class="flex">
              <span class="p-1">
                <i>
                  <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                  </svg>
                </i>
              </span>

              <p class="p-1 size text-xs"></p>
              <button class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                </svg>
              </button>
            </div>
          </section>
        </article>
      </li>
        </template>
      </main>
      </div>
      
 
      <div class="py-1 text-white relative bottom-12 px-2">
        <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-24 bg-gradient-to-b from-bethel-white/5 to-bethel-green/5">
          <div class="relative flex flex-col min-w-0 break-words bg- w-full mb-6 shadow-lg rounded ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-bethel-green/50 text-white active:bg-bethel-green/30 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
                </div>
              </div>

              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          FILE NAME
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          CID
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          IPFS URL
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          GCS URL
                        </th>
                    </tr>
                  </thead>

                  <tbody>
                   {uploadData.map((upload ,index) =>{
                   return <tr className='mt-2' key={index}>
                      <td>{upload.filename}</td>
                      <td>{upload.cid}</td>
                      <td><a href={upload.downurl}>Download</a></td>
                      <td><a href={upload.gcsurl}>Download</a></td>
                    </tr>
                   })}
                  </tbody>

                </table>
              </div>
          </div>
        </div>
{/* <footer class="relative pt-8 pb-6 mt-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noreferrer">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank" rel="noreferrer"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
    </div>
      
     </div>
		
    
  )
}

export default DashboardStorageFolder
