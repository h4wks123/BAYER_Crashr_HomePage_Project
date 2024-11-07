/*-----ASSETS-----*/
import AegisFirstBackground from "@assets/backgrounds/aegisbackground.png";
import AegisFirstBackgroundCurve from "@assets/backgrounds/aegisfirstbackgroundcurve.svg";

/*-----COMPONENTS-----*/
import NavBar from "@components/layout/Header";
import { StartStakingNowBtn } from "@components/common/Button";

function FirstBackground() {
  return (
    <>
      <section className="relative bg-[#001e66] h-screen xxl:h-auto">
        <NavBar />
        <article className="relative z-20 max-w-[1280px] mx-auto px-[min(7.5vw,96px)] text-center h-[85vh] pt-[10vh] md:pt-[15vh] xl:pt-[25vh] xxl:h-auto xxl:pt-0">
          <h1 className="font-semibold text-white text-4xl xl:text-6xl">
            Protecting Value, <br />
            Maximizing Rewards
          </h1>
          <p className="text-base font-light text-white my-[5vh] md:text-lg xxl:my-10">
            Join AEGIS and safeguard your assets with <br />
            secure, Cardano-powered staking solutions.
          </p>
          <StartStakingNowBtn />
        </article>
        <div
          style={{ backgroundImage: `url(${AegisFirstBackground})` }}
          className="absolute z-10 top-0 left-1/2 -translate-x-1/2 h-full w-full mt-32 max-w-[1280px] opacity-20 bg-no-repeat bg-[position:center_45%] bg-contain mix-blend-screen xxl:mt-4 xxl:h-[calc(100%+5vh)]"
        />
      </section>
      <div
        style={{ backgroundImage: `url(${AegisFirstBackgroundCurve})` }}
        className="relative w-screen bg-[size:100%_100%] bg-center bg-no-repeat h-[45vh] xxl:h-[7vh]"
      />
    </>
  );
}

export default FirstBackground;
