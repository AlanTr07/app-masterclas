import React from 'react';
import './styles.css';

const ProductView = () => {
  const product = {
    name: 'Moto deportiva Ninja 400 ABS',
    description: 'Moto deportiva modelo kawasaki ninja 400abs ',
    price: "25,899.99",
  };

  const handleAddToCart = () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div className="product-view">
      <div className="product-image">
        <img src="./imagenes/imagen2.png" alt="Producto Ejemplo" />
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

export default ProductView;
