import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/assets/apple-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Welcome to the Apple Store</h1>
        <p>Explore the latest iPhone, iPad, Mac, and accessories</p>
        
        
        <a 
          href="https://www.apple.com/store" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
