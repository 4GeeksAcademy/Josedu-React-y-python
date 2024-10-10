import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import "../../styles/navbar.css";
import astronautIcon from "../../img/astronaut.jpg"; 

export const Navbar = () => {
    const { store, actions } = useContext(Context); 

    const handleLogout = () => {
        actions.logout(); 
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img src={astronautIcon} alt="Icono Universo" className="logo-icon" />
            </Link>
            <div className="login-buttons">
               
                {!store.auth ? (
                    <>
                        <div className="login-button">
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                        <div className="login-button">
                            <Link to="/signup">
                                <button>Sign up</button>
                            </Link>
                        </div>
                    </>
                ) : (
                    
                    <div className="login-button">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
};
