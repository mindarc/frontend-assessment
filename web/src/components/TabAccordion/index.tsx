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
      <div className="tab-accordion__container">
        {sections.map((item: ISection) => (
          <div key={item.id} className="flex-grow">
            <button
              className={`tab-accordion__button ${
                activeItem === item.id
                  ? "tab-accordion__button--active"
                  : "tab-accordion__button--inactive"
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`tab-accordion__icon ${
                  activeItem === item.id ? "transform rotate-180" : ""
                }`}
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
          <div
            className="tab-accordion__underline"
            style={{
              width: `${100 / sections.length}%`,
              marginLeft: `${((activeItem - 1) * 100) / sections.length}%`,
            }}
          ></div>
        )}
      </div>
      <div className="tab-accordion__desktop-content">
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
