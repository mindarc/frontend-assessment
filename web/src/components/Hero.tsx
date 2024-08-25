import React from "react";

export const Hero: React.FC = () => (
  // Load separate placeholder images based on screen size
  <section className="relative h-screen md:h-[650px] text-white overflow-hidden">
    {/* TODO: DRY */}
    <img
      src="https://via.placeholder.com/1920x650"
      alt="Hero placeholder"
      className="hidden md:block absolute inset-0 w-full h-full object-cover"
    />
    <img
      src="https://via.placeholder.com/600x600"
      alt="Hero placeholder"
      className="md:hidden absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello Developer!
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  </section>
);
