
import React from 'react';
import {useNavigate} from "react-router-dom";
import ProductGallery from './ProductGallery';

import './productos.css';


export function Home() {
  let navigate = useNavigate();



  function clik(){
    navigate('./modulo')
  }
  return(
    <> 
    


    <div>
      <h1 className="text-md "></h1>
      < ProductGallery />
    </div>

    </>
    

    );
}
