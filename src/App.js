import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from "./components/signin/SignIn";
import AdminLayOut from "./components/adminlayout/AdminLayOut";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/> } />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/admin/dashboard" element={<AdminLayOut/>}/>
            <Route path="/admin/transactions" element={<AdminLayOut/>}/>
            <Route path="/admin/schedules" element={<AdminLayOut/>}/>
            <Route path="/admin/users" element={<AdminLayOut/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
