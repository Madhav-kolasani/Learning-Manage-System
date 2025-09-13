import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="pt-16 animate-fade-in">
      <p className="text-base text-gray-500 hover:text-gray-700 transition-colors duration-300 text-center">
        Trusted by learners from
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="w-20 md:w-28 hover:scale-125 hover:rotate-3 transition-all duration-300 filter hover:brightness-110 cursor-pointer"
        />
        <img
          src={assets.walmart_logo}
          alt="Walmart"
          className="w-20 md:w-28 hover:scale-125 hover:-rotate-3 transition-all duration-300 filter hover:brightness-110 cursor-pointer"
        />
        <img
          src={assets.paypal_logo}
          alt="paypal"
          className="w-20 md:w-28 hover:scale-125 hover:rotate-3 transition-all duration-300 filter hover:brightness-110 cursor-pointer"
        />
        <img
          src={assets.accenture_logo}
          alt="accenture"
          className="w-20 md:w-28 hover:scale-125 hover:-rotate-3 transition-all duration-300 filter hover:brightness-110 cursor-pointer"
        />
        <img
          src={assets.adobe_logo}
          alt="adobe"
          className="w-20 md:w-28 hover:scale-125 hover:rotate-3 transition-all duration-300 filter hover:brightness-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Companies;
