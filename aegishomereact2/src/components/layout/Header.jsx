import AegisLogo from "@assets/logo/aegis.png";
import { OpenAppBtn } from "@components/common/Button";

function NavBar() {
  return (
    <div className="relative z-20 max-w-[1280px] w-full h-[15vh] py-[5vh] flex justify-between mx-auto px-[min(7.5vw,96px)] xxl:h-auto xxl:py-16">
      <img src={AegisLogo} />
      <div className="hidden text-white gap-12 items-center md:flex">
        <span className="relative text-base font-medium after:content-[''] after:absolute after:w-0 after:h-[0.1rem] after:bg-gradient-to-br after:from-[#79FAF3] after:via-[#3C92F9] after:to-[#0F3CAE] after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-[calc(100%+3rem)]">
          HOME
        </span>
        <h6 className="relative text-base font-medium after:content-[''] after:absolute after:w-0 after:h-[0.1rem] after:bg-gradient-to-br after:from-[#79FAF3] after:via-[#3C92F9] after:to-[#0F3CAE] after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-[calc(100%+3rem)]">
          HOW IT WORKS
        </h6>
        <h6 className="relative text-base font-medium after:content-[''] after:absolute after:w-0 after:h-[0.1rem] after:bg-gradient-to-br after:from-[#79FAF3] after:via-[#3C92F9] after:to-[#0F3CAE] after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-[calc(100%+3rem)]">
          ABOUT US
        </h6>
      </div>
      <OpenAppBtn color="bg-[#001e66]" />
    </div>
  );
}

export default NavBar;
