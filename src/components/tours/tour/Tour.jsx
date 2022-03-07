import React from 'react';
import { Link } from 'react-router-dom';
import "./Tour.css";
function Tour({ city }) {
  return (
    <div>
      <Link to={`city/${city.id}`}>
        <h2 id="head">{city.name}</h2>
        <img id="img1" src={city.image} alt=""></img>
      </Link>
    </div>
  );
}

export default Tour;