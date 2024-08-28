import React from "react";

export const Hero: React.FC = () => (
  // Load separate placeholder images based on screen size
  <section className="hero">
    <div className="hero__image-container">
      <img
        /**
         * `/background-colour/text-colour`
         * Hiding the text to manually set the sizing
         */
        src="https://via.placeholder.com/1920x650/D4D4D4/D4D4D4"
        alt="Desktop hero"
        className="hero__image-desktop"
      />
      <span className="hero__image-text hero__image-text-desktop">
        1920 x 650
      </span>
      <span className="powered-by">Powered by HTML.COM</span>
      <img
        src="https://via.placeholder.com/600x600/D4D4D4/D4D4D4"
        alt="Mobile hero"
        className="hero__image-mobile"
      />
      <span className="hero__image-text hero__image-text-mobile">
        600 x 600
      </span>
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
