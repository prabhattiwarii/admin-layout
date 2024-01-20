import React, { useState } from "react";
import "./SideBar.css";
import { dashboardIcon, schedulesIcon, settingIcon, transactionIcon, userIcon } from "../../helpers/Icon";

const SideBar = ({updateHeaderTitle,sidebarOpen}) => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, icon: dashboardIcon, label: "Dashboard", link: "/admin/dashboard" },
        { id: 2, icon: transactionIcon, label: "Transactions", link: "/admin/transactions" },
        { id: 3, icon: schedulesIcon, label: "Schedules", link: "/admin/schedules" },
        { id: 4, icon: userIcon, label: "Users", link: "/admin/users" },
        { id: 5, icon: settingIcon, label: "Settings", link: "/admin/settings" }
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab.id);
        updateHeaderTitle(tab.label);
    };

    return (
        <div className={`sidebar-wrap ${sidebarOpen ? "sidebar-open" : ""}`}>
            <div className="sidebar">
                <div className="sidebar-title">Board.</div>
                <ul className="sidebar-lists">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="list-item">
                            <a href={tab.link} className={`link ${activeTab === tab.id ? "active" : ""}`} onClick={() => handleTabClick(tab)}>
                                <span>{tab.icon({ width: 18, height: 18 })}</span> {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sidebar-footer">
                    <div className="list-item"><a href="/" className="link">Help</a></div>
                    <div className="list-item list-item-1"><a href="/" className="link">Contact Us</a></div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
