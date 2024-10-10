import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { Context } from "../store/appContext";
import astronautIcon from "../../img/astronaut.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-white min-vh-100 d-flex flex-column justify-content-center">
      <div className="container text-center">
        <img src={astronautIcon} alt="Astronaut Icon" className="astronaut-icon rounded-circle mb-4" />
        <h1 className="display-1 font-weight-bold text-warning mb-5">
          Astronaut
        </h1>
        <p className="lead text-light mb-4">
          El universo es un lugar fascinante lleno de misterios por descubrir. 
          Estudiar planetas, estrellas y galaxias nos abre una ventana hacia lo desconocido, 
          permitiéndonos explorar los secretos del cosmos y comprender mejor nuestro lugar en él.
        </p>
        <div className="d-flex justify-content-center gap-3">
        </div>
      </div>
    </div>
  );
};
