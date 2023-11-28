import { Route, Routes } from "react-router-dom";
import Navbar from "./Nav-bar";
import SideBar from "./Side-Bar";
import DashboardHome from "./Dashboard-Home";
import DashboardStorage from "./Dashboard-Storage";
import DashboardProfile from "./Dashboard-Profile";
import DashboardStorageFolder from "./Dashboard-Storage_Folder";


function MainContent() {
  return (

    <div className="bg-black h-screen relative">

      <div className="relative z-[100]">
        <SideBar />
        <Navbar />
      </div>
      
      {/* middle routing  */}
      <div className="relative pt-24 pl-[270px] w-full z-[10]">
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
