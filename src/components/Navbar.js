import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <Link to="/home" className="navbar-brand">
                <img height="40" width="40" src={logo} alt="Logo react js"/>
                &nbsp;&nbsp;
                <strong>Home</strong>
            </Link>
            <Link to="/estudiantes" className="btn btn-info m-3">
                Estudiantes
            </Link>
        </nav>
    )

}

export default Navbar;