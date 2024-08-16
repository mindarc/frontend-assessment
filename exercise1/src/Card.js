import React from 'react';

const Card = ({ imageSrc, content }) => {
  return (
    <div className="w-[450px] rounded overflow-hidden shadow-lg bg-white">
      <img 
        src={imageSrc} 
        alt="Content" 
        className="app__content-image mx-auto"
      />
      <div className="px-6 py-4 text-center">
        <p className="text-gray-700 text-base sm:text-sm md:text-base lg:text-lg">
          {content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-7 flex justify-center">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full border border-black hover:bg-black hover:text-white transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
