import React from "react";
import Image from "next/image";
import "../styles/OffersSection.css";

export default function OffersSection() {
  const products = [
    { id: 1, name: "Bag", description: "Stylish leather bag", image: "/portraits/OfferSection/bags.png" },
    { id: 2, name: "Hat", description: "Trendy winter hat", image: "/portraits/OfferSection/hat.png" },
    { id: 3, name: "Jersey", description: "Comfortable jersey",  image: "/portraits/OfferSection/jersey.png" },
    { id: 4, name: "Cut and Sew", description: "Custom cut and sew services", image: "/portraits/OfferSection/cut-and-sew.png" },
    { id: 5, name: "Washing", description: "Premium washing service",image: "/portraits/OfferSection/washing.png" },
    { id: 6, name: "T-shirt", description: "High-quality cotton t-shirt", image: "/portraits/OfferSection/tshirt.png" },
  ];

  return (
    <section className="offers">
      <div className="offers-grid">
        {products.map((product) => (
          <div key={product.id} className="offer-card">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={0}
              height={0}
              sizes="100vw"
              
              objectFit="contain"
              className="offer-image" 
              layout="responsive" 
              priority={product.id === 1}  // Optional: prioritize the first image for better LCP
            />
            <div className="offer-details">
              <h3 className="offer-title">{product.name}</h3>
              <p className="offer-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
