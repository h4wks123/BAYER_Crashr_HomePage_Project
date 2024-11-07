/*-----ASSETS-----*/
import AegisLogo from "@assets/logo/aegis.png";
import FacebookLogo from "@assets/icons/Facebook.png";
import XLogo from "@assets/icons/X.png";
import DiscordLogo from "@assets/icons/Discord.png";
import ArrowTopRight from "@assets/icons/ArrowUpRight.png";

import { OpenAppBtn } from "@components/common/Button";

function Footer() {
  return (
    <footer className="bg-[#000f33]">
      <article className="w-full max-w-[1280px] mx-auto flex flex-wrap justify-center gap-12 py-12 px-[min(7.5vw,96px)] md:justify-between md:items-start">
        <div className="w-[60%] flex flex-col items-center gap-4 md:w-1/5">
          <img src={AegisLogo} className="w-52 object-contain" />
          <div className="flex gap-3">
            <img src={FacebookLogo} className="" />
            <img src={XLogo} className="" />
            <img src={DiscordLogo} className="" />
          </div>
        </div>
        <ul className="w-[40%] text-left pl-[5%] text-white flex flex-col gap-2 md:w-1/5">
          <h6 className="text-lg font-medium md:text-xl">PRODUCT</h6>
          <li className="flex gap-2 items-center">
            <span className="text-base font-light md:text-lg">Features</span>
            <img src={ArrowTopRight} className="object-contain" />
          </li>
          <li className="flex gap-2 items-center">
            <span className="text-base font-light md:text-lg">
              How It Works
            </span>
            <img src={ArrowTopRight} className="object-contain" />
          </li>
        </ul>
        <ul className="w-[40%] text-left pl-[5%] text-white flex flex-col gap-2 md:flex-1 md:w-1/5">
          <h6 className="text-lg font-medium md:text-xl">COMPANY</h6>
          <li className="flex gap-2 items-center">
            <span className="text-base font-light md:text-lg">About Us</span>
            <img src={ArrowTopRight} className="object-contain" />
          </li>
        </ul>
        <OpenAppBtn color="bg-[#000F33]" />
      </article>
      <div className="border-t-[1px] border-t-white border-opacity-30" />
      <article className="w-full max-w-[1280px] mx-auto px-[min(7.5vw,96px)] flex justify-between gap-12 py-12">
        <span className="text-[#757C8C] text-sm md:text-base">AEGIS, 2024</span>
        <span className="flex-1 text-[#757C8C] text-right text-sm md:text-base">
          Terms & Conditions
        </span>
        <span className="text-[#757C8C] text-sm md:text-base">
          Privacy Policy
        </span>
      </article>
    </footer>
  );
}

export default Footer;
