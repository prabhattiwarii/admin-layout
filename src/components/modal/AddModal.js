import React, { useState } from 'react';
import "./AddModal.css"

const AddModal = ({modalAction}) => {
    const [activeTab,setActiveTab] = useState("basic")
  return (
    <div className="popup-wrap">
        <div className="back" onClick={() => modalAction(false)}></div>
        <div className="inner">
            <div className="heading">Add New Profile</div>
            <div className="tab-wrap">
                <button onClick={() => setActiveTab("basic")} className={activeTab === "basic" ? "active btn" : "btn"} type="button">Basic</button>
                <button onClick={() => setActiveTab("contact")} className={activeTab === "contact" ? "active btn" : "btn"} type="button">Contact</button>
            </div>
            {activeTab === "basic" && (
                <div className="content-wrap">
                    <div className="heading">Machine Visual Inspection Remarks</div>
                </div>
            )}
            {activeTab === "contact"  && (
                <p>Loading....</p>
            )}
            <button type="button" className="next-btn">Next</button>
        </div>
    </div>
  )
}

export default AddModal