import React, { useState } from "react";
import { useProductsContext } from "./Products_context";
import { Link } from "react-router-dom";

const Row = ({ title }) => {
  const { products, updateFilters } = useProductsContext();
  const league = products.filter((product) => product.category === title);
  console.log(league);

  return (
    <div className="container">
      <Link to="/products">
        {/* <button name="category" onClick={updateFilters}>
        </button> */}
        <h2>{title}</h2>
      </Link>
      <div className="row-teams">
        {league.map((team) => {
          const { id, image } = team;
          return (
            <Link to={`/products/${id}`}>
              <img key={id} className="row-team" src={image} alt="name" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
