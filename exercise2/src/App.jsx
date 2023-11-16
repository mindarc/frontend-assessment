import TabsAccordion from "./components/tabs-accordion/TabsAccordion"
import 'antd/dist/reset.css';
import jsonData from './data.json';
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleCheckboxChange = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#0a1725' : '#eee';
      }, [darkMode]);

  return (
    <div className={`wrapper ${darkMode ? 'dark' : 'light'}`}>

        <div className="toggle-btn">
            <input
                type="checkbox"
                name="checkbox"
                checked={darkMode}
                onChange={handleCheckboxChange}
            />
            <span></span>
        </div>

      <TabsAccordion sections={jsonData}/>
    </div>
  )
}

export default App