import React from 'react';
import './styles.css';

const ProductView3 = () => {
  const product = {
    name: 'Moto deportiva Yamaha YZF-R6',
    description: 'Moto deportiva modelo Yamaha YZF-R6',
    price: "30,000.00",
  };

  const handleAddToCart = () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div className="product-view">
      <div className="product-image">
        <img src="./imagenes/imagen3.png" alt="Producto Ejemplo" />
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

export default ProductView3;
