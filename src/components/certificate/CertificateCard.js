import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

const CertificateCard = ({ title, src,certificatelink }) => {
  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
    hover:from-gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300
            cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                justify-center items-center text-gray-400 hover:text-designColor duration-500
                cursor-pointer"
            >
              <a target='_blank' href={certificatelink}><FaFreeCodeCamp /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
