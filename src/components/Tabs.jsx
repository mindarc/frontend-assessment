import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Tabs = (props) => {
  const [data] = useState(props.data || []);
  const [activeTab, setActiveTab] = useState(1);


  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <React.Fragment>
      <Nav tabs>
        {data.map((item, index) => {
          const tabId = index + 1;
          return (
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === tabId })}
                onClick={() => { toggle(tabId); }}
                style={{ cursor: "pointer" }}
              >{item.title}</NavLink>
            </NavItem>
          )
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        {data.map((item, index) => {
          const tabId = index + 1;
          return (
            <TabPane tabId={tabId}>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content
                }}
              />
            </TabPane>
          )
        })}
      </TabContent>
    </React.Fragment>
  );
}

export default Tabs;
