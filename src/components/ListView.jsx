import React from "react";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="container mb-3">
      <div className="row gy-4 ">
        {products.map((product) => {
          const { id, name, price, image, description } = product;
          return (
            <React.Fragment key={id}>
              <div className="col-lg-5">
                <img
                  className="p-1 bg-dark img-fluid"
                  style={{ height: 270, width: 400 }}
                  src={image}
                  alt={name}
                />
              </div>
              <div className="col-lg-7 p-3">
                <h2>{name}</h2>
                <p className="price">₹{price}</p>
                <p>{description.substring(0, 150)}...</p>
                <Link className="btn btn-dark" to={`/products/${id}`}>
                  Details
                </Link>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
