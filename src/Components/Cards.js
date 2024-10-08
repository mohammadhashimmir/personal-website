import React, { useState } from 'react';
import "../Styles/Cards.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Cards({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-front">
        <div className="card-image">
          <img
            src={data.icon}
            alt="vectors by unDraw (https://undraw.co/)"
          />
        </div>
        <div className="card-content">
          <p>{data.name}</p>
          <p>{data.tech}</p>
        </div>
      </div>

      <div className="flip-card-back">
        <div className="card-content">
          <p>{data.details}</p>
          <button className='button is-normal external-link'
            onClick={() => window.open(data.link, '_blank')}>
            View <span><FaExternalLinkAlt /></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
