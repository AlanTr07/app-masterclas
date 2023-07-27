import React, { useState } from 'react';
import './inicio.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la autenticación
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
      <div>
        ¿No tienes una cuenta? <Link to="/Cuenta">Crear cuenta</Link>
      </div>
    </form>
  );
};

export default Login;
