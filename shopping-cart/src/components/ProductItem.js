import React, { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import styles from "../styles/ProductItem.module.css";

function ProductItem({ product }) {
  const { dispatch } = useContext(ShoppingCartContext);

  function handleAddToCart(product) {
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemBody}>
        <img src={product.image} alt="" className={styles.itemImage} />
        <p className={styles.itemPrice}>{product.price} ₽</p>
        <p>{product.name}</p>
      </div>
      <button
        className={styles.btnAdd}
        onClick={() => handleAddToCart(product)}
      >
        Купить
      </button>
    </div>
  );
}

export default ProductItem;
