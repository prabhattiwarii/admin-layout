import React, {useState} from "react";
import "./Main.css"
import {likeIcon,plusIcon,revenueIcon,totaltransactionIcon,totalusersIcon } from "../../helpers/Icon";
import AddModal from "../modal/AddModal";

const Main = () => {
    const [showModal,setShowModal] =useState(false)
    // eslint-disable-next-line no-unused-vars
    const modalAction = (status) => {
        setShowModal(status);
    }
    const data = [
        {id:1,icon:"revenue",title:"Total Revenues",total:"$2,129,430",percentage:"+2.5%"},
        {id:2,icon:"transaction",title:"Total Transactions",total:"1,520",percentage:"+1.7%"},
        {id:3,icon:"likes",title:"Total Likes",total:"9,721",percentage:"+1.4%"},
        {id:4,icon:"users",title:"Total Users",total:"9,721",percentage:"+4.2%"}
    ]
    const iconBackgrounds = {
        revenue: "#7FCD93",
        transaction: "#DEBF85",
        likes: "#ECA4A4",
        users: "#A9B0E5"
      };

    const getSvgIcon = (icon) => {
        switch (icon) {
            case "revenue":
                return (revenueIcon({width:18,height:18}));
            case "transaction":
                return (totaltransactionIcon({width:18,height:18}));
            case "likes":
                return (likeIcon({width:18,height:18}));
            case "users":
                return (totalusersIcon({width:18,height:18}));
            default:
                return null;
        }
    }
  return (
    <>
        {showModal && (<AddModal modalAction={modalAction}/>)}
        <div className="main">
            <div className="dashboard-top-wrap">
                {data && data.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="icon" style={{background: iconBackgrounds[item.icon]}}>{getSvgIcon(item.icon)}</div>
                        <div className="total-wrap">
                            <div className="total-item">
                                <div className="title">{item.title}</div>
                                <div className="total">{item.total}</div>
                            </div>
                            <div className="percent">{item.percentage}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="charts box">
                <div className="top-charts">
                    <div className="left-side-charts">
                        <div className="heading">Activities</div>
                        <div className="month-details">May - June 2021</div>
                    </div>
                    <div className="right-side-charts">
                        <span className="guest"></span>
                        <div className="title mr">Guest</div>
                        <span className="user"></span>
                        <div className="title">User</div>
                    </div>
                </div>
            </div>
            <div className="bottom-info">
                <div className="product-data box">
                    <div className="product-data-top">
                        <div className="heading">Top products</div>
                        <div className="month-details">May - June 2021</div>
                    </div>
                    <div className="product-data-bottom">
                        <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{'--value':'82%'}}></div>
                        <div className="details">
                            <div className="info">
                                <span className="tees"></span>
                                <div className="inner">
                                    <div className="title">Basic Tees</div>
                                    <div className="percentage">55%</div>
                                </div>
                            </div>
                            <div className="info">
                                <span className="pants"></span>
                                <div className="inner">
                                    <div className="title">Custom Short Pants</div>
                                    <div className="percentage">31%</div>
                                </div>
                            </div>
                            <div className="info">
                                <span className="hoodies"></span>
                                <div className="inner">
                                <div className="title">Super Hoodies</div>
                                <div className="percentage">14%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-profile box">
                    <div className="add-icon" onClick={() => setShowModal(true)}>{plusIcon({width:52,height:52})}</div>
                    <div className="text">Add Profile</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main