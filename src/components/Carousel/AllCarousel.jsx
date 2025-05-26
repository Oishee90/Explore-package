import React from "react";
import Carousel from "./Carousel";
import { FaLink } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const AllCarousel = () => {
  return (
    <div>
      {/* 🚀 Banner Section */}
      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-8 text-white rounded-b-[100%] hover:rounded-b-none transition-all duration-700 ease-in-out shadow-lg mb-10">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎠 Carousel Section
          </h1>
          <p className="text-lg md:text-xl">
            Discover smooth, responsive carousels designed with care and
            creativity.
          </p>
        </div>
      </div>

      {/* 🎡 Carousel Example Section */}
      <div className="container mx-auto px-4 ">
        {/* 🧩 Carousel 1 - Demo */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 ">
          🎯 Carousel-1
        </h2>
        <div className="bg-white rounded-2xl shadow-md pt-3 p-6 border border-gray-200 ">
          <p className="mb-2 font-medium text-gray-700">📦 Installation:</p>
          <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm w-1/3">
            <code>npm install keen-slider</code>
          </div>

          {/* Get Code Button */}
          <div className="flex items-center justify-between">
            <p className="text-gray-700 mb-4">
              After installing Keen Slider, you can use this pre-built Carousel
              component. Simply import it and pass your slides as props.
            </p>
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-[2px] rounded-2xl inline-block">
              <div className="bg-white rounded-[14px] py-3 px-4">
                <a
                  href="https://github.com/Oishee90/Explore-package/blob/main/src/components/Carousel/Carousel.jsx"
                  target="_blank"
                >
                  {" "}
                  <button className="text-pink-600 font-semibold flex items-center gap-2">
                    <FaLink /> Get Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Component */}
          <div className="mt-6">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarousel;
