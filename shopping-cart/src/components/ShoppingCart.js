import React, { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import styles from "../styles/ShoppingCart.module.css";

function ShoppingCart() {
  const { cart, dispatch } = useContext(ShoppingCartContext);

  function handleChangeQuantity(id, newQuantity) {
    const parsedQuantity = parseInt(newQuantity, 10) || 0;
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id, quantity: parsedQuantity },
    });
  }

  function handleRemoveItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  return (
    <div className="container">
      <div className={styles.cartHeader}>
        <h2>Корзина</h2>
        {cart.length > 0 && (
          <button className={styles.btnClear} onClick={handleClearCart}>
            Очистить корзину
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>Корзина пуста</p>
      ) : (
        <ol className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <p className={styles.cartItemName}>{item.name}</p>
              <input
                className={styles.cartItemQuantity}
                type="number"
                value={item.quantity}
                onChange={(e) => handleChangeQuantity(item.id, e.target.value)}
              />
              <p className={styles.cartItemPrice}>
                {(item.price * item.quantity).toLocaleString()} ₽
              </p>
              <button
                className={styles.btnDelete}
                onClick={() => handleRemoveItem(item.id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ol>
      )}
      <h3>
        Итого:
        <span className={styles.cartTotalSum}>
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toLocaleString()}{" "}
          ₽
        </span>
      </h3>
    </div>
  );
}

export default ShoppingCart;
