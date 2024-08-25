import React, { useState } from "react";

interface ContentItem {
  id: number;
  title: string;
  content: string;
}

interface TabAccordionProps {
  items: ContentItem[];
}

export const TabAccordion: React.FC<TabAccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number | null>(
    items[0]?.id || null
  );

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="md:flex">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`w-full md:w-auto text-left px-4 py-2 focus:outline-none transition-colors duration-200
              ${
                activeItem === item.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }
              ${activeItem === item.id && "md:border-b-2 md:border-blue-500"}
              md:flex-grow md:text-center`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="md:mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden transition-all duration-200 ease-in-out
              ${activeItem === item.id ? "max-h-96" : "max-h-0 md:max-h-96"}`}
          >
            <div
              className={`p-4 bg-white ${
                activeItem === item.id ? "block" : "hidden md:block"
              }`}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
