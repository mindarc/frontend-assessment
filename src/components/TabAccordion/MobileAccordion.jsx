import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const MobileAccordion = ({ tabs, activeIndex, setActiveIndex }) => {
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="container">
      <Accordion defaultActiveKey={tabs.title ? tabs.title : 0}>
        {tabs.map((tab, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{tab.title}</Accordion.Header>
            <Accordion.Body>
              <div dangerouslySetInnerHTML={{ __html: tabs[index].content }} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileAccordion;
