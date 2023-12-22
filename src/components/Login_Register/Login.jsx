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

const {ethers} = require("ethers");


function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
    
  const connectWallet = async () =>{
    if(window.ethereum){
      try {
        const accounts = await window.ethereum.request({method : "eth_requestAccounts"})
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


  const socket = io("server-url-goes-here") //get a socket from server url

  // get data api
  const getQrCodeApi = (sessionId) =>
    "serverURL" + `/api/get-auth-qr?sessionId=${sessionId}`;

  // get the socket id 
  useEffect(() => {
    socket.on("connect", () => {
      setSessionId(socket.id);
      console.log(socket.id)

      // only watch this session's events
      socket.on(socket.id, (arg) => {
        setSocketEvents((socketEvents) => [...socketEvents, arg]);
      });
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
  }, [sessionId]); //ass sessionId


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
            }, "2000");
            socket.close();
          } else {
            setVerfificationMessage("❌ Error verifying VC");
          }
        }
      }
    }
  }, [socketEvents]);

  return (

    <section className='w-full h-[90vh] top-[90px]'>
    <video className='absolute object-cover w-full h-full -z-10 ' src={heroVid} autoPlay loop muted/>
    
    <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
  
      <h1 className="text-[60px] font-bold py-2 ">BETHEL TESTNET</h1>
                
      <p className='py-2 text-xl'>Connect Your wallet to Start the Adventure !</p>

    </div>
    
    <div className="-mt-48 font-bold text-center relative">
      
      <button onClick={connectWallet} className="p-2 px-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out">Connect Wallet</button>

      {/* verification QR for */}
      { !onVerificationResult ? (
      <div className='absolute right-2 top-24 bg-white p-2'>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="{value}"
            viewBox={`0 0 256 256`}
            />
        </div>
      </div>
      // {/* end of the verification */}
      ) : (

      // {/* verification approved msg */}
      <VerificationApproved />
      // {/* end of the verification approved*/}
      )
      }
      
    </div>
    
  </section>


  )
}

export default Login
