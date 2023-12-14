import React, { useState } from 'react'
import iconStorage from "../Images/icons/icon-storage.png"
import TableWithMoreButton from '../components/Test'

export default function DashboardStorageFolder2() {
  const [file , setFile] = useState(null)
  const [fileName , setFileName] = useState("");
  const [fileSize , setFileSize] = useState('');

 
  const handleFileUpload = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    setFileSize(e.target.files[0].size)
    console.log(fileName); 
  }

  const deleteUpload = () => {
    setFile(null);
    setFileName('');
    setFileSize('');
  }

  return (
    <section>
      
      <div className='flex my-3'>
        <div>
          <img src={iconStorage} alt="" className='w-[20px] inline-block text-white' />
        </div>

        <div className='ml-2'>
          <h3 className='text-white'>/ DASHBOARD / STORAGE / FOLDER</h3>
        </div>
      </div>
      
      {/* Top section with import button */}
        <div className='flex px-3 pt-3'>
  
          <div className='flex flex-row px-6 py-2 mr-3 text-white rounded-md bg-gray-100/20 gap-x-8'>
           
              <div className=''>
                  <h3 className='text-white text-[14px] font-bold'>591 MiB</h3>
                  <h3 className='text-center uppercase text-[10px] '>Files</h3>
              </div> 
              
              <div>
                <h3 className='text-white text-[14px] font-bold'>592 MiB</h3>
                <h3 className='text-[10px] text-center uppercase'>All Blocks</h3>
              </div>
         
              <input onChange={handleFileUpload} id="file-type" type="file" multiple hidden />
              <label for="file-type" id="button" className='cursor-pointer flex flex-row items-center justify-center px-2 py-1 text-white rounded-md bg-bethel-green/50'>
                Select File
              </label>
   
          </div>
  
        </div>

      {/* Show Import Items */}
      
      <div class="overflow-x-auto mt-6 px-2">
        <table class="table-auto border-collapse w-full">
          <thead>
            <tr class="rounded-lg text-sm font-medium text-left flex justify-between bg-gray-800/20" >
            <th class="px-4 py-2  text-gray-300" >Selected Item :</th>
            <th class="px-4 py-2  text-gray-300 flex flex-row gap-x-4" >
                     
            </th>
            
            </tr>
          </thead>
          <tbody class="text-sm font-normal text-gray-400">
              <tr class=" py-10">
                { fileName && <td class="px-4 py-4 flex justify-between">
                  <div>
                    {fileName}
                  </div>

                  <div className='flex gap-4'>
                    <div>
                      <h1>{fileSize} KiB</h1>
                    </div>

                    <div className="gap-2 flex items-center">
                      <button className="flex gap-2 bg-bethel-green/50 px-2 py-1 rounded-md">
                        <h3 className='text-white'>Upload</h3>
                        <svg viewBox="0 0 20 15" className='w-4 h-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M9 12a1 1 0 102 0V4.26l3.827 3.48a1 1 0 001.346-1.48l-5.5-5a1 1 0 00-1.346 0l-5.5 5a1 1 0 101.346 1.48L9 4.26V12zm-5.895-.796A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path> </g></svg>              
                      </button>
                      <button onClick={deleteUpload}>
                        <svg fill="#ffffff" viewBox="0 0 32 32" className='w-4 h-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>
                      </button>
                    </div>
                  </div>
               </td> }
                
              </tr>
              
          </tbody>        
        </table>
      </div>

       {/* Upload Items */}
      <div class="flex  w-full py-8 px-2">
	      <div class="w-full">
		      <div class="overflow-auto lg:overflow-visible  w-full">
			      <table class="table text-gray-400 text-sm w-full rounded-md border-separate border-spacing-2 border-transparent ">
				      <thead class="bg-gray-800/20 text-gray-500 ">
					      <tr className='flex justify-between w-full '>
						      <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-center pr-24">Size</th> 
					      </tr>
				      </thead>
				      <tbody>
                <tr className="flex justify-between bg-gray-800/20 items-center">
						      <td class="p-3">
							      <div className="flex items-center justify-center">
								      <div class="flex items-center justify-center rounded-full h-12 w-12  object-cover">
                        <svg width="179px" height="179px" viewBox="0 0 24 24" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 3L13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2V3ZM19 9H20C20 8.73478 19.8946 8.48043 19.7071 8.29289L19 9ZM13.109 8.45399L14 8V8L13.109 8.45399ZM13.546 8.89101L14 8L13.546 8.89101ZM10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13H10ZM8 16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16H8ZM8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11V9ZM9.5 11C10.0523 11 10.5 10.5523 10.5 10C10.5 9.44772 10.0523 9 9.5 9V11ZM8.5 6C7.94772 6 7.5 6.44772 7.5 7C7.5 7.55228 7.94772 8 8.5 8V6ZM9.5 8C10.0523 8 10.5 7.55228 10.5 7C10.5 6.44772 10.0523 6 9.5 6V8ZM17.908 20.782L17.454 19.891L17.454 19.891L17.908 20.782ZM18.782 19.908L19.673 20.362L18.782 19.908ZM5.21799 19.908L4.32698 20.362H4.32698L5.21799 19.908ZM6.09202 20.782L6.54601 19.891L6.54601 19.891L6.09202 20.782ZM6.09202 3.21799L5.63803 2.32698L5.63803 2.32698L6.09202 3.21799ZM5.21799 4.09202L4.32698 3.63803L4.32698 3.63803L5.21799 4.09202ZM12 3V7.4H14V3H12ZM14.6 10H19V8H14.6V10ZM12 7.4C12 7.66353 11.9992 7.92131 12.0169 8.13823C12.0356 8.36682 12.0797 8.63656 12.218 8.90798L14 8C14.0293 8.05751 14.0189 8.08028 14.0103 7.97537C14.0008 7.85878 14 7.69653 14 7.4H12ZM14.6 8C14.3035 8 14.1412 7.99922 14.0246 7.9897C13.9197 7.98113 13.9425 7.9707 14 8L13.092 9.78201C13.3634 9.92031 13.6332 9.96438 13.8618 9.98305C14.0787 10.0008 14.3365 10 14.6 10V8ZM12.218 8.90798C12.4097 9.2843 12.7157 9.59027 13.092 9.78201L14 8V8L12.218 8.90798ZM8 13V16H10V13H8ZM8.5 11H9.5V9H8.5V11ZM8.5 8H9.5V6H8.5V8ZM13 2H8.2V4H13V2ZM4 6.2V17.8H6V6.2H4ZM8.2 22H15.8V20H8.2V22ZM20 17.8V9H18V17.8H20ZM19.7071 8.29289L13.7071 2.29289L12.2929 3.70711L18.2929 9.70711L19.7071 8.29289ZM15.8 22C16.3436 22 16.8114 22.0008 17.195 21.9694C17.5904 21.9371 17.9836 21.8658 18.362 21.673L17.454 19.891C17.4045 19.9162 17.3038 19.9539 17.0322 19.9761C16.7488 19.9992 16.3766 20 15.8 20V22ZM18 17.8C18 18.3766 17.9992 18.7488 17.9761 19.0322C17.9539 19.3038 17.9162 19.4045 17.891 19.454L19.673 20.362C19.8658 19.9836 19.9371 19.5904 19.9694 19.195C20.0008 18.8114 20 18.3436 20 17.8H18ZM18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362L17.891 19.454C17.7951 19.6422 17.6422 19.7951 17.454 19.891L18.362 21.673ZM4 17.8C4 18.3436 3.99922 18.8114 4.03057 19.195C4.06287 19.5904 4.13419 19.9836 4.32698 20.362L6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8H4ZM8.2 20C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891L5.63803 21.673C6.01641 21.8658 6.40963 21.9371 6.80497 21.9694C7.18864 22.0008 7.65645 22 8.2 22V20ZM4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673L6.54601 19.891C6.35785 19.7951 6.20487 19.6422 6.10899 19.454L4.32698 20.362ZM8.2 2C7.65645 2 7.18864 1.99922 6.80497 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698L6.54601 4.10899C6.59545 4.0838 6.69617 4.04612 6.96784 4.02393C7.25117 4.00078 7.62345 4 8.2 4V2ZM6 6.2C6 5.62345 6.00078 5.25117 6.02393 4.96784C6.04612 4.69617 6.0838 4.59545 6.10899 4.54601L4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80497C3.99922 5.18864 4 5.65645 4 6.2H6ZM5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803L6.10899 4.54601C6.20487 4.35785 6.35785 4.20487 6.54601 4.10899L5.63803 2.32698Z" fill="#ffffff"></path> </g></svg>
                      </div>
								      <div class="ml-3">
									      <div class="">Appple</div>
									      <div class="text-gray-500">ewerwe3dpqwkdpok1231231damdk</div>
								      </div>
							      </div>
						      </td>
						      <td className="p-3 flex-row flex gap-x-[50px] relative">
                    <h3>591MiB</h3>
                    <button>
                      <svg viewBox="0 0 24 24" fill="none"  className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#ffffff"></circle> <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#ffffff"></circle> <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#ffffff"></circle> </g></svg>
                    </button>
                    

                    {/* drop down */}
                    <div className='absolute top-16 right-1 flex flex-col py-5 bg-gray-800/60 gap-y-4 w-[130px] items-start pl-2 rounded-md justify-center'>
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg fill="#ffffff" className='w-5 h-5' viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Fill"> <path d="M25,22a4,4,0,0,0-3.26,1.69l-11-6.4A4,4,0,0,0,11,16a4.14,4.14,0,0,0-.1-.87L22,8.65A4,4,0,1,0,21,6a4.14,4.14,0,0,0,.1.87L10,13.35A4,4,0,1,0,7,20a4,4,0,0,0,2.66-1L21,25.6c0,.13,0,.26,0,.4a4,4,0,1,0,4-4ZM25,4a2,2,0,1,1-2,2A2,2,0,0,1,25,4ZM7,18a2,2,0,1,1,2-2A2,2,0,0,1,7,18ZM25,28a2,2,0,1,1,2-2A2,2,0,0,1,25,28Z"></path> </g> </g></svg>
                        </div>
                        <h3 className='text-white'>Share link</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg fill="#ffffff" viewBox="0 0 32 32" className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Rename</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Remove</h3>
                      </div>
                      
                      <div className='flex flex-row gap-x-4'>
                        <div className='flex items-center justify-center w-6 h-6'>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="#ffffff"></path> </g></svg>            
                        </div>
                        <h3 className='text-white'>Download</h3>
                      </div>
                      
                    </div>
                    {/* end of the drop down */}

						      </td>
					      </tr>
					      
				      </tbody>
			      </table>

            
		      </div>
	      </div>

      </div>

      <TableWithMoreButton />

   
    </section>
  )
}
