import React from "react";
import Carousel from "./Carousel";
import { FaLink } from "react-icons/fa";

const AllCarousel = () => {
  return (
    <div className="">
      {/* 🚀 Banner Section */}
      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-8 text-white  rounded-b-[100%] hover:rounded-b-none transition-all duration-800 shadow-lg mb-10">
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

      {/* 🎡 Carousel Section */}
      <div className="container mx-auto ">
        <div className="px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold mb-4">Carousel-1</h2>
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-[2px] rounded-2xl inline-block">
              <div className="bg-white rounded-[14px] py-3 px-4">
                <button className="text-pink-600 font-semibold flex items-center gap-2">
                  <FaLink /> Get Code
                </button>
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default AllCarousel;
