import QRCode from 'react-qr-code'
import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import WalletAddressSlice from "../../reducers/WalletAddressSlice";
import heroVid from '../../Images/Videos/video.mp4';
import { useEffect, useState } from "react";
import loaderGif from '../../Images/Animation-gifs/loading-6324_256.gif'
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
  const [qrCodeData, setQrCodeData] = useState();
  const [isHandlingVerification, setIsHandlingVerification] = useState(false);
  // const [verificationCheckComplete, setVerificationCheckComplete] = useState(false);
  const [verificationMessage, setVerfificationMessage] = useState("");
  const [onVerificationResult , setOnverificationResult] = useState(false) 

const QRR = {
  "id": "b275cef6-b590-4d9b-971e-3373e843e13b",
  "typ": "application/iden3comm-plain-json",
  "type": "https://iden3-communication.io/authorization/1.0/request",
  "thid": "d7893b49-5801-432e-8add-ac3ae3015811",
  "body": {
    "callbackUrl": "https://66e4-2402-d000-a500-7148-11b6-ba51-f93-8f93.ngrok-free.app/api/v1/callback?sessionId=749415",
    "reason": "test flow",
    "message": "message to sign",
    "scope": [
      {
        "id": 1,
        "circuitId": "credentialAtomicQuerySigV2",
        "query": {
          "allowedIssuers": [
            "*"
          ],
          "context": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
          "credentialSubject": {
            "birthday": {
              "$lt": 20000101
            }
          },
          "type": "KYCAgeCredential"
        }
      }
    ]
  },
  "from": "did:polygonid:polygon:mumbai:2qG7bhdJKsk4tSbShiXiF2Eti2cVjUH3iTDXyyn6i7" }


    const auth =async  () =>{
    

    const authRequest = await fetch("http://192.168.1.4:6543/api/v1/requests/auth")
    setQrCodeData(await authRequest.json())
    
    const sessionID = authRequest.headers.get('x-id');
    console.log("This is the session ID :",sessionID)

      const interval = setInterval(async () => {
        try {
          const sessionResponse = await fetch(`http://192.168.1.4:6543/api/v1/status?id=${sessionID}`);
          console.log(sessionResponse)
          if (sessionResponse.ok){
            console.log("QR succesfully Done!!!!!!")
            setVerfificationMessage("Verify Proofed!")
            setIsHandlingVerification(false)
            setOnverificationResult(false)
             clearInterval(interval);
          }
          if (sessionResponse.rejected){
            setVerfificationMessage("Authentication Fail")
            setIsHandlingVerification(false)
          }
          if(sessionResponse.status === 404){
            setIsHandlingVerification(true)
          }
        } catch (e) {
          console.log('err->', e);

        }
      }, 3000);
    }
      

useEffect(() => {
  auth();
},
[]);




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
                // !isHandlingVerification &&
                // !verificationCheckComplete && \
                (
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
             <h3 className="text-white text-xl">{verificationMessage}</h3> 
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
