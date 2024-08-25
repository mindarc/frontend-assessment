import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";

export interface ISection {
  id: number;
  title: string;
  content: string;
}

interface TabAccordionProps {
  sections: ISection[];
}

export const TabAccordion: React.FC<TabAccordionProps> = ({ sections }) => {
  const [activeItem, setActiveItem] = useState<number | null>(
    sections[0]?.id || null
  );

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="md:flex md:border-b border-gray-200">
        {sections.map((item: ISection) => (
          <div
            key={item.id}
            className="border-b border-gray-200 md:border-b-0 md:flex-grow"
          >
            <button
              className={`w-full py-6 px-4 text-left text-xl font-semibold transition-colors duration-200 focus:outline-none flex justify-between items-center
                md:text-center md:flex-grow md:border-b-2 md:border-transparent
                ${
                  activeItem === item.id
                    ? "text-blue-600 md:border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ease-in-out md:hidden
                  ${activeItem === item.id ? "transform rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {activeItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 text-gray-600 overflow-hidden md:absolute md:left-0 md:right-0 md:mt-2"
                >
                  <div className="rendered-html-content">
                    {parse(item.content)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
