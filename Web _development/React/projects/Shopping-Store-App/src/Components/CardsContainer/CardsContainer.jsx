import Card from "../Card/Card";
import "./cardsContainer.css";
import { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function CardsContainer({ products }) {
 let totalProducts=products.length
  console.log(totalProducts)
  const [isButton, setIsButton] = useState(false);
  const [productData, setProductData] = useState([]);
  let [nums, setNums] = useState(0);
  console.log(productData);
 

  return (
    <>
    
        <div>
          <i
            className="fa-solid fa-cart-arrow-down"
            onClick={() => setIsButton(!isButton)}>
            <div className="numberDisplay2">{nums}</div>
          </i>
        </div>
    <section>
      <h3 className="totalProductsDisp">{totalProducts} Product(s) found</h3>
      <div className="CardContainer">
      {products && (
        <Card
          products={products}
          setIsButton={setIsButton}
          isButton={isButton}
          productData={productData}
          setProductData={setProductData}
        />
      )}

      {isButton && productData && (
        <ShoppingCart
          addedToCart={productData}
          setIsButton={setIsButton}
          isButton={isButton}
          setNums={setNums}
        />
      )}
    </div>
    </section>
    </>
    
  );
}
