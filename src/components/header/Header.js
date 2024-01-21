import React,{useState} from "react";
import "./Header.css";
import {notificationIcon,searchIcon,menuIcon,droparrowIcon} from "../../helpers/Icon";
const Header = ({page,toggleSidebar}) => {
    const [showSideBar,setShowSideBar] = useState(true);
    const handleToggleSidebar = () => {
        toggleSidebar();
        setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    };
  return (
    <div className="header">
        <div className="left-wrap">
            <button className={`${showSideBar ? "toggle" : "toggle-button"}`} onClick={handleToggleSidebar}>{showSideBar ? droparrowIcon({width:18,height:18}) : menuIcon({width:18,height:18})}</button>
            <div className="title">{page.active}</div>
        </div>
        <div className="right-wrap">
            <div className={`input-box ${showSideBar ? "search" : "" }`}>
                <input type="text" className="input" placeholder="Search..."/>
                <div className="search-box">{searchIcon({width:12,height:12})}</div>
            </div>
            <button className="icon" type="button">{notificationIcon({width:18,height:18})}</button>
            <div className="profile-img">
                <img src="/assets/profile.png" alt="profile" className="dp"/>
            </div>
        </div>
    </div>
  )
}

export default Header