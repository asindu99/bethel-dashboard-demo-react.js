import QRCode from 'react-qr-code'
import youKnow from "../../Images/BG-Images/Feb-Business_9.jpg"
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
  const [verificationCheckComplete, setVerificationCheckComplete] = useState(false);
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
    

    const authRequest = await fetch("http://192.168.1.7:6543/api/v1/requests/auth")
    console.log(authRequest)
    setQrCodeData(await authRequest.json())
    
    const sessionID = authRequest.headers.get('x-id');
    console.log("This is the session ID :",sessionID)

      const interval = setInterval(async () => {
        try {
          const sessionResponse = await fetch(`http://192.168.1.7:6543/api/v1/status?id=${sessionID}`);
          console.log(sessionResponse)
          if (sessionResponse.status === 200){
            console.log("QR succesfully Done!!!!!!")
            setVerfificationMessage("Verify Proofed!")
            setIsHandlingVerification(false)
            setOnverificationResult(true)
            setVerificationCheckComplete(true);

            setTimeout(() => {
              setVerificationCheckComplete(false);
            }, 3000);
             clearInterval(interval);
          }
          if (sessionResponse.rejected){
            setVerfificationMessage("Authentication Fail")
            setIsHandlingVerification(false)
          }
          if(sessionResponse.status === 102){
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
  const [QRtoggle2 , setQRtoggle2] = useState(false)
  const [showIssueID , setShowIssueID] = useState(false)

  const [QRLink, setQRLink] = useState('')
  const [did , setDid] = useState('')
  const [signUpQrData , setSignUpQrData] = useState(null)


  // get the QR link data 
  const getQRLink = async () => {
    const authRequest = await fetch(`http://34.71.88.170:3002/v1/credentials/{schemeaId_goes_here}/qrcode`)
    const res = await authRequest.json()
    console.log("this is Qr link ", res.qrCodeLink)
    setQRLink(res.qrCodeLink)
  }

  const dispachEvent = () => {
    const _authEvent = new CustomEvent('authEvent', { detail: "iden3comm://?request_uri=https://issuer-admin.polygonid.me/v1/qr-store?id=7ced269c-b345-4c82-bf4b-f89ffe62cd37" });
    document.dispatchEvent(_authEvent);
  }

  // get QR link data for sig up
  const getSignUpQrData = async () =>{
    const signUpQrData = await fetch("")
    setSignUpQrData(await signUpQrData.json())
  }

  // handle did submit function  ---->
  const handleDidSubmit = async (e) =>{
    e.preventDefault();

    // set Sign up QR data 
    getSignUpQrData();


    // fetch did here

    setQRLink("iden3comm://?request_uri=https://issuer-admin.polygonid.me/v1/qr-store?id=7ced269c-b345-4c82-bf4b-f89ffe62cd37")
    // show issue ID 
    setShowIssueID(true)
  }

  

  // Sign up qr toggle 
  const QRRtoggle2 = () =>{
    setQRtoggle2(false);
    setShowIssueID(false)
    setQRLink("")


  }
  useEffect(() => {
    // getQRLink();
  }, [])

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
                        {/* close little x */}

                        
                      </div>
                    </div> ) : (
                      <div>
                          <p className='py-2 text-xl text-white'>Scan QR using Bethel App to Verify your ID</p>

                         <button onClick={() => {setQRtoggle(true)}}
                        className="w-[200px] mt-2 p-2 px-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out"
                        >Click to Login 
                      </button>
                      </div>
                     
                    )
                 
                )}

                {/* handle sign up button */}
                
                {qrCodeData &&
                // !isHandlingVerification &&
                // !verificationCheckComplete && \
                (
                   QRtoggle2 ?  (
                    <div className='absolute -top-[240px] right-[40%]'>
                      <div className='relative w-[350px] rounded-xl bg-white p-4 flex flex-col items-center justify-center'>
                      <h3 className='text-black mb-2'>Please scan QR </h3>
                      {QRLink ? (<div>
                        <QRCode 
                        value={QRLink}
                      className='flex w-64 h-64 p-1 bg-white top-0' />
                      <h3 className='text-black mb-2'>BETHEL NETWORK </h3> </div>) : (
                        <div>
                          <img src={youKnow} alt="" className='w-[300px]' />
                        </div>
                      )}

                        {/* little x */}
                        <div className='absolute right-4 top-2 '>
                          <button onClick={QRRtoggle2}>
                            <h3 className='text-black text-xl'>x</h3>
                          </button>
                        </div>

                        {/* ENTER DID SECTION */}
                        { !showIssueID ? (
                        <div>
                          <form action="" onSubmit={handleDidSubmit}>
                            <input placeholder='Enter Your DID' type="text" className='border-[1px] border-black  mr-2 rounded-md p-1 mb-2' onChange={(e) => setDid(e.target.value)}/>
                            <button className="px-2 py-1 rounded-md bg-bethel-green/50 text-white  " type="submit">submit</button>
                          </form>
                        </div> ) : 
                        (
                        <div>
                          <button onClick={dispachEvent} className='p-2 px-4 text-white bg-bethel-green/70 rounded-md text-[20px] transition-all 1s ease-in-out'>Connect ID</button>
                        </div>
                         )}
                      </div>
                       
                    </div> ) : (
                      <div>
                         <button onClick={() => {setQRtoggle2(true)}}
                        className="mt-2 p-2 px-4 text-black w-[200px] bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out"
                        >Click to Sign up
                      </button>
                      </div>
                     
                    )
                  
                    
                  
                )}
                {/* end of the sign up button */}

                {isHandlingVerification && (
                <div className='w-full flex flex-col justify-center items-center'>
                  <p className="text-white text-[28px]">Authenticating...</p>
                  <img src={loaderGif} alt='' className='w-[150px]'/>
                </div>
              )}

            
        </div>
     
      // {/* end of the verification */}
      ) : (
      // {/* verification approved msg */}
      <div className=''>
      <p className=' text-xl text-white'>Connect Your wallet to Start the Adventure !</p>
            <button onClick={connectWallet} className=" p-2 px-4 mt-4 text-black bg-white rounded-md text-[20px] hover:text-white hover:bg-bethel-green/70 transition-all 1s ease-in-out">Connect Wallet</button>
      {verificationCheckComplete && 
      <div className='mt-24'>
        <h3 className="text-white text-xl">{verificationMessage}</h3> 
      </div>}      
      </div>
      // {/* end of the verification approved*/}
      )
      }
      
    </div>
    
  </section>


  )
}

export default Login 
