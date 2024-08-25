import React from "react";

interface CardProps {
  bodyText: string;
}

export const Card: React.FC<CardProps> = ({ bodyText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-0 pb-[75%] mb-6">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Card placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-700 mb-6 flex-grow">{bodyText}</p>
        <div>
          <button className="bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 transition-colors duration-300 py-2 px-6">
            <span className="text-gray-700 font-black text-sm tracking-wider hover:text-white">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
