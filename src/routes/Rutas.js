import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import {Home,Login,Cuenta,Producto,Producto1,Producto3,Producto4} from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   
   <Routes>
    
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    <Route path='Login' element={loadLayouts(Layout, Login)}/>
    <Route path='Cuenta' element={loadLayouts(Layout, Cuenta)}/>
    <Route path='Producto' element={loadLayouts(Layout, Producto)}/>
    <Route path='Producto1' element={loadLayouts(Layout, Producto1)}/>
    <Route path='Producto3' element={loadLayouts(Layout, Producto3)}/>
    <Route path='Producto4' element={loadLayouts(Layout, Producto4)}/>


   </Routes> 
  )
}
