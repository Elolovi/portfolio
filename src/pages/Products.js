import React from 'react';


// Composant Products
const Products = () => {
  const products = [
    { id: 1, name: "Baguette", price: 1.5 },
    { id: 2, name: "Croissant", price: 2 },
    { id: 3, name: "Pain au chocolat", price: 2.5 }
  ];

  return (
    <div>
      <h2>Nos Produits</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}€</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;