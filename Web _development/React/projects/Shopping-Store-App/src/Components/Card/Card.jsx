// src/Components/Card/Card.jsx

import "./card.css";

import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";

export default function Card({
  products,
  setIsButton,
  isButton,
  productData,
  setProductData,
}) {
  const [hoveredProduct, setHoveredProduct] = useState(null);
 

  return (
    <div className="container">
      {products.map((product) => (
        <div
          key={product.id}
          className="card"
          onMouseOver={() => setHoveredProduct(product.sku)}
          onMouseOut={() => setHoveredProduct(null)}>
          <ImageCard
            sku={product.sku}
            isAlternateImage={hoveredProduct === product.sku}
            onMouseOver={() => setHoveredProduct(product.sku)} // Corrigido
            onMouseOut={() => setHoveredProduct(null)}
          />

          {product.isFreeShipping&&<p className="top-right-overlay">Free Shipping</p>}

          <h2>{product.title}</h2>
          <p className="price">
            {product.currencyFormat}
            <span className="priceValue">
              <span className="largeFont">
                {product.price.toString().slice(0, 2)}
              </span>
              {product.price.toString().slice(2)}
            </span>
          </p>
          <p className="paymentInstallments">
            or {product.installments} x {product.currencyFormat}
            {(product.price / product.installments).toFixed(2)}
          </p>
          <button
            onClick={() => {
              setIsButton(true);
              const existItem = productData.find(
                (item) => item.id === product.id
              );
              console.log(existItem);
              if (existItem) {
                existItem.quantity++;
                setProductData([...productData]);
              } else {
                product.quantity = 1;
                setProductData([product, ...productData]);
              }
            }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
