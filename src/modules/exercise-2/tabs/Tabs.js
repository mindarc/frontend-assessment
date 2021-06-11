import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { makeStyles } from '@material-ui/core/styles';
import _Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(() => ({
  tabs: {
    backgroundColor: '#1976d2',
    color: '#ffffff',
  },
}));

export default function Tabs({ data = [] }) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  return (
    <div>
      <_Tabs
        value={index}
        onChange={(event, index) => setIndex(index)}
        classes={{ flexContainer: classes.tabs }}
      >
        {data.map((item, i) => (
          <Tab key={i} label={item.title} />
        ))}
      </_Tabs>
      {data.map((item, i) => (
        <TabPanel key={i} value={index} index={i}>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.content),
            }}
          ></div>
        </TabPanel>
      ))}
    </div>
  );
}

function TabPanel({ children, value, index }) {
  return <div hidden={value !== index}>{value === index && children}</div>;
}
