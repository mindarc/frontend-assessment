import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ISection } from "../../constants";
import { AnimatedContent } from "./AnimatedContent";

interface TabAccordionProps {
  sections: ISection[];
}

export const TabAccordion: React.FC<TabAccordionProps> = ({ sections }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    setActiveItem(sections[0]?.id || null);
  }, [sections]);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="md:flex md:justify-between border-b border-gray-200 relative">
        {sections.map((item: ISection) => (
          <div key={item.id} className="flex-grow">
            <button
              className={`py-6 px-4 text-xl font-semibold transition-colors duration-200 focus:outline-none flex items-center justify-center w-full
                ${
                  activeItem === item.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ease-in-out ml-2 md:hidden
                  ${activeItem === item.id ? "transform rotate-180" : ""}`}
              />
            </button>
            <AnimatedContent
              isActive={activeItem === item.id}
              section={item}
              motionClassName="overflow-hidden md:hidden"
            />
          </div>
        ))}
        {activeItem !== null && (
          <div className="hidden md:block absolute bottom-0 left-0 w-full">
            <div
              className="h-0.5 bg-blue-600 transition-all duration-300"
              style={{
                width: `${100 / sections.length}%`,
                marginLeft: `${((activeItem - 1) * 100) / sections.length}%`,
              }}
            ></div>
          </div>
        )}
      </div>
      <div className="mt-6 hidden md:block">
        {sections.map((item: ISection) => (
          <AnimatedContent
            isActive={activeItem === item.id}
            section={item}
            motionClassName="overflow-hidden"
            keyProp={item.id}
          />
        ))}
      </div>
    </div>
  );
};
