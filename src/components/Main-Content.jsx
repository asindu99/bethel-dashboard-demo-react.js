import { Route, Routes } from "react-router-dom";
import Navbar from "./Nav-bar";
import SideBar from "./Side-Bar";
import DashboardHome from "./Dashboard-Home";
import DashboardStorage from "./Dashboard-Storage";
// import MiddleContex from "./Middle-Contex";


function MainContent() {
  return (
    <div className="bg-black h-screen">
      <SideBar />
      <Navbar />

      <div>
        <Routes>
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/storage" element={<DashboardStorage />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default MainContent;
