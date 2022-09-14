import React from "react";
import { Link } from "react-router-dom";
import { photoSizes } from "../data";

const Services = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="title text-center my-3">
        <h1>What we offer</h1>
        <hr />
      </div>
      <div className="row d-flex justify-content-center mx-1 mb-3">
        {photoSizes?.map((photo) => (
          // <div className="" key={photo.name}>
          <div
            className="col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center mb-4 card"
            key={photo.name}
          >
            <img
              src={photo.img}
              className="card-img-top"
              alt={`${photo.name}-mount`}
            />
            <div className="card-body">
              <div className="card-title d-flex mb-1 text-line">
                <h5>{photo.name}</h5>
                <h5 className="card-text">{photo.size}</h5>
              </div>
              <p className="card-text price">KES {photo.price}</p>
              <p className="card-text text-main">{photo.description}</p>
              <div className="d-flex">
                <Link
                  to={`/products/${photo.name}`}
                  className="btn btn-main mt-3"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
