import React, { useState } from "react";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import Main from "../main/Main";
import "./AdminLayOut.css"
const AdminLayOut = () => {
    const [headerTitle, setHeaderTitle] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const updateHeaderTitle = (title) => {
        setHeaderTitle(title);
    };
    const toggleSidebar = () => {
        setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
    };

  return (
    <div className="container">
        <SideBar updateHeaderTitle={updateHeaderTitle} sidebarOpen={sidebarOpen}/>
        <div className="layout">
            {sidebarOpen && (<div className="opacity"></div>)}
            <Header page={{active:headerTitle}} toggleSidebar={toggleSidebar}/>
            <Main/>
        </div>
    </div>
  )
}

export default AdminLayOut