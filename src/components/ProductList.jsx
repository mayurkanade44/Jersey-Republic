import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductsContext } from "./Products_context";

const ProductList = () => {
  const { filteredProducts: products, gridView } = useProductsContext();
  if (products.length < 1) {
    return <h5>Sorry, no jersey matched your search..</h5>;
  }
  if (gridView === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}></GridView>;
};

export default ProductList;
