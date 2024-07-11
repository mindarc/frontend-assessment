import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import MobileAccordion from "./MobileAccordion";
import AccordionTabData from "../../helpers/data.json"; // Adjust path as necessary
import "../../assets/scss/tabsaccordion.scss";

const TabsOrAccordion = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [accordionTabs, setAccordionTabs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index to 0

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulating API call or fetching JSON data
    // Replace with your actual fetch logic if loading from an API
    // For demo purpose, we're just importing from a JSON file
    setAccordionTabs(AccordionTabData);
  }, []);

  return (
    <div className="tabs-accordion-container mb-5">
      {isMobile ? (
        <MobileAccordion
          tabs={accordionTabs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <Tabs
          tabs={accordionTabs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
};

export default TabsOrAccordion;
