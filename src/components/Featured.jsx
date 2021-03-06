import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/featured.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useProductsContext } from "./Products_context";
import Loading from "./Loading";
import Error from "./Error";

const Featured = () => {
  const { productsError, loading, featuredProducts } = useProductsContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = featuredProducts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, featuredProducts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  if (loading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }

  return (
    <section className="container">
      <div className="section-center">
        {featuredProducts.map((product, productIndex) => {
          const { id, image, name } = product;

          let position = "nextSlide";
          if (productIndex === index) {
            position = "activeSlide";
          }
          if (
            productIndex === index - 1 ||
            (index === 0 && productIndex === featuredProducts.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <Link to={`/products/${id}`}>
                <img src={image} alt={name} className="jersey-main-img" />
              </Link>
              <h4>{name}</h4>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Featured;
