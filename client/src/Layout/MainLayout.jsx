import Topbar from "@/Components/Topbar";

import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-[1fr_5fr]" >
      {/* Main */}
      <div className="overflow-auto h-full">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout