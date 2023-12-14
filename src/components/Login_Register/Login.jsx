import { useEffect, useState } from "react"
const { ethers } = require("ethers")

function Login() {
  const [connectedProvider , setConnectedProvider] = useState("")
  const [connected , setConnected] = useState(false);
  const [signer , setSigner] = useState();

  useEffect(() =>{
  },[connectedProvider])

  async function connectWallet(){
    if(window.ethereum !== "undefined"){
      try {
        const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
        setConnected(true)
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "addPerson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "nameToFavoriteNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "favoriteNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
        ]

        let Provider = new ethers.BrowserProvider(window.ethereum);
        const signer = Provider.getSigner();       
        const contract = new ethers.Contract(contractAddress, abi , signer);
        await contract.store(42);

      } catch (error) {
        console.log(error)
      }
    } else {
      setConnected(false)
      }
    
  }

  const handleSubmit = (e) =>{
    e.preventdefault();
  }
  
  async function execute(){
    if(typeof window.ethereum !== "undefined"){
      try {
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
        const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "addPerson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "nameToFavoriteNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "favoriteNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
        ]

        const Provider = new ethers.BrowserProvider(window.ethereum);
        console.log(Provider)
        setSigner(Provider.getSigner());
        console.log(signer)
        const contract = new ethers.Contract(contractAddress,abi,signer); 
        try{
          await contract.store(22);
        }catch(error){
          console.log(error)
        }      
        

      } catch (error) {
        console.log(error)
      }
    } else {
      setConnected(false)
      }
    
  }
  
  return (

    <section className='relative w-full min-h-screen px-5 bg-black'>
    {/* Top vector pattern */}
    <div className='flex flex-col items-center w-[98%] h-[400px] rounded-b-xl  absolute bg-black top-0'>
      <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
    {/* Bottom vector pattern */}
    <div className='flex flex-col items-center w-[98%] h-[200px] rounded-b-xl  absolute bg-black bottom-0 rotate-180'>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill path1"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill path3"></path>
      </svg>
    </div>
    
    {/* Middle content section */}
    <div className='flex items-center justify-center w-full min-h-screen'>
      
    <div className='w-[400px] h-[400px] backdrop-blur-md bg-white/10 rounded-md  flex relative'>
        
      <div className='absolute -top-36'>
        <h3 className='text-center text-white text-[48px] font-bold'>Welcome!</h3>
        <p className='text-center text-white text-[14px]'>Please connect in to the your account and start the adventure!</p>
      </div>
        
      
       
      
      <button onClick={connectWallet} type="submit" class="block w-full bg-bethel-green/80 mt-4 py-2 rounded-xl text-white font-semibold mb-2 uppercase">
       { connected ? (<div>Connected! {connectedProvider} </div>) : (<div>Connect Wallet</div>)}
        </button>
      
      <button onClick={execute} className="p-2 bg-red-400">EXcute</button> 

      {/* { logFail && <div>


        <h3 className='p-2 text-sm text-center text-red-700 border-2 rounded-lg border-bethel-green'>Invalid Email or Password</h3>

      </div> } */}
      
      {/* <div class="flex items-center justify-center pt-10">
            <span class="text-sm ml-2  text-white">New to our platform ? <span class="text-gray-400 text-sm cursor-pointer">Create an account</span></span>
      </div> */}
      <div class="flex items-center justify-center relative">
      {/* <Link to='/register'><span class="text-bethel-green cursor-pointer text-center ">Register</span></Link> */}

      <div className='absolute bottom-[-50px] text-[10px] text-white'>
        <h3>Version 3.4.1</h3>
      </div>
      </div>
      
      </div>

      
      
    </div>
    
        {/* Footer vector pattern */}
    {/* <div class="flex flex-col items-center w-full  h-[400px] rounded-b-xl  absolute bg-white top-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill path1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill path2"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div> */}

    
    

  </section>

  )
}

export default Login
