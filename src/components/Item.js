import React, {useState} from "react";

function Item({ name, category }) {
  const[isInCart, setIsinCart] = useState(false);
  function handleAddToCartClick(){
    setIsinCart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;