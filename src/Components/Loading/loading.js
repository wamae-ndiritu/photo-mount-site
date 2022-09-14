import React from "react";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ height: "20px", width: "20px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-danger mx-2"
        role="status"
        style={{ height: "20px", width: "20px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ height: "20px", width: "20px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
