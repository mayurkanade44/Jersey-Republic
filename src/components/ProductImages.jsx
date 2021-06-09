import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <img src={main.url} alt="main" className="img-fluid main-img" />
      <div className="pt-2">
        <div className="row gx-1">
          {images.map((image, index) => {
            return (
              <div className="col" key={index}>
                <img
                  className="border img-fluid"
                  style={{ height: 100, width: 200 }}
                  src={image.url}
                  alt="name"
                  onClick={() => setMain(images[index])}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
