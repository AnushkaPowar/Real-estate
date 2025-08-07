import React from "react";
import { featured } from "../../data/Data";
import { Link } from "react-router-dom"; // Import Link for navigation

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((items, index) => (
          <Link to={`/property/${items.path}`} key={index} className="box"> {/* Clickable Link */}
            <img src={items.cover} alt={items.name} />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
