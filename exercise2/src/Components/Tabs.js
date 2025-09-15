import React, { useState } from 'react';
import './Tabs.css'; // Import the CSS file for styling


const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__titles">
        {data.map((item, index) => (
          <button
            key={index}
            className={`tabs__title ${index === activeTab ? 'tabs__title--active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tabs__content" dangerouslySetInnerHTML={{ __html: data[activeTab].content }} />
    </div>
  );
};

export default Tabs;
