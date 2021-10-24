import React from "react";
import './Login.css';
import { Link } from 'react-router-dom'

class Login extends React.Component{

    componentDidMount(){
        document.getElementById("username").focus()
    }

    render(){
        return(
            <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center bg-info">Iniciar Sesión</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Usuario:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Contraseña:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <br/>
                                    <Link to="/home" className="btn btn-info btn-md">
                                        Ingresar
                                    </Link>    
                                </div>
                                <br/>
                                <div id="register-link" className="text-right">
                                    <Link to="#" className="text-info">Crear Cuenta</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        )
    }

}

export default Login;
