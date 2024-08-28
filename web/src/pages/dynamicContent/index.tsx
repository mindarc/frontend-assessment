import React, { useState, useEffect } from "react";
import { Hero } from "../../components/Hero";
import { TabAccordion } from "../../components/TabAccordion";
import data from "../../data.json";
import { ISection } from "../../constants";

function isValidSection(item: any): item is ISection {
  return (
    typeof item.id === "number" &&
    typeof item.title === "string" &&
    typeof item.content === "string"
  );
}

function isValidDataArray(arr: any): arr is ISection[] {
  return Array.isArray(arr) && arr.every(isValidSection);
}

export const DynamicContent: React.FC = () => {
  const [sectionData, setSectionData] = useState<ISection[]>([]);
  /**
   * TODO: set up a skeleton loading state when dealing with more complex data fetching
   * const [isLoading, setIsLoading] = useState(true);
   */
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isValidDataArray(data)) {
          setSectionData(data);
        } else {
          setError("Invalid data structure in JSON file");
        }
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // TODO: send data errors to a logging service or to the backend via WebSockets
  }, [error]);

  return (
    <div className="dynamic-content">
      <Hero />
      {sectionData && (
        <section className="dynamic-content__data">
          <TabAccordion sections={sectionData} />
        </section>
      )}
    </div>
  );
};
