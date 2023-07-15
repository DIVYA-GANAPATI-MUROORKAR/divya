import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-warning navbar-warning">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        NAVBAR
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Destination">
                                    Destination
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;