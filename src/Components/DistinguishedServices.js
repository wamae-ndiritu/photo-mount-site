import React from "react";
import mount from "../Images/mount.jpg";
import frame from "../Images/frame.jpg";

const DistinguishedServices = () => {
  return (
    <div className="container my-4">
      <div className="title text-center my-3">
        <h1>Distinguished Services</h1>
        <hr />
      </div>
      <div className="row gx-0 mx-3">
        <div className="title-2">
          <h1>Art of mounting</h1>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="mount-cont">
            <img src={mount} alt="mounting" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <div className="mount-info">
            <p>
              Photographic mounting describes a process of using adhesive to fix
              a photo print to a solid rigid material, known as a substrate.{" "}
            </p>
            <p>
              It involves attaching a drawing, print, photograph, or other work
              of art done on paper to a cardboard or other backing by using a
              thermoplastic tissue as an adhesive.
            </p>
            <p>
              We ensure that you photograph has a better solid state that makes
              it durable. Your moments have to be memorable!
            </p>
          </div>
        </div>
      </div>
      <div className="row gx-0 mx-3">
        <div className="title-2">
          <h1>Art of framing</h1>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="mount-info">
            <p>
              Framing in photography refers to the technique of drawing focus to
              the subject in the photo by blocking other parts of the image with
              something in the scene.{" "}
            </p>
            <p>
              It can be located in the center of the picture or alongside its
              edges.
            </p>
            <p>We ensure that you photograph is in a it's best state!</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 text-center mb-3">
          <div className="mount-cont">
            <img src={frame} alt="framing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistinguishedServices;
