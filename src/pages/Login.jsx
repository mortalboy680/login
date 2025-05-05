import React from 'react';
import '../styles/components/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="login-page">
        <form action="/login" method="POST" className="login-form">
        <h1 className="login-form__title">LOGIN</h1>
  
            <div className="login-form__group">
                <input
                type="text"
                id="username"
                name="username"
                placeholder="User"
                required
                className="login-form__input"
                />
            </div>
  
            <div className="login-form__group">
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="login-form__input"
                />
            </div>
  
            <div className="login-form__group">
                <button type="submit" className="login-form__button" placeholder="Password">Enviar</button>
            </div>
        </form>
    </div>  
  );
};

export default Login;
