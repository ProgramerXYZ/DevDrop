import React,{useState} from "react";
// import reactLogo from "./assets/react.svg";
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { invoke } from "@tauri-apps/api/core";
import Signup from "./sections/Signup.jsx";
import Login from "./sections/Login.jsx";
import "./App.css";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
