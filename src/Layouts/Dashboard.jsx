import React from "react";
import Chatloader from "../components/Robot-Loader/ChatLoader";
import Loader from "../components/Normal-colorfull-Loader/Loader";
import ModalComponent from "../components/Custom-modal/Modal";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import Carousel from "../components/Carousel/Carousel";
import Button from "../components/Button/Button";

export default function Dashboard() {
  const components = [
    { title: "Navbar", route: "/navbar" },
    { title: "Chat Loader", route: "/chat-loader" },
    { title: "Rounded Loader", route: "/rounded-loader" },
    { title: "Custom Modal", route: "/custom-modal" },
    { title: "Animated Modal", route: "/reset-password" },
    { title: "Pagination", route: "/pagination" },
    { title: "Carousel", route: "/carousel" },
    { title: "Button", route: "/button" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {components.map((component, idx) => (
          <Link to={component.route} key={idx}>
            <div className="bg-white hover:bg-pink-100 border rounded-xl shadow-lg p-6 text-center cursor-pointer transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold text-gray-800">
                {component.title}
              </h2>
            </div>
          </Link>
        ))}
        <div className="col-span-full mt-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}
