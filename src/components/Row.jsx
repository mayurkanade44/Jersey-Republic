import React from "react";
import { useProductsContext } from "./Products_context";
import { Link } from "react-router-dom";

const Row = ({ title }) => {
  const { products, updateFilters } = useProductsContext();
  const league = products.filter((product) => product.category === title);
  console.log(league);

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
