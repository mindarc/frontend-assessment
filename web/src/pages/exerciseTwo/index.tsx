import React, { useState, useEffect } from "react";
import { TabAccordion } from "../../components/TabAccordion";
import data from "../../data.json";

interface ContentItem {
  id: number;
  title: string;
  content: string;
}

export const ExerciseTwo: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <TabAccordion items={items} />
      </div>
    </div>
  );
};
