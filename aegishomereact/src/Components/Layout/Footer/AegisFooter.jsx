import FooterBlur from "../../../Assets/Backgrounds/FooterBlur.png";
import Logo from "../../../Assets/Logo/Aegis.png";
import FacebookIcon from "../../../Assets/Icons/Facebook.png";
import XIcon from "../../../Assets/Icons/X.png";
import DiscordIcon from "../../../Assets/Icons/Discord.png";
import ArrowRightIcon from "../../../Assets/Icons/ArrowUpRight.png";

function AegisFooter() {
  return (
    <footer className="relative mt-32 h-auto w-full bg-[#000F33] flex flex-col items-center">
      <div
        className="absolute top-0 min-w-full h-full bg-no-repeat bg-top bg-cover bg-fixed mix-blend-screen xl:bg-scroll xl:bg-contain"
        style={{ backgroundImage: `url(${FooterBlur})` }}
      />
      <div className="max-w-[1280px] w-full h-full">
        <article className="w-[85%] mx-auto mt-16 mb-4 flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col md:mr-[10%]">
            <img src={Logo} />
            <ul className="flex justify-evenly mt-4">
              <img src={FacebookIcon} />
              <img src={XIcon} />
              <img src={DiscordIcon} />
            </ul>
          </div>
          <ul className="text-white flex flex-col items-center mt-6 md:mt-4 md:text-left md:mr-[10%] md:items-start">
            <li>
              <h5 className="text-base font-semibold tracking-[0.05rem]">
                PRODUCT
              </h5>
            </li>
            <li className="flex items-center mt-3">
              <h6 className="text-sm font-normal tracking-[0.05rem] mr-1">
                Features
              </h6>
              <img
                src={ArrowRightIcon}
                className="w-auto h-full object-contain"
              />
            </li>
            <li className="flex items-center mt-3">
              <h6 className="text-sm font-normal tracking-[0.05rem] mr-1">
                How It Works
              </h6>
              <img
                src={ArrowRightIcon}
                className="w-auto h-full object-contain"
              />
            </li>
          </ul>
          <ul className="text-white flex flex-col items-center mt-6 md:mt-4 md:items-start">
            <h5 className="text-base font-semibold tracking-[0.05rem]">
              COMPANY
            </h5>
            <li className="flex items-center mt-3">
              <h6 className="text-sm font-normal tracking-[0.05rem] mr-1">
                About Us
              </h6>
              <img
                src={ArrowRightIcon}
                className="w-auto h-full object-contain"
              />
            </li>
          </ul>
          <button className="rounded-full px-4 py-2 bg-gradient-to-br from-[#79FAF3] from-0% via-[#3C92F9] via-37% to-[#0F3CAE] to-100% shadow-[0_4px_8px_0_rgba(255,255,255,0.15)] mt-8 md:mt-0 md:ml-auto">
            <span className="text-white text-sm font-normal tracking-[0.05rem] mr-1">
              OPEN APP
            </span>
          </button>
        </article>
      </div>
      <article className="w-full mt-12 py-8 border-t-[rgba(145,145,145,0.15)] border-t-[0.1rem] flex justify-center">
        <div className="max-w-[1280px] w-full h-full flex justify-center">
          <ul className="w-[85%] flex">
            <li>
              <h6 className="text-sm font-normal text-[#757C8C]">
                AEGIS 2024.
              </h6>
            </li>
            <li className="ml-auto mr-8">
              <h6 className="text-sm font-normal text-[#757C8C]">
                Terms & Conditions
              </h6>
            </li>
            <li>
              <h6 className="text-sm font-normal text-[#757C8C]">
                Privacy Policy
              </h6>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
}

export default AegisFooter;