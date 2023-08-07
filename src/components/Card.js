import React from "react";
import "./Card.css";

const Card = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div className="image-conatiner">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="btn">
        <button>
          <a>View More</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
