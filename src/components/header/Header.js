import React from "react";
import "./Header.css";
import {notificationIcon, searchIcon} from "../../helpers/Icon";
const Header = () => {
  return (
    <div className="header">
        <div className="title">Dashboard</div>
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
  )
}

export default Header