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
  const [sort, setSort] = useState("name-a");
  const [gridView, setGridView] = useState(true);
  const [filters, setFilters] = useState({
    text: "",
    company: "all",
    category: "all",
    mcategory: "all",
  });

  const fetchProducts = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const featured = data.filter((product) => product.featured === true);
      setProducts(data);
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
      setSingleProduct(data.fields);
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

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    setFilters({ ...filters, [name]: value });
  };

  const sortFilterProducts = () => {
    let tempProducts = [...products];
    const { text, category, company, mcategory } = filters;
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
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (mcategory !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === mcategory
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    setFilteredProducts(tempProducts);
  };

  const clearFilters = () => {
    setFilters({ text: "", company: "all", category: "all", mcategory: "all" });
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  useEffect(() => {
    sortFilterProducts();
    // eslint-disable-next-line
  }, [products, filters, sort]);

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
        products,
        gridView,
        setGridView,
        filters,
        updateSort,
        updateFilters,
        filteredProducts,
        clearFilters,
      }}
    >
      {children}
    </ProdcutsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProdcutsContext);
};
