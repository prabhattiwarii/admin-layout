import React from "react";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import Main from "../main/Main";
import "./AdminLayOut.css"
const AdminLayOut = () => {
  return (
    <div className="container">
        <Header/>
        <SideBar/>
        <Main/>
    </div>
  )
}

export default AdminLayOut