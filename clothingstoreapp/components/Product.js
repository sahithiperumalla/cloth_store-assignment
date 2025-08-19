import React from 'react'
import './Product.css';

const Product = () => {
    const products = [
  {
    productId: 101,
    productName: "T-Shirt",
    description: "Cotton material",
    price: 499,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    productId: 102,
    productName: "Jeans",
    description: "Slim fit denim",
    price: 1299,
    sizes: ["M", "L", "XL"]
  },
  {
    productId: 103,
    productName: "Jacket",
    description: "Winter collection",
    price: 2499,
    sizes: ["L", "XL"]
  }
];


  return (
    <div>
      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th style={{ textAlign: "right" }}>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.productId}>
                <td>{p.productId}</td>
                <td>{p.productName}</td>
                <td>{p.description}</td>
                <td style={{ textAlign: "right" }}>₹{p.price}</td>
                <td>{p.sizes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

   

export default Product