import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import astronautIcon from "../../img/astronaut.jpg";
import "../../styles/home.css";

export const Private = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate(); 

   
    useEffect(() => {
        if (!store.auth) {
            navigate("/login");
        }
    }, [store.auth, navigate]);

    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white min-vh-100 d-flex flex-column justify-content-center">
            <div className="container text-center">
             
                <img src={astronautIcon} alt="Astronaut Icon" className="astronaut-icon rounded-circle mb-4" />
                <h1 className="display-1 font-weight-bold text-warning mb-5">
                    ¡Hiciste Login!
                </h1>
                <div className="d-flex justify-content-center gap-3">
                  
                </div>
            </div>
        </div>
    );
};
