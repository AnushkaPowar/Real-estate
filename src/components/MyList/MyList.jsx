import React, { useState } from "react";
import "./MyList.css"; // Importing CSS for styling

const MyList = () => {
  // Sample property data
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Luxury Villa in LA",
      price: "₹1,200,000",
      image: "../images/list/p-7.png",
    },
    {
      id: 2,
      title: "Modern Apartment in NYC",
      price: "₹850,000",
      image: "../images/list/p-7.png",
    },
    {
      id: 3,
      title: "Beach House in Miami",
      price: "₹1,500,000",
      image: "../images/list/p-4.png",
    },
    {
      id: 4,
      title: "Penthouse in Chicago",
      price: "₹950,000",
      image: "../images/list/p-1.png",
    },
    {
      id: 5,
      title: "Countryside Mansion",
      price: "₹2,000,000",
      image: "../images/list/p-6.png",
    },
    {
      id: 6,
      title: "Cozy Cabin in Colorado",
      price: "₹600,000",
      image: "../images/list/p-5.png",
    },
  ]);

  // Remove property from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>My Saved Properties</h2>
      {cart.length === 0 ? (
        <p>No properties in your list.</p>
      ) : (
        <div className="property-list">
          {cart.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              <div className="buttons">
                <button className="buy-btn">Buy Now</button>
                <button className="remove-btn" onClick={() => removeFromCart(property.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
