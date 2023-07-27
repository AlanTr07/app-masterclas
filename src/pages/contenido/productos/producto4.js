import React from 'react';
import './styles.css';

const ProductView4 = () => {
  const product = {
    name: 'Moto deportiva BMW S1000',
    description: 'Moto deportiva modelo BMW S1000 ',
    price: "35,695.00",
  };

  const handleAddToCart = () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div className="product-view">
      <div className="product-image">
        <img src="./imagenes/imagen4.png" alt="Producto Ejemplo" />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <div className="product-buttons">
          
          <button onClick={handleAddToCart}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView4;
