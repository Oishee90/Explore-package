import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { FaLink } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import throttle from "lodash.throttle";
import Dock from "../Navbar/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
const AllCarousel = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    }, 16); // ~60fps for smooth animation

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel && handleScroll.cancel();
    };
  }, []);

  // Calculate opacity based on scroll position
  const contentOpacity = Math.max(0, 1 - scrollY / 200);
  const titleOpacity = Math.max(0, 1 - scrollY / 150);
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];
  return (
    <div>
      <div
        className={`relative bg-gradient-to-r from-pink-500 to-purple-600 py-8 text-white hover:rounded-b-none ${
          isScrolled ? "rounded-b-none " : "rounded-b-[100%]"
        } transition-all duration-[1000ms] ease-in-out shadow-lg mb-10`}
        style={{
          willChange: "border-radius, padding",
          minHeight: isScrolled ? "80px" : "auto", // Maintain some height when content is hidden
        }}
        // Maintain some height when content is hidden
      >
        {!isScrolled && (
          <div
            className="text-center px-4 transition-all duration-500 ease-out"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${scrollY * 0.2}px) scale(${
                0.9 + contentOpacity * 0.1
              })`,
              pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
            }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              🎠 Carousel Section
            </h1>
            <p
              className="text-lg md:text-xl mb-6 transition-all duration-400"
              style={{
                opacity: Math.max(0, contentOpacity - 0.2),
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            >
              Discover smooth, responsive carousels designed with care and
              creativity.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full hover:bg-pink-100 transition-all duration-300">
                Docs
              </button>
              <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition-all duration-300">
                Components
              </button>
              <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-full hover:bg-indigo-100 transition-all duration-300">
                Form
              </button>
            </div>
          </div>
        )}
      </div>
      {isScrolled && (
        <>
          <div
            className={`fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-md py-4 flex justify-center space-x-4 shadow-xl z-50 transform
    transition-all duration-[9000ms] delay-[3000ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
      isScrolled
        ? "translate-y-0 opacity-600 pointer-events-auto"
        : "-translate-y-10 opacity-0 pointer-events-none"
    }`}
          >
            <div>
              <Dock items={items} baseItemSize={50} magnification={70} />
            </div>
          </div>
          {/* Spacer when buttons are fixed */}
          {isScrolled && <div className="h-[60px]" />}
        </>
      )}

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
