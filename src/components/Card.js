import React from "react";
import "./Card.css";

const Card = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container">
      <div className="image-conatiner">
        <img src={imageUrl} alt="" />
      </div>
<<<<<<< HEAD
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
=======
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
>>>>>>> 73fefea95c282f825aaf141a4bd213730f82e6ec
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
