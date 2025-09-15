import React, { useState, useEffect } from 'react';
import Tabs from './Components/Tabs';
import Accordion from './Components/Accordion';
import './App.css';
import data from './data/data.json';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      {isMobile ? <Accordion data={data} /> : <Tabs data={data} />}
    </div>
  );
};

export default App;
