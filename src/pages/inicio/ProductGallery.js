import React from 'react';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
  const images = [
    {
      id: "producto1",
      imageUrl: './imagenes/imagen1.png',
      price: "20,699,00",
      description: 'Descripción de la imagen 1',
    },
    {
      id: "producto",
      imageUrl: './imagenes/imagen2.png',
      price: "25,899.00",
      description: 'Descripción de la imagen 2',
    },
    {
      id: "producto3",
      imageUrl: './imagenes/imagen3.png',
      price: "30,000.00",
      description: 'Descripción de la imagen 3',
    },
    {
      id: "producto4",
      imageUrl: './imagenes/imagen4.png',
      price: "35,695.00",
      description: 'Descripción de la imagen 4',
    },
    {
      id: "producto5",
      imageUrl: './imagenes/imagen5.png',
      price: "26,000.00",
      description: 'Descripción de la imagen 5',
    },
    {
      id: "producto6",
      imageUrl: './imagenes/imagen6.png',
      price: "22,899.00",
      description: 'Descripción de la imagen 6',
    },
    {
      id: "producto7",
      imageUrl: './imagenes/imagen7.png',
      price: "63,999.00",
      description: 'Descripción de la imagen 7',
    },
   
    {
      id: "producto8",
      imageUrl: './imagenes/imagen8.png',
      price: "22,000,00",
      description: 'Descripción de la imagen 8',
    },
   
    {
      id: "producto9",
      imageUrl: './imagenes/imagen9.png',
      price: "25,999.00",
      description: 'Descripción de la imagen 9',
    },
   
    {
      id: "producto10",
      imageUrl: './imagenes/imagen10.png',
      price: "29,699.00",
      description: 'Descripción de la imagen 10',
    },
   
    {
      id: "producto11",
      imageUrl: './imagenes/imagen11.jpeg',
      price: "29,699.00",
      description: 'Descripción de la imagen 11',
    },
   
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.imageUrl} alt={`Imagen ${image.id}`} />
          <div className="image-details">
            <p>Precio: ${image.price}</p>
            <p>{image.description}</p>
            <a href={`${image.id}`}>Más detalles</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
