import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <div className="row mb-3">
        <div className="col-3">
          <div className="row gx-0">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="border border-dark border-3"
                  style={{ height: 132 }}
                  src={image.url}
                  alt="name"
                  onClick={() => setMain(images[index])}
                ></img>
              );
            })}
          </div>
        </div>
        <div className="col-9">
          <img src={main.url} alt="main" style={{height:528}} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
