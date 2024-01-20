import React, { useState } from "react";
import "./Header.css";
import {notificationIcon, searchIcon,menuIcon,closeIcon} from "../../helpers/Icon";
const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
    };
  return (
    <>
    <div className="header">
        <div className="left-wrap">
            <button className="toggle-button" onClick={toggleSidebar}>{sidebarOpen ? closeIcon({width:18,height:18}) : menuIcon({width:18,height:18})}</button>
            <div className="title">Dashboard</div>
        </div>
        <div className="right-wrap">
            <div className="input-box">
                <input type="text" className="input" placeholder="Search..."/>
                <div className="search-box">{searchIcon({width:12,height:12})}</div>
            </div>
            <button className="icon" type="button">{notificationIcon({width:18,height:18})}</button>
            <div className="profile-img">
                <img src="/assets/profile.png" alt="profile" className="dp"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header