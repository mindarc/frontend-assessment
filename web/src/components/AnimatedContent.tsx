import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import React from "react";
import { ISection } from "../constants";

interface AnimatedContentProps {
  isActive: boolean;
  section: ISection;
  motionClassName: string;
  keyProp?: number;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  isActive,
  section,
  keyProp,
}) => (
  <AnimatePresence initial={false}>
    {isActive && (
      <motion.div
        key={keyProp}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="py-4 text-gray-600 text-center">
          <div className="rendered-html-content">{parse(section.content)}</div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
