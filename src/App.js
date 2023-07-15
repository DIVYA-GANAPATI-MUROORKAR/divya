import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-router-dom"
import Home from "./Components/Home";
import Dest from './Components/Dest';
import AboutUs from './Components/AboutUs';
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Layout from "./Components/Layout";

// function App(){
//     return(
//         <div>
//             <h1>React</h1>
//             <p>Hello everyone</p>
//         </div>
//         <>
//             <h1 className="bg-primary">React</h1>
//             <p>Hello everyone</p>
//         </>
//     )
// }
function App(){
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Destination" element={<Dest/>}></Route>
        <Route path="/About" element={<AboutUs/>}></Route>
        <Route path="/Login" elements={<Login/>}></Route>
        <Route path="/Register" elements={<Register/>}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App