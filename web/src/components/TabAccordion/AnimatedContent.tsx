import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import React from "react";
import { ISection } from "../../constants";

interface AnimatedContentProps {
  isActive: boolean;
  section: ISection;
  motionClassName: string;
  keyProp?: number;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  isActive,
  section,
  motionClassName,
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
        className={motionClassName}
      >
        <div className="animated-content">
          {/* Bullet points are not centred along with the content and will remain on the left */}
          <div className="rendered-html-content">{parse(section.content)}</div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
