import React from "react";
import ProductsList from "./ProductsList";
import { ProductContextProvider } from "../context/ProductContextProvider";

function Catalogue() {
  return (
    <div className="container">
      <h2>Каталог</h2>
      <ProductContextProvider>
        <ProductsList />
      </ProductContextProvider>
    </div>
  );
}

export default Catalogue;
