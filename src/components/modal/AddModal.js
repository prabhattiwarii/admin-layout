import React, {useState} from 'react';
import "./AddModal.css"
import {crossIcon,droparrowIcon} from '../../helpers/Icon';
import {hasValidationError,validationError,focusOnFeild} from "../../helpers/frontend";

const AddModal = ({modalAction,dashBoardData,updateDashBoardData}) => {
    const [activeTab, setActiveTab] = useState("basic");
    const [form, setForm] = useState({name:dashBoardData?.name || "", email:dashBoardData?.email || "", phone:dashBoardData?.phone || "", instagram:dashBoardData?.instagram || "", youtube:dashBoardData?.youtube || "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name == "phone"){
            let newValue = value.replace(/[^0-9]/gi,'');
            if(newValue == "" || newValue.length <= 10){
                handleCustom(name,newValue);
            }
        }else{
            handleCustom(name,value);
        }
    }
    const handleCustom = (name,value) => {
        setForm((prevState) => ({...prevState,[name]: value}));
        console.log({form})
    }
    
    const handleSubmit = () => {
        console.log("Form submitted successfully:", form);
        updateDashBoardData(form);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (activeTab === "basic") {
                setActiveTab("contact");
            } else {
                handleSubmit();
            }
        }
        if(activeTab === "contact"){
            modalAction(false)
        }
    };


    const validate = () => {
        const newErrors = {};
        let positionFocus = "";

        const emailRE = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        if (!form.name || !form.name.trim()) {
            newErrors["name"] = "Required";
            positionFocus = positionFocus || "name";
        }

        if (!form.email || !form.email.trim()) {
            newErrors["email"] = "Required";
            positionFocus = positionFocus || "email";
        } else if (form.email.length > 50) {
            newErrors["email"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "email";
        } else if (!emailRE.test(form.email)) {
            newErrors["email"] = "Enter a valid email";
            positionFocus = positionFocus || "email";
        }

        if (!form.phone || !form.phone.trim()) {
            newErrors["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        }

        setErrors(newErrors);

        if (positionFocus) {
            focusOnFeild(positionFocus);
            return false;
        }

        return true;
    };

    return (
        <div className="popup-wrap">
            <div className="back" onClick={() => modalAction(false)}></div>
            <div className="inner">
                <div className="heading">Add New Profile</div>
                <div className="close-icon" onClick={() => modalAction(false)}>{crossIcon({ width: 24, height: 24 })}</div>
                <div className="tab-wrap">
                    <button onClick={() => setActiveTab("basic")} className={activeTab === "basic" ? "active btn" : "btn"} type="button">Basic</button>
                    <button onClick={() => setActiveTab("contact")} className={activeTab === "contact" ? "active btn" : "btn"} type="button">Contact</button>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    {activeTab === "basic" && (
                        <>
                            <div className="field-group">
                                <label htmlFor="name" className="label">Enter Name*</label>
                                <input type="text" name="name" id="name" placeholder="Eg. John Doe" className={`input ${(hasValidationError(errors, "name") ? "input-error" : "")}`} value={form.name} onChange={handleChange} autoComplete="off" />
                                {hasValidationError(errors, "name") ? (<span className="error">{validationError(errors, "name")}</span>) : null}
                            </div>
                            <div className="field-group">
                                <label htmlFor="email" className="label">Enter Email*</label>
                                <input type="text" name="email" id="email" placeholder="Eg. John@xyz.com" className={`input ${(hasValidationError(errors, "email") ? "input-error" : "")}`} value={form.email} onChange={handleChange} autoComplete="off" />
                                {hasValidationError(errors, "email") ? (<span className="error">{validationError(errors, "email")}</span>) : null}
                                <div className="icon">{droparrowIcon({width:18,height:18})}</div>
                            </div>
                            <div className="field-group">
                                <label htmlFor="phone" className="label">Enter Phone*</label>
                                <input type="text" name="phone" id="phone" placeholder="Eg. 9123456789" className={`input ${(hasValidationError(errors, "phone") ? "input-error" : "")}`} value={form.phone} onChange={handleChange} autoComplete="off" />
                                {hasValidationError(errors, "phone") ? (<span className="error">{validationError(errors, "phone")}</span>) : null}
                                <div className="icon">{droparrowIcon({width:18,height:18})}</div>
                            </div>
                        </>
                    )}
                    {activeTab === "contact" && (
                        <>
                            <div className="field-group">
                                <label htmlFor="instagram" className="label">Instagram Link <span>(Optional)</span></label>
                                <input type="text" name="instagram" id="instagram" placeholder="Eg. ..instagram.com/username" className={`input ${(hasValidationError(errors, "instagram") ? "input-error" : "")}`} value={form.instagram} onChange={handleChange} autoComplete="off" />
                                {hasValidationError(errors, "instagram") ? (<span className="error">{validationError(errors, "instagram")}</span>) : null}
                            </div>
                            <div className="field-group">
                                <label htmlFor="youtube" className="label">Youtube Link <span>(Optional)</span></label>
                                <input type="text" name="youtube" id="youtube" placeholder="Eg. ..youtube.com/username" className={`input ${(hasValidationError(errors, "youtube") ? "input-error" : "")}`} value={form.youtube} onChange={handleChange} autoComplete="off" />
                                {hasValidationError(errors, "youtube") ? (<span className="error">{validationError(errors, "youtube")}</span>) : null}
                            </div>
                        </>
                    )}
                    <div className="btn-wrap">
                        {activeTab === "contact" && (<button type="button" className="back-btn" onClick={() => setActiveTab("basic")}>Back</button>)}
                        <button type="submit" className="next-btn">{activeTab === "contact" ? "Done" : "Next"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddModal;
