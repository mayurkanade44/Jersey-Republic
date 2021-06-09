import React, { useContext, useEffect, useState } from "react";
import { products_url as url } from "../utils/links.js";

const ProdcutsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [singleLoading, setSingleLoading] = useState(false);
  const [singleError, setSingleError] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const featured = data.filter((product) => product.featured === true);
      setProducts(data);
      setFilteredProducts(data);
      setFeaturedProducts(featured);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setProductsError(true);
    }
  };

  const fetchSingleProduct = async (url) => {
    setSingleLoading(true);
    setSingleError(false);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setSingleProduct(data);
      setSingleLoading(false);
    } catch (error) {
      setSingleLoading(false);
      setSingleError(true);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProdcutsContext.Provider
      value={{
        loading,
        productsError,
        featuredProducts,
        fetchSingleProduct,
        singleProduct,
        singleError,
        singleLoading,
      }}
    >
      {children}
    </ProdcutsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProdcutsContext);
};
