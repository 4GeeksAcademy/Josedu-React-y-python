import React, { useContext, useEffect, useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import astronautIcon from "../../img/astronaut.jpg";
import "../../styles/home.css";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        actions.syncToken();
        setLoading(false);
        if (!store.auth && !loading) {
            navigate("/login");
        }
    }, [store.auth, loading, navigate]);
    if (loading) {
        return <div>Cargando...</div>; 
    }

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
