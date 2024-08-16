import React, { useState } from 'react';
import './Accordion.css'; // Import the CSS file for styling

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion__item">
          <button
            className={`accordion__header ${index === activeIndex ? 'accordion__header--active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <p>{item.title}</p>
            <i
              className={`fas fa-chevron-down accordion__arrow ${index === activeIndex ? 'accordion__arrow--active' : ''}`}
            ></i>
          </button>
          <div
            className={`accordion__content ${index === activeIndex ? 'accordion__content--open' : ''}`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
