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
  const [gridView, setGridView] = useState(true);
  const [sort, setSort] = useState("");

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

  const updateSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  const sortProducts = () => {
    let tempProducts = [...filteredProducts];
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (sort === "price-high") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "price-low") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    return setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    sortProducts();
  }, [sort]);

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
        filteredProducts,
        products,
        gridView,
        setGridView,
        updateSort,
        sort,
      }}
    >
      {children}
    </ProdcutsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProdcutsContext);
};
