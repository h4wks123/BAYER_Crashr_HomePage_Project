import React from "react";
import { useState } from "react";

/*-----ASSETS-----*/
import XLogo from "@assets/icons/X2.png";
import FAQPlus from "@assets/icons/FAQPlus.png";
import FAQMinus from "@assets/icons/FAQMinusDark.png";

function TokenomicsText({ text, border }) {
  return (
    <li
      className={`grid grid-cols-5 gap-y-4 pt-4 pb-4 ${border} lg:grid-cols-12`}
    >
      <h6
        className={`text-base col-span-1 font-bold ${text} md:text-xl lg:col-span-2`}
      >
        10%
      </h6>
      <h6 className="text-base col-span-2 text-[#323E59] font-bold md:text-xl lg:col-span-8 ">
        Team
      </h6>
      <p className="text-sm col-span-2 font-light md:text-base lg:col-span-2">
        Tokens
      </p>
      <p className="text-sm col-span-3 font-light md:text-base lg:col-span-10">
        Lorem ipsum dolor sit amet.
      </p>
      <span className="text-sm col-span-2 font-light md:text-base lg:col-span-2">
        10,000,000
      </span>
    </li>
  );
}

function TeamsText() {
  return (
    <li className="w-full flex flex-col items-center gap-4 md:w-1/2 lg:w-1/4 mb-24">
      <div className="h-28 w-28 bg-white rounded-full"></div>
      <h6 className="text-white text-2xl font-medium">Name Lastname</h6>
      <span className="text-white font-extralight">Job Title</span>
      <img src={XLogo} />
    </li>
  );
}

function FAQText({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-8 border-b border-gray-300">
      <div className="flex items-center justify-between mb-4">
        <h6 className="text-xl font-semibold md:text-2xl text-[#323E59]">
          {question}
        </h6>
        <button
          onClick={toggleFAQ}
          className="h-8 w-8 object-contain flex-shrink-0"
        >
          <img src={isOpen ? FAQMinus : FAQPlus} className="h-full w-full" />
        </button>
      </div>
      <p
        className={`text-base font-light overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] py-4" : "max-h-0 py-0"
        } md:text-lg`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        iaculis fringilla ligula, id finibus tortor. Ut in neque a lectus
        venenatis molestie. Suspendisse ullamcorper sapien turpis, ac dapibus mi
        maximus nec.
      </p>
    </div>
  );
}

export { TokenomicsText, TeamsText, FAQText };
