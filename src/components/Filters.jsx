import React, { useEffect, useState } from "react";
import { useProductsContext } from "./Products_context";

const Filters = () => {
  const [size, setSize] = useState(window.innerWidth);
  const {
    filters: { text, category, company, mcategory },
    updateFilters,
    clearFilters,
    products,
  } = useProductsContext();

  const getUniqueValue = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ["all", ...new Set(unique)];
  };

  const check = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', check)
  },[]);


  const categories = getUniqueValue(products, "category");
  const mcategories = getUniqueValue(products, "category");
  const companies = getUniqueValue(products, "company");

  return (
    <div className="container mt-5 pt-2">
      <div className="position-fixed mobile-filter">
        {/* search input */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            className="form-control form-control-sm"
            value={text}
            onChange={updateFilters}
          ></input>
        </form>
        {size < 992 ? (
          <div className="my-3">
            <h5>Leagues</h5>
            <select
              className="form-select form-select-sm"
              name="mcategory"
              value={mcategory}
              onChange={updateFilters}
            >
              {mcategories.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          <div className="my-3">
            <h5>Leagues</h5>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  name="category"
                  className={`d-block btn ${
                    category === c ? "border-bottom" : null
                  } category-btn`}
                  onClick={updateFilters}
                >
                  {c}
                </button>
              );
            })}
          </div>
        )}

        {/* companies */}
        <div className="my-3">
          <h5>Companies</h5>
          <select
            className="form-select form-select-sm"
            name="company"
            value={company}
            onChange={updateFilters}
          >
            {companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>
        {/* clear all */}
        <div className="my-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
