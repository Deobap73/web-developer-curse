// src/Components/ImageCard/ImageCard.jsx


export default function ImageCard({ sku, isAlternateImage, onMouseOver, onMouseOut }) {
  const imageSrc = isAlternateImage
    ? `images/${sku}-2-product.webp`
    : `images/${sku}-1-product.webp`;

  return (
    <img
      src={imageSrc}
      alt={sku}
      style={{ height:'320px' }}
      className="cardImg"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}