import React from "react";

import Logo from "../../../Assets/Logo/Aegis.png";
import Burger from "../../../Assets/Icons/Menu.svg";

function AegisNavBar() {
  return (
    <header className="relative w-[85%] h-auto vh-10 mt-12 xl:h-auto">
      <nav className="flex justify-between items-center">
        <img src={Logo} className="max-h-12 h-auto w-auto" alt="aegisLogo" />
        <ul className="hidden gap-4 tracking-[0.1rem] text-white text-sm font-normal md:flex lg:gap-12">
          <li>
            <h6>HOME</h6>
          </li>
          <li>
            <h6>HOW IT WORKS</h6>
          </li>
          <li>
            <h6>ABOUT US</h6>
          </li>
        </ul>
        <img src={Burger} className="max-h-12 h-auto w-auto md:hidden" />
        <div className="hidden rounded-full bg-gradient-to-br from-[#79FAF3] from-0% via-[#3C92F9] via-37% to-[#0F3CAE] to-100% p-[0.05rem] shadow-lg md:flex">
          <button className="tracking-[0.1rem] text-white font-normal text-sm bg-[#001162] px-4 py-2 rounded-full">
            <h6>OPEN APP</h6>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default AegisNavBar;
