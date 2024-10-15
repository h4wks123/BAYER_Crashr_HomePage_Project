import ArrowUpRight from "../../../Assets/Icons/LearnMore.png";
import StakeAndReceiveSADA from "../../../Assets/Icons/StakeAndReceiveSADA.png";
import FAQMinus from "../../../Assets/Icons/FAQMinus.png";
import FAQPlus from "../../../Assets/Icons/FAQPlus.png";
import HomeSeparatorFAQ from "../../Common/SeparatorFAQ/HomeSeparatorFAQ";

function SecondBackground() {
  return (
    <section className="relative h-auto w-full flex flex-col justify-center items-center">
      <div className="max-w-[1280px] w-full h-full flex flex-col items-center md:flex-row md:justify-center">
        <div className="w-full h-full flex flex-col items-center lg:justify-between lg:flex-row lg:mt-32 lg:gap-8 lg:w-[65%]">
          <article className="flex flex-col items-start mt-28 w-[85%] h-auto md:w-[42%] lg:mt-0 ">
            <h3 className="text-4xl font-semibold">How It Works</h3>
            <p className="text-base text-[#6F6969] font-normal mt-12 break-words leading-2 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque iaculis fringilla ligula, id finibus tortor. Ut in
              neque a lectus venenatis molestie. Suspendisse ullamcorper sapien
              turpis, ac dapibus mi maximus nec.
            </p>
            <div className="h-8 w-auto flex items-center mt-12">
              <h6 className="text-sm font-bold color-black tracking-[0.05rem] pr-3">
                LEARN MORE
              </h6>
              <img
                src={ArrowUpRight}
                alt="aegis-nav-bar-logo"
                className="w-auto h-full object-contain"
              />
            </div>
          </article>

          <ul className="relative flex bg-red h-auto w-[65%] mt-16 sm:w-[43%] lg:mt-0 lg:h-[450px]">
            <li className="absolute h-full w-full transform rotate-6 translate-x-[1.3rem] bg-gradient-to-br from-[#3C92F9] from-0% to-[#0F3CAE] to-100% opacity-60 rounded-xl" />
            <li className="absolute h-full w-full transform -rotate-2 -translate-x-[1rem] bg-gradient-to-br from-[#3C92F9] from-0% to-[#0F3CAE] to-100% opacity-60 rounded-xl" />
            <li className="relative h-full w-full bg-gradient-to-br from-[#3C92F9] from-0% to-[#0F3CAE] to-100% rounded-xl">
              <img
                src={StakeAndReceiveSADA}
                className="h-36 w-auto max-h-full px-4 pt-8 md:text-base sm:px-8"
              />
              <h3 className="text-white text-xl font-bold px-4 pt-4 sm:px-8 lg:text-2xl lg:font-semibold">
                Stake Your ADA <br />
                and Receive sADA
              </h3>
              <p className="text-white text-xs font-light px-4 pt-4 pb-28 leading-5 sm:px-8 lg:text-base">
                When you stake your ADA through AEGIS, you'll receive SADA
                (shielded ADA) tokens in return.
              </p>
              <ul className="absolute w-full inset-x-0 bottom-8 flex gap-2 px-4 sm:px-8">
                <li className="bg-white h-1 w-[23%] rounded-lg md:h-[0.35rem]" />
                <li className="bg-[#2379E0] h-1 w-[8%] rounded-lg md:h-[0.35rem]" />
                <li className="bg-[#2379E0] h-1 w-[8%] rounded-lg md:h-[0.35rem]" />
                <li className="bg-[#2379E0] h-1 w-[8%] rounded-lg md:h-[0.35rem]" />
                <li className="bg-[#2379E0] h-1 w-[8%] rounded-lg md:h-[0.35rem]" />
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] w-full h-full flex justify-center mt-28">
        <article className="relative w-[85%] max-w-[1280px] h-auto shadow-[0_-2px_16px_0_rgba(0,0,0,0.15)] bg-[#F9F9F9] flex flex-col items-center md:w-[65%]">
          <h1 className="mt-8 text-4xl font-semibold shadow-[0_-38px_16px_0_rgba(249,249,249,1)] px-16">
            FAQs
          </h1>
          <div className="mt-12 h-auto w-[85%] flex justify-between items-center">
            <HomeSeparatorFAQ title={"What is sADA?"} url={FAQMinus} />
          </div>
          <p className="w-[85%] py-8 border-b-[rgba(145,145,145,0.15)] border-b-[0.1rem] text-base text-[#6F6969] font-normal break-words leading-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque iaculis fringilla ligula, id finibus tortor. Ut in
            neque a lectus venenatis molestie. Suspendisse ullamcorper sapien
            turpis, ac dapibus mi maximus nec.
          </p>
          <div className="w-[85%] mt-4 pb-4 h-auto border-b-[rgba(145,145,145,0.15)] border-b-[0.1rem] flex justify-between items-center">
            <HomeSeparatorFAQ
              title={"How does automated staking works?"}
              url={FAQPlus}
            />
          </div>
          <div className="w-[85%] mt-8 pb-20 h-auto flex justify-between items-center">
            <HomeSeparatorFAQ
              title={"How does AEGIS improve the Cardano network?"}
              url={FAQPlus}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default SecondBackground;
