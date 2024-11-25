"use client";

import React, { useState } from "react";

const CarouselItem = ({ image, alt, text, isActive }) => {
  return (
    <div
      className={`${isActive ? "block" : "hidden"} duration-700 ease-in-out`}
      data-carousel-item
    >
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      {text && (
        <span className="absolute bottom-10 left-10  text-xl font-semibold text-white md:text-2xl ">
          {text}
        </span>
      )}
    </div>
  );
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "Slide 1",
      text: "First Slide",
    },
    {
      image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "Slide 2",
    },
    {
      image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "Slide 3",
      text: "Bài 52: Học làm giám đốc",
    },
    {
      image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "Slide 3",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mx-auto">
      <div
        id="default-carousel"
        className="relative rounded-lg overflow-hidden shadow-lg"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-80 md:h-96" data-carousel-inner>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              image={item.image}
              alt={item.alt}
              text={item.text}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Slider indicators */}
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-gray-400"
                  : "bg-gray-300 hover:bg-gray-400"
              } focus:outline-none transition`}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
