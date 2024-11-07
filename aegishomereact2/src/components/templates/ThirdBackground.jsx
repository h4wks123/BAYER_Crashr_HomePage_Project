/*-----ASSETS-----*/
import AegisFirstBackgroundTopCurve from "@assets/backgrounds/aegisthirdbackgroundtopcurve.svg";
import AegisFirstBackgroundBottomCurve from "@assets/backgrounds/aegisthirdbackgroundbottomcurve.svg";
import ArrowUpRightColored from "@assets/icons/ArrowUpRightColored.png";
import SadaIcon from "@assets/icons/sADAIconLarge2.png";

/*-----COMPONENTS-----*/
import { ThirdBackgroundCards } from "@components/common/Cards";

function ThirdBackground() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${AegisFirstBackgroundTopCurve})` }}
        className="relative mt-12  w-screen bg-[size:100%_100%] bg-center bg-no-repeat h-[45vh] xxl:h-[10vh]"
      ></div>
      <section className="bg-[#000f33] pt-16 py-24">
        <div className="whitespace-nowrap w-full max-w-[1280px] mx-auto px-[min(7.5vw,96px)]">
          <article className="align-top w-80 whitespace-normal mx-auto sm:mx-0 sm:mr-12 sm:inline-block">
            <h3 className="whitespace-break-spaces text-4xl text-white font-semibold md:pr-[40%]  md:text-5xl">
              How It Works
            </h3>
            <p className="whitespace-break-spaces text-base font-light text-white mt-12 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque iaculis fringilla ligula, id finibus tortor.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs font-semibold text-white">
                LEARN MORE
              </span>
              <img src={ArrowUpRightColored} className="h-7 object-contain" />
            </div>
          </article>
          <div className="relative whitespace-normal inline-block w-full align-middle h-[35rem] rounded-2xl bg-white mr-12 mt-12 pt-8 px-8 sm:w-[25rem] sm:mt-0">
            <img src={SadaIcon} className="h-32 object-contain" />
            <h6 className="text-2xl text-[#323e59] font-semibold mt-8 md:text-3xl">
              Stake Your ADA <br />
              and Receive sADA
            </h6>
            <p className="text-base text-[#323e59] mt-8 md:text-lg">
              When you stake your ADA through AEGIS, you'll receive SADA
              (shielded ADA) tokens in return.
            </p>
            <ul className="absolute -bottom-16 flex items-center gap-8 left-1/2 -translate-x-1/2">
              <li className="bg-white h-8 w-8 rounded-full"></li>
              <li className="bg-[#495B83] h-5 w-5 rounded-full"></li>
              <li className="bg-[#495B83] h-5 w-5 rounded-full"></li>
              <li className="bg-[#495B83] h-5 w-5 rounded-full"></li>
              <li className="bg-[#495B83] h-5 w-5 rounded-full"></li>
            </ul>
          </div>
          <ThirdBackgroundCards />
          <ThirdBackgroundCards />
          <ThirdBackgroundCards />
          <ThirdBackgroundCards />
          <ThirdBackgroundCards />
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${AegisFirstBackgroundBottomCurve})` }}
        className="relative w-screen bg-[size:100%_100%] bg-center bg-no-repeat h-[45vh] xxl:h-[calc(10vh+8rem)]"
      >
        <article className="relative w-[80vw] left-1/2 -translate-x-1/2 text-center top-24 md:top-1/2 md:-translate-y-1/2">
          <h3 className="text-4xl text-[#323e59] font-semibold md:text-5xl">
            Roadmap
          </h3>
          <p className="text-base font-light text-[#323e59] mt-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Pellentesque iaculis fringilla ligula, id finibus tortor.
          </p>
        </article>
      </div>
    </>
  );
}

export default ThirdBackground;
