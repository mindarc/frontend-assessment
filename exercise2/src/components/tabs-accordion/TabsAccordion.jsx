import React, { useState, useEffect } from 'react';
import { Tabs, Collapse } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const TabsAccordion = ({ sections }) => {
  const [activeKey, setActiveKey] = useState('0');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const accordionItems = sections.map((section, index) => (
    <Panel 
      key={index}
      header={section.title}
    >
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
    </Panel>
  ));

  const tabItems = sections.map((section, index) => (
    <TabPane 
      key={index}
      tab={section.title}
    >
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
    </TabPane>
  ));

  return isMobile ? (
    <Collapse 
      accordion activeKey={activeKey}
      onChange={handleTabChange}
    >
      {accordionItems}
    </Collapse>
  ) : (
    <Tabs 
      activeKey={activeKey}
      onChange={handleTabChange}
      type="card"
    >
      {tabItems}
    </Tabs>
  );
};

export default TabsAccordion;
