import { useState } from "react";
import "./sizes.css";
import CardsContainer from "../CardsContainer/CardsContainer";

export default function Sizes({ products }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const mainSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  function handleSizeSelect(size) {
    setSelectedSize(size);
  }

  // We use the .includes() method to check if an array or a string contains a specific element or substring, respectively.
  const filteredProducts = products.filter((product) =>
    product.availableSizes.includes(selectedSize)
  );

  return (
    <>
    
    <div className="sizeContainer">
    
      <div>
        <h3 className="mainSizesTitle">Sizes:</h3>
        <div className="mainSizes">
        {mainSizes.map((size) => (
           <button
           key={size}
           className={`mainSizesButton ${
             selectedSize === size && isSizeSelected
               ? "selectedStyle"
               : "defaultStyle"
           }`}
           onClick={() => {
             if (selectedSize === size && isSizeSelected) {
             
               setSelectedSize("");
               setIsSizeSelected(false);
             } else {
               setSelectedSize(size);
               setIsSizeSelected(true);
             }
           }}
         >
           {size}
         </button>
        ))}
      </div>
      </div>
      
      {isSizeSelected ? (
        <CardsContainer products={filteredProducts} />
      ) : (
        <CardsContainer products={products} />
      )}
      
    </div>
    </>
  );
}
