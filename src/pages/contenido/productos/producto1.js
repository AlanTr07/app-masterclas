import React from 'react';
import './styles.css';

const ProductView1 = () => {
  const product= {
    name: 'Moto deportiva Suzuki GSX-R750',
    description: 'Moto deportiva Suzuki GSX-R750 ',
    price: "50,800.99",
  };

  const handleAddToCart = () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <div className="product-view">
      <div className="product-image">
        <img src="./imagenes/imagen1.png" alt="Producto Ejemplo" />
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

export default ProductView1;
