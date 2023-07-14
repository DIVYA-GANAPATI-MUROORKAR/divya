import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-router-dom"
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";

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
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Destination" element={<Destination/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" elements={<Login/>}></Route>
        <Route path="/Register" elements={<Register/>}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App