import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
};

export const removePTags = (htmlContent) => {
  return htmlContent.replace(/<\/?p>/g, '');
};
