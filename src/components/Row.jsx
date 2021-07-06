import React from "react";
import { useProductsContext } from "./Products_context";
import { Link } from "react-router-dom";

const Row = ({ title }) => {
  const { products, updateFilters } = useProductsContext();
  const league = products.filter((product) => product.category === title);

  return (
    <div className="container">
      <Link to="/products">
        <button
          className="btn bg-transparent"
          style={{ fontSize: 30, fontWeight: 600 }}
          name="category"
          value={title}
          onClick={updateFilters}
        >
          {title}
        </button>
      </Link>
      <div className="row-teams ">
        {league.slice(0,5).map((team) => {
          const { id, image, name } = team;
          return (
            <Link key={id} to={`/products/${id}`}>
              <img className="row-team row-mobile" src={image} alt={name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
