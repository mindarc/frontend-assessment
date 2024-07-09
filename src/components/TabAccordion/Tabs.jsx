import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs1 from "react-bootstrap/Tabs";

const Tabs = ({ tabs, activeIndex, setActiveIndex }) => {
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="container">
        <Tabs1
          defaultActiveKey={tabs.title ? tabs.title : 0}
          id="tab-heading"
          className=""
        >
          {tabs.map((tab, index) => (
            <Tab eventKey={index} title={tab.title}>
              <div dangerouslySetInnerHTML={{ __html: tabs[index].content }} />
            </Tab>
          ))}
        </Tabs1>
      </div>
    </>
  );
};

export default Tabs;
