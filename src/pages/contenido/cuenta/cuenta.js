// Cuenta.js
import React from 'react';
import { Link } from 'react-router-dom';
import './estlo.css'
const Cuenta = () => {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor para el registro
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
      <div>
        ¿Ya tienes una cuenta? <Link to="/Login">Iniciar sesión</Link>
      </div>
    </div>
  );
};

export default Cuenta;
