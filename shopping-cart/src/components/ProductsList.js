import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import ProductContext from "../context/ProductContext";
import styles from "../styles/ProductList.module.css";

function ProductsList() {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
