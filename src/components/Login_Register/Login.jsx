import QRCode from 'react-qr-code'
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom"
import walletImg from "../../Images/BG-Images/wallet-screen-img.jpg"
import bethelLogo from "../../Images/icons/bethellogo.png"
import { useDispatch } from "react-redux";
import WalletAddressSlice from "../../reducers/WalletAddressSlice";
import heroVid from '../../Images/Videos/video.mp4';
import { useEffect, useState } from "react";
import VerificationApproved from '../VerificationApproved';
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'


const {ethers} = require("ethers");


function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
    
  const connectWallet = async () =>{
    if(window.ethereum){
      try {
         
        dispatch(WalletAddressSlice.actions.saveWalletAddress(accounts[0]))
        Navigate('/dashboard')
      
      } catch (error) {
        console.log(error)
      }
    }else {
      alert("Please install Metamask to Connect Wallet !")
    }
  }







  // for the verification funcs
  const [sessionId , setSessionId] = useState('')
  const [socketEvents, setSocketEvents] = useState([]);
  const [qrCodeData, setQrCodeData] = useState();
  const [isHandlingVerification, setIsHandlingVerification] = useState(false);
  const [verificationCheckComplete, setVerificationCheckComplete] = useState(false);
  const [verificationMessage, setVerfificationMessage] = useState("");
  const [onVerificationResult , setOnverificationResult] = useState(false) 


  const socket = io("https://vc-birthday-server.onrender.com") //get a socket from server url

  // get data api
  const getQrCodeApi = (sessionId) =>
    `https://vc-birthday-server.onrender.com/api/get-auth-qr?sessionId=${sessionId}`;

  // get the socket id 
  useEffect(() => {
    socket.on("connect", () => {
      setSessionId(socket.id);
      console.log(socket.id)

      // only watch this session's events
      socket.on(socket.id, (arg) => {
        setSocketEvents((socketEvents) => [...socketEvents, arg]);
      });
      console.log("socket arr" , socketEvents)
    });
  },[]);

  // get the fetch QR code api
  useEffect(() => {
    const fetchQrCode = async () => {
      const response = await fetch(getQrCodeApi(sessionId));
      const data = await response.text();
      return JSON.parse(data);
    };

    if (sessionId) {
      fetchQrCode().then(setQrCodeData).catch(console.error);
    }
  }, [sessionId]); //pass sessionId


  // socket event side effects
  useEffect(() => {
    if (socketEvents.length) {
      const currentSocketEvent = socketEvents[socketEvents.length - 1];

      if (currentSocketEvent.fn === "handleVerification") {
        if (currentSocketEvent.status === "IN_PROGRESS") {
          setIsHandlingVerification(true);
        } else {
          setIsHandlingVerification(false);
          setVerificationCheckComplete(true);
          if (currentSocketEvent.status === "DONE") {
            setVerfificationMessage("✅ Verified proof");
            setTimeout(() => {
              setOnverificationResult(true);
              setQRtoggle(false);
            }, "2000");
            socket.close();
          } else {
            setVerfificationMessage("❌ Error verifying VC");
          }
        }
      }
    } 
  }, [socketEvents]);

  // QR open and Close toggle
  const [QRtoggle , setQRtoggle] = useState(false)

  return (

    <section className='w-full h-[90vh] top-[90px]'>
    <video className='absolute object-cover w-full h-full -z-10 ' src={heroVid} autoPlay loop muted/>
    
    <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
  
      <h1 className="text-[60px] font-bold py-2 ">BETHEL TESTNET</h1>

    </div>
    
    <div className="-mt-48 font-bold text-center relative">
      <div>
      </div>

      {/* verification QR for */}
      { !onVerificationResult ? (
        <div className=''>
           {qrCodeData &&
                !isHandlingVerification &&
                !verificationCheckComplete && (
                   QRtoggle ?  (
                    <div className='absolute -top-[240px] right-[40%]'>
                      <div className='relative w-[350px] rounded-xl bg-white p-4 flex flex-col items-center justify-center'>
                      <h3 className='text-black mb-2'>Please scan QR </h3>
                      <QRCode 
                        value={JSON.stringify(qrCodeData)}
                      className='flex w-64 h-64 p-1 bg-white top-0' />
                      <h3 className='text-black mb-2'>BETHEL NETWORK </h3>

                        {/* little x */}
                        <div className='absolute right-4 top-2 '>
                          <button onClick={() => {setQRtoggle(false)}}>
                            <h3 className='text-black text-xl'>x</h3>
                          </button>
                        </div>
                      </div>
                    </div> ) : (
                      <div>
                          <p className='py-2 text-xl text-white'>Scan QR using Bethel App to Verify your ID</p>

                         <button onClick={() => {setQRtoggle(true)}}
                        className="mt-2 p-2 px-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out"
                        >Click to Verify 
                      </button>
                      </div>
                     
                    )
                  
                    
                  
                )}

                {isHandlingVerification && (
                <div className='w-full flex flex-col justify-center items-center'>
                  <p className="text-white text-[28px]">Authenticating...</p>
                  <img src={loaderGif} alt='' className='w-[150px]'/>
                </div>
              )}

            <div className='mt-24'>
             <h3 className="text-white text-md">{verificationMessage}</h3> 
            </div>
        </div>
     
      // {/* end of the verification */}
      ) : (
      // {/* verification approved msg */}
      <div className=''>
      <p className=' text-xl text-white'>Connect Your wallet to Start the Adventure !</p>
            <button onClick={connectWallet} className=" p-2 px-4 mt-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out">Connect Wallet</button>
      </div>
      // {/* end of the verification approved*/}
      )
      }
      
    </div>
    
  </section>


  )
}

export default Login
