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
            <Route path="/admin-layout" element={<AdminLayOut/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
