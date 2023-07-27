import React from 'react';
import "./estilo.css";
import {Link} from "react-router-dom";


export function Menu() { 
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  " >
      <div class="container-fluid">
        <nav class="navbar bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="/">
            <img src="./imagenes/logo.png" /></a>
          </div>
        </nav>
        <div className="name">
            <a href="/" className="link">MOTOCLAS</a>
        </div>

        <button class="navbar-toggler "  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class=" gg-ericsson"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item " >
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Modelos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ofertas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Centro de Servicios</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="./login" >Iniciar sesión</a>
            </li>
          </ul>


   

        </div>
      </div>
      <form action="/" method="get" className="field has-addons">
          <div className="control has-icons-right is-expanded">
            <input
              type="text"
              className="input is-orange is-rounded"
              placeholder="Buscar"
              name="q"
            />
          </div>
          <p className="control ">
            <button type="submit" className="button is-orange is-rounded">
              <i className="fas fa-search botc ">  </i>
            </button>
          </p>
        </form>
    </nav>
</>
  )
}

