import React from "react";

interface CardProps {
  bodyText: string;
  padding?: string;
}

export const Card: React.FC<CardProps> = ({ bodyText, padding = "p-6" }) => (
  <div className={`card ${padding}`}>
    <div className="card__image-container">
      <img
        src="https://via.placeholder.com/400x300"
        alt="Card placeholder"
        className="card__image"
      />
      <span>Powered by HTML.COM</span>
    </div>
    <div className="card__body">
      <p className="card__text">{bodyText}</p>
      <div>
        <button className="card__button">
          <span className="expand-text">Read more</span>
        </button>
      </div>
    </div>
  </div>
);
