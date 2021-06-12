import React from "react";
import { Link } from "react-router-dom";

const GridView = ({ products }) => {
  return (
    <div className="container">
      <div className="row gx-3">
        {products.map((product) => {
          const { id, image, name, price } = product;
          return (
            <div className="col-lg-4" key={id}>
              <Link to={`/products/${id}`}>
                <img
                  className="p-1 bg-dark img-fluid"
                  style={{ height: 260, width: 800 }}
                  src={image}
                  alt={name}
                ></img>
              </Link>
              <div className="d-flex justify-content-between">
                <h5>{name}</h5>
                <p className="price">₹{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridView;
