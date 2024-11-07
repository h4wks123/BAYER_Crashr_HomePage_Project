import AegisTimeContainer from "@assets/backgrounds/aegis-fourthbackgroundtimecontainer.svg";
import AegisCheckMark from "@assets/icons/AegisCheckMark2.png";

import {
  SmallDotsRow,
  SmallDotsColumn,
  LargeDotsRow,
  LargeDotsColumn,
} from "@components/common/Dots";

function FourthBackground() {
  return (
    <section className="flex flex-col justify-between w-full max-w-[1280px] mx-auto px-[min(7.5vw,96px)] mt-16 lg:flex-row">
      <ul className="relative flex justify-between items-center w-full lg:hidden">
        <SmallDotsRow year={"2024"} quarter={"Q1"} />
        <SmallDotsRow year={"2024"} quarter={"Q2"} className="hidden sm:flex" />
        <SmallDotsRow year={"2024"} quarter={"Q3"} />
        <SmallDotsRow year={"2024"} quarter={"Q4"} className="hidden sm:flex" />
        <SmallDotsRow year={"2025"} quarter={"Q1"} />
        <LargeDotsRow year={"2025"} quarter={"Q2"} />
        <div className="absolute w-[88%] bg-[#d9d9d9] h-[0.05rem] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 sm:w-[95%]"></div>
      </ul>
      <ul className="flex-col justify-between items-end h-[27rem] hidden lg:flex">
        <SmallDotsColumn year={"2024"} quarter={"Q1"} />
        <SmallDotsColumn year={"2024"} quarter={"Q2"} />
        <SmallDotsColumn year={"2024"} quarter={"Q3"} />
        <SmallDotsColumn year={"2024"} quarter={"Q4"} />
        <SmallDotsColumn year={"2025"} quarter={"Q1"} />
        <LargeDotsColumn year={"2025"} quarter={"Q2"} />
      </ul>
      <article className="relative w-full h-[30rem] bg-[#0f3cae] rounded-2xl mx-auto mt-12 sm:w-[80%] md:h-[27rem] md:mt-0 lg:mx-0 lg:w-[45rem]">
        <div
          style={{ backgroundImage: `url(${AegisTimeContainer})` }}
          className="absolute flex flex-col items-start gap-4 h-full w-full bg-cover bg-left-bottom bg-no-repeat md:bg-[size:90%_93%] pt-16 px-8 md:gap-8 md:pt-20 md:pl-12 md:pr-20"
        >
          <img src={AegisCheckMark} className="h-10 object-contain" />
          <h3 className=" text-4xl font-semibold text-white md:text-5xl">
            Heading
          </h3>
          <span className="text-base font-light text-white md:text-lg">
            04/10/2025
          </span>
          <p className="text-base font-light text-white md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque iaculis fringilla ligula, id finibus tortor.
          </p>
        </div>
      </article>
    </section>
  );
}

export default FourthBackground;
