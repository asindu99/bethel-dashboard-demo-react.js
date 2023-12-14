import { useNavigate } from "react-router-dom"
import walletImg from "../../Images/BG-Images/wallet-screen-img.jpg"
import bethelLogo from "../../Images/icons/bethellogo.png"
import { useDispatch } from "react-redux";
import WalletAddressSlice from "../../reducers/WalletAddressSlice";
const {ethers} = require("ethers")

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

  return (

    <section className='relative w-full min-h-screen bg-black'>
      <div className="text-white w-full min-h-screen flex">
          {/* right side of the div side */}
          <div className="relative flex flex-1/2 w-full overflow-hidden">
            <img src={walletImg} alt="" className="w-full absolute"/>
          </div>

          {/* left side of  the div */}
          <div className="flex flex-1/2 w-full">
            {/* inside of the right side container */}
            <div className="w-full">

              {/* bethel logo and bethel  */}
              <div className="w-full justify-center flex items-center gap-2">
                <img src={bethelLogo} alt="" className="w-[30px]"/>
                <h1>BETHEL TESTNET</h1>
              </div>

              {/* main caption of the wallet connect */}
              <div className="w-full flex justify-center">
                  <h1>Connect Your wallet to Start the Adventure !</h1>
              </div>

              {/* connect wallet button*/}
              <div className="w-full justify-center flex ">
                 <button onClick={connectWallet} className="p-2 bg-bethel-green/90 rounded-md px-2 ">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>

  )
}

export default Login
