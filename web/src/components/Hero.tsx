import React from "react";

export const Hero: React.FC = () => (
  // Load separate placeholder images based on screen size
  <section className="hero">
    <div>
      <img
        src="https://via.placeholder.com/1920x650"
        alt="Desktop hero"
        className="hero__image-desktop"
      />
      <img
        src="https://via.placeholder.com/600x600"
        alt="Mobile hero"
        className="hero__image-mobile"
      />
      <span className="powered-by">Powered by HTML.COM</span>
    </div>
    <div className="hero__overlay">
      <div className="hero__content">
        <h1 className="hero__title">Hello Developer!</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  </section>
);
