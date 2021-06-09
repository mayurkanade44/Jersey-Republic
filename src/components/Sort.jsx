import React from "react";
import { useProductsContext } from "./Products_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filteredProducts: products, gridView, setGridView, sort, updateSort } = useProductsContext();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <button
            className={`btn btn-${
              gridView ? "dark" : "light"
            } btn-grid border border-2 border-dark`}
            onClick={() => setGridView(true)}
          >
            <BsFillGridFill size="18" />
          </button>
          <button
            className={`mx-2 btn btn-${
              !gridView ? "dark" : "light"
            } btn-grid border border-2 border-dark`}
            onClick={() => setGridView(false)}
          >
            <BsList size="18" />
          </button>
        </div>
        <div className="col-lg-6 text-center">
          <p className="mobile-sort">{products.length} Products Found</p>
        </div>
        <div className="col-lg-4 d-flex justify-content-end mobile-select">
          <label className="pe-2" htmlFor="sort">
            Sort By
          </label>
          <form>
            <select
              name="sort"
              value={sort}
              className="form-select form-grid py-0 ps-1"
              onChange={updateSort}
            >
              <option value="name-a">Name (A-Z)</option>
              <option value="name-z">Name (Z-A)</option>
              <option value="price-low">Price Lowest</option>
              <option value="price-high">Price Highest</option>
            </select>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sort;
