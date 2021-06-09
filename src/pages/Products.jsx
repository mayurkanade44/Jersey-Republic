import React from "react";
import Filter from '../components/Filters'
import ProductList from "../components/ProductList";
import Sort from '../components/Sort'

const Products = () => {
  return (
    <div className='container pt-5 page'>
      <div className="row">
        <div className="col-lg-3">
          <Filter/>
        </div>
        <div className="col-lg-9">
          <Sort/>
          <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default Products;
