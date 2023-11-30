import { Route, Routes } from "react-router-dom";
import Navbar from "./Nav-bar";
import SideBar from "./Side-Bar";
import DashboardHome from "./Dashboard-Home";
import DashboardStorage from "./Dashboard-Storage";
import DashboardProfile from "./Dashboard-Profile";
import DashboardStorageFolder from "./Dashboard-Storage_Folder";
import { useDispatch } from "react-redux";
import toggleSidebarSlice from "../reducers/toggleSidebar";



function MainContent() {


  
  return (

    <div className="bg-black/90 min-h-screen relative">

      <div className="relative z-[100]">
        <div className="relative z-[100]">
          <SideBar />
        </div>
        <div className="relative z-[0]">
         <Navbar />
        </div>
      </div>
      
      {/* middle routing  */}
      
      <div  className="relative pt-24 lg:pl-[270px] lg:md-[270px] sm:pl-[10px] lg:px-0 md:px-0 sm:px-4 min-[320px]:px-4 w-full z-[10]">
        <Routes>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/storage" element={<DashboardStorage />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/storage/folder" element={<DashboardStorageFolder />} />
        </Routes>
      </div>
      {/* end- middle routing */}
      
    </div>
  )
}

export default MainContent;
