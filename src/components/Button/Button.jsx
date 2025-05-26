import React from "react";
import { MdOutgoingMail } from "react-icons/md"; // Ensure this import is added

const Button = () => {
  return (
    <div className="mt-6 mb-2 md:mt-12 cursor-pointer">
      <button className="relative px-2 py-2 border-2 text-lg border-r-4 border-b-4 border-[#d9ae4a] border-b-white border-r-white rounded-lg bg-none text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2">
        <span className="relative z-10 flex items-center gap-1">
          <MdOutgoingMail className="text-inherit font-medium w-[24px] h-[18px]" />
          Contact Us
        </span>
        {/* Color fill from bottom-left corner */}
        <span className="absolute inset-0 bg-[#d9ae4a] transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
      </button>
    </div>
  );
};

export default Button;
