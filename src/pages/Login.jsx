// src/pages/auth/Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import '../styles/components/Login.css';

const Login = () => {
  return (
    <div>
        <form action="/login" method="POST">
            <h1>Login</h1>

            <div>
                <input type="text" id="username" name="username" placeholder="Ingrese su usuario" required />
            </div>

            <div>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            </div>

            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  );
};

export default Login;
