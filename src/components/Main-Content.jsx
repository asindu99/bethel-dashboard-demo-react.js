import { Route, Routes } from "react-router-dom";
import Navbar from "./Nav-bar";
import SideBar from "./Side-Bar";
import DashboardHome from "./Dashboard-Home";
import DashboardStorage from "./Dashboard-Storage";
import DashboardProfile from "./Dashboard-Profile";
// import MiddleContex from "./Middle-Contex";


function MainContent() {
  return (

    <div className="bg-black h-screen">
      {/* <div className="right-0 absolute bg-[#aaff00]/100 blur-[200px] bottom-[50%] w-[200px] h-[200px] rounded-full z-[0]">
      </div> */}
      <SideBar />
      <Navbar />

      <div className=" mt-14 pl-[280px] w-full z-[100]">

        <Routes>
          <Route path="/dashboard/" element={<DashboardHome />} />
          <Route path="/dashboard/storage" element={<DashboardStorage />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default MainContent;
