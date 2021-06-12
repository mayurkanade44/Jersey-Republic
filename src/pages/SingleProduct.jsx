import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useProductsContext } from "../components/Products_context";
import { useParams, Link } from "react-router-dom";
import { single_product_url as url } from "../utils/links";
import ProductImages from "../components/ProductImages";
import "../css/singlePage.css";
const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleLoading, singleError, singleProduct } =
    useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (singleLoading) {
    return <Loading />;
  }
  if (singleError) {
    return <Error />;
  }
  const { name, price, description, images, company, category } = singleProduct;
  return (
    <div className="page">
      <div className="container">
        <Link to="/products" className="btn btn-dark mt-3">
          Back To Products
        </Link>
        <div className="row">
          <div className="col-lg-6">
            <div className="product-center">
              <ProductImages images={images} />
            </div>
          </div>
          <div className="col-lg-6 pt-4">
            <h2 className="my-4">{name}</h2>
            <h5 className="price my-4">₹{price}</h5>
            <p className="desc my-4">{description}</p>
            <p className="info">
              <span>League : </span>
              {category}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
