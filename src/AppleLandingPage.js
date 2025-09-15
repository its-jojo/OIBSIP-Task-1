import React, { useEffect, useState } from "react";
import "./AppleLandingPage.css";
import Hero from "./Hero";

export default function AppleStoreLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featured = [
    { title: "iPhone 15 Pro", desc: "The ultimate iPhone experience.", btn: "Shop iPhone" },
    { title: "MacBook Air M3", desc: "Light. Speed. Beyond.", btn: "Shop Mac" },
  ];

  const products = [
    { 
      name: "iPad Pro", 
      desc: "Ultra-thin, ultra-powerful.", 
      img: "/assets/ipad.jpg", 
      link: "https://www.apple.com/ipad-pro/" 
    },
    { 
      name: "Apple Watch", 
      desc: "The ultimate device for a healthy life.", 
      img: "/assets/apple_watch.jpg", 
      link: "https://www.apple.com/apple-watch/" 
    },
    { 
      name: "AirPods Pro", 
      desc: "Immersive sound experience.", 
      img: "/assets/airpods.jpeg", 
      link: "https://www.apple.com/airpods-pro/" 
    },
    { 
      name: "Apple TV 4K", 
      desc: "A higher definition of TV.", 
      img: "/assets/apple-tv.jpg", 
      link: "https://www.apple.com/apple-tv-4k/" 
    },
  ];

  return (
    <div className="landing">
      {/* Navbar */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Apple Store</div>
        <nav>
          <a href="https://www.apple.com/store" target="_blank" rel="noopener noreferrer">Store</a>
          <a href="https://www.apple.com/mac/" target="_blank" rel="noopener noreferrer">Mac</a>
          <a href="https://www.apple.com/ipad/" target="_blank" rel="noopener noreferrer">iPad</a>
          <a href="https://www.apple.com/iphone/" target="_blank" rel="noopener noreferrer">iPhone</a>
          <a href="https://www.apple.com/watch/" target="_blank" rel="noopener noreferrer">Watch</a>
          <a href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">Support</a>
        </nav>
      </header>

      {/* Hero Section with Video */}
      <Hero />

      {/* Featured Section */}
      {/* Featured Section */}
<section className="featured">
  {featured.map((item, index) => (
    <div className="feature-card" key={index}>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <a 
        className="btn-secondary"
        href={index === 0 
          ? "https://www.apple.com/iphone-15-pro/" 
          : "https://www.apple.com/macbook-air/"} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {item.btn}
      </a>
    </div>
  ))}
</section>


      {/* Products Section */}
      <section className="products">
        <h2>Latest Products</h2>
        <div className="product-grid">
          {products.map((item, index) => (
            <a 
              className="product-card" 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Apple Store – All Rights Reserved</p>
      </footer>
    </div>
  );
}
