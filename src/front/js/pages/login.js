import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import astronautIcon from "../../img/astronaut.jpg";
import emailIcon from "../../img/email.png";
import passwordIcon from "../../img/password.png";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginSuccess = await actions.login(email, password);

        if (loginSuccess) {
            navigate("/private");
        } else {
            setError("Email o contraseña incorrectos");
        }
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
                        <h1>LogIn!</h1>
                    </div>

                    {error && <div className="alert alert-danger" role="alert">{error}</div>}

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
                    <input type="submit" className="my-form__button" value="Login" />
                    <div className="my-form__actions">
                        <div className="my-form__signup">
                            <Link to="/signup" title="Create Account">Eres nuevo? Crea una cuenta</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
