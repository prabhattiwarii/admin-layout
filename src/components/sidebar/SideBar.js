import React from "react";
import "./SideBar.css";
import {dashboardIcon,schedulesIcon,settingIcon,transactionIcon,userIcon} from "../../helpers/Icon";

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-title">Board.</div>
        <ul className="sidebar-lists">
            <li className="list-item"><a href="/" className="link"><span>{dashboardIcon({width:18,height:18})}</span> Dashboard</a></li>
            <li className="list-item"><a href="/" className="link"><span>{transactionIcon({width:18,height:18})}</span> Transactions</a></li>
            <li className="list-item"><a href="/" className="link"><span>{schedulesIcon({width:18,height:18})}</span> Schedules</a></li>
            <li className="list-item"><a href="/" className="link"><span>{userIcon({width:18,height:18})}</span> Users</a></li>
            <li className="list-item"><a href="/" className="link"><span>{settingIcon({width:18,height:18})}</span> Settings</a></li>
        </ul>
        <div className="sidebar-footer">
            <div className="list-item"><a href="/" className="link">Help</a></div>
            <div className="list-item"><a href="/" className="link">Contact Us</a></div>
        </div>
    </div>
  )
}

export default SideBar