import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import astronautIcon from "../../img/astronaut.jpg";
import emailIcon from "../../img/email.png";
import passwordIcon from "../../img/password.png";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const { actions } = useContext(Context); // Obtén las acciones del contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Llama a la acción signup del Flux
        actions.signup(email, password);
    };

    return (
        <>
            <div className="background"></div>
            <div className="centering">
                <form className="my-form" onSubmit={handleSubmit}>
                    <div className="login-welcome-row">
                        <img
                            className="login-welcome"
                            src={astronautIcon}
                            alt="Astronaut"
                        />
                        <h1>SignUp!</h1>
                    </div>
                    <div className="text-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            aria-label="Email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <img
                            alt="Email Icon"
                            title="Email Icon"
                            src={emailIcon}
                        />
                    </div>
                    <div className="text-field">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            aria-label="Password"
                            name="password"
                            placeholder="Your Password"
                            title="Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Symbol"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <img
                            alt="Password Icon"
                            title="Password Icon"
                            src={passwordIcon}
                        />
                    </div>
                    <div className="text-field">
                        <label htmlFor="confirmPassword">Repetir Contraseña:</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            aria-label="Repetir Contraseña"
                            name="confirmPassword"
                            placeholder="Repite tu Contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <input 
                        type="submit" 
                        className="my-form__button" 
                        value="Sign Up" 
                        disabled={password !== confirmPassword}
                    />
                </form>
            </div>
        </>
    );
};
