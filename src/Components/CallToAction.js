import React from "react";
import { Link } from "react-router-dom";
import advert from "../Images/advert.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CallToAction = () => {
  return (
    <div className="mb-4">
      <div className="action-sect">
        <div className="advert-img">
          <img src={advert} alt="order your mount" />
        </div>
        <div className="advert-info text-center">
          {/* <p>Are you looking for photo mounting or framing?</p>
          <p>We are here for you...</p> */}
          <p>
            Let's help you hung your moments on the wall! Send us your selfies,
            and leave the rest to us{" "}
            <span style={{ fontSize: "24px" }}>&#128519;</span>
          </p>
          <Link to="/products/A1">
            <button className="btn-advert mt-3">
              ORDER NOW <ArrowRightAltIcon className="px-2 arrow-icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
