import "./shoppingCart.css";
import { useState, useEffect } from "react";

export default function ShoppingCart({ addedToCart, setIsButton, setNums }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculates total amount when cart is updated
    const totalPrice = addedToCart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotal(totalPrice);
  }, [addedToCart]);

  const numberOfOrders = addedToCart.reduce((acc, pro) => {
    return acc + pro.quantity;
  }, 0);
  

  useEffect(()=>{
    setNums(numberOfOrders)
  },[numberOfOrders])


  let [cartDisplay, setCartDisplay] = useState(true);

  const handleCheckoutClick = () => {
    const alertMessage = `Checkout - Subtotal: ${
      addedToCart[0].installments
    } x ${addedToCart[0].currencyFormat} ${(
      total / addedToCart[0].installments
    ).toFixed(2)}`;
    alert(alertMessage);
  };

  return (
    <>
      {cartDisplay && (
        <div className="ordersContainer">
          <div className="shoppingCartIcon">
            <div
              className="close"
              onClick={() => {
                setCartDisplay(!cartDisplay);
                setIsButton(false);
              }}>
              x
            </div>
            <div className="shoppingCar">
              <i className="fa-solid fa-cart-shopping">
                <div className="numberDisplay">{numberOfOrders}</div>
              </i>
              <p className="shoppingPar">Cart</p>
            </div>
          </div>

          {addedToCart.map((product) => {
            return (
              <div key={product.id} className="shoppingCarItems">
                <img
                  src={`images/${product.sku}-1-cart.webp`}
                  alt=""
                  style={{ height: "8rem", margin: "0 1rem" }}
                />
                <div></div>
                <div className="shoppingCarSingleItem">
                  <span className="product-title">{product.title}</span>{" "}
                  <span className="product-style">{product.style}</span>{" "}
                  <span className="product-quantity">
                    Quantity:{product.quantity}
                  </span>
                </div>
                <p className="product-price">
                  {product.currencyFormat}
                  {product.price}
                </p>
              </div>
            );
          })}

          <div className="totalPrice">
            <p className="subTotal">SUBTOTAL</p>
            <div className="totalPriceValue">
              ${total.toFixed(2)}
              {addedToCart.length > 0 && (
                <p className="totalPriceValueStyle">
                  OR UP TO {addedToCart[0].installments} x{" "}
                  {addedToCart[0].currencyFormat}
                  {(total / addedToCart[0].installments).toFixed(2)}
                </p>
              )}
            </div>
          </div>
          <button onClick={handleCheckoutClick}>CHECKOUT</button>
        </div>
      )}
    </>
  );
}