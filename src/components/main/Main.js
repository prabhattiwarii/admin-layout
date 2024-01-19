import React, {useState} from "react";
import "./Main.css"
import {emailIcon, instaIcon, likeIcon,plusIcon,revenueIcon,totaltransactionIcon,totalusersIcon, whatsappIcon, youtubeIcon } from "../../helpers/Icon";
import AddModal from "../modal/AddModal";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Main = () => {
    const [showModal,setShowModal] =useState(false);
    const [dashBoardData,setDashBoardData] = useState({
        teesPercentage:"55%",
        pantPercentage:"31%",
        hoddiePercentage:"33%",
        name:"",
        email:"",
        phone:"",
        instagram:"",
        youtube:""
    })
    // eslint-disable-next-line no-unused-vars
    const modalAction = (status) => {
        setShowModal(status);
    }
    const updateDashBoardData = (newData) => {
        setDashBoardData((prevData) => ({ ...prevData, ...newData }));
    };
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
    const barData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            data: [65, 59, 80, 81],
            backgroundColor: '#98D89E',
            borderColor: '#98D89E',
            borderWidth: 1,
          },
          {
            data: [30, 40, 20, 50],
            backgroundColor: '#EE8484',
            borderColor: '#EE8484',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            title: {
              display: true,
            },
          },
          y: {
            title: {
              display: true,
            },
          },
        },
        plugins: {
            legend: {
              display: false,
            },
          },
      };
    
  return (
    <>
        {showModal && (<AddModal modalAction={modalAction} dashBoardData={dashBoardData}  updateDashBoardData={updateDashBoardData}/>)}
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
                <Bar data={barData} options={options} />
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
                                    <div className="percentage">{dashBoardData.teesPercentage}</div>
                                </div>
                            </div>
                            <div className="info">
                                <span className="pants"></span>
                                <div className="inner">
                                    <div className="title">Custom Short Pants</div>
                                    <div className="percentage">{dashBoardData.pantPercentage}</div>
                                </div>
                            </div>
                            <div className="info">
                                <span className="hoodies"></span>
                                <div className="inner">
                                <div className="title">Super Hoodies</div>
                                <div className="percentage">{dashBoardData.hoddiePercentage}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!dashBoardData.name &&(
                    <div className="add-profile box">
                        <div className="add-icon" onClick={() => setShowModal(true)}>{plusIcon({width:52,height:52})}</div>
                        <div className="text">Add Profile</div>
                    </div>
                )}
                {dashBoardData.name && (
                    <div className="box profile">
                        <div className="name">{dashBoardData.name}</div>
                        <div className="personal-deatils-wrap">
                            <a href="/" className="detail whatsapp"><span>{whatsappIcon({width:18,height:18})}</span>{dashBoardData.phone}</a>
                            {dashBoardData.instagram && (<a href="/" className="detail"><span>{instaIcon({width:18,height:18})}</span>{dashBoardData.instagram}</a>)}
                            <a href="/" className="detail"><span>{emailIcon({width:18,height:18})}</span>{dashBoardData.email}</a>
                            {dashBoardData.youtube && (<a href="/" className="detail"><span>{youtubeIcon({width:18,height:18})}</span>{dashBoardData.youtube}</a>)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Main