/*-----ASSETS-----*/
import AegisFifthBackgroundCurve from "@assets/backgrounds/aegisfifthbackground.svg";
import AegisFifthBackgroundTokenomics from "@assets/backgrounds/aegisfifthbackgroundtokenomics.svg";

/*-----COMPONENTS-----*/
import { TokenomicsText, TeamsText, FAQText } from "@components/common/Text";

function FifthBackground() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${AegisFifthBackgroundCurve})` }}
        className="relative mt-20 h-auto w-full bg-[size:100%_100%] bg-center bg-no-repeat"
      >
        <article className="w-full mx-auto max-w-[1280px] px-[min(7.5vw,96px)]">
          <div className="flex flex-wrap justify-between items-center bg-[#f9f9f9] rounded-2xl py-12 md:flex-row">
            <h3 className="w-full mb-12 text-center text-4xl font-semibold text-[#323e59] md:text-5xl">
              Tokenomics
            </h3>
            <div
              style={{
                backgroundImage: `url(${AegisFifthBackgroundTokenomics})`,
              }}
              className="flex flex-col items-center justify-center gap-3 h-[20rem] w-[90%] mx-auto bg-contain bg-center bg-no-repeat lg:h-[33rem] lg:w-[41%] lg:ml-[6%]"
            >
              <h4 className="text-1xl font-semibold text-[#323E59] md:text-2xl">
                Total Supply
              </h4>
              <h3 className="text-2xl font-semibold text-[#323E59] md:text-3xl">
                10,000,000,000
              </h3>
              <span className="text-base font-light md:text-lg">Tokens</span>
            </div>
            <ul className="w-[90%] mx-auto lg:w-[41%] lg:mx-[6%]">
              <TokenomicsText
                border="border-b-2 border-b-[#2f55b7]"
                text="text-[#0f3cae]"
              />
              <TokenomicsText
                border="border-b-2 border-b-[#2f55b7]"
                text="text-[#517ff3]"
              />
              <TokenomicsText
                border="border-b-2 border-b-[#2f55b7]"
                text="text-[#a5d0e8]"
              />
              <TokenomicsText
                border="border-b-2 border-b-[#2f55b7]"
                text="text-[#e9dc94]"
              />
              <TokenomicsText text="text-[#9747ff]" />
            </ul>
          </div>
        </article>
      </div>
      <section className="bg-[#0033AD] pb-24">
        <ul className="w-full max-w-[1280px] mx-auto flex flex-wrap justify-between items-center px-[min(7.5vw,96px)]">
          <h3 className="w-full my-24 text-center text-white text-4xl font-semibold md:text-5xl">
            Team
          </h3>
          <TeamsText />
          <TeamsText />
          <TeamsText />
          <TeamsText />
          <TeamsText />
          <TeamsText />
          <TeamsText />
          <TeamsText />
        </ul>
        <article className="w-full max-w-[1280px] mx-auto px-[min(7.5vw,96px)]">
          <div className="bg-[#F9F9F9] rounded-2xl px-[min(7.5vw,96px)] py-16">
            <h3 className="text-center text-4xl font-semibold text-[#323E59] md:text-5xl">
              FAQs
            </h3>
            <FAQText question="What is sADA?" />
            <FAQText question="How does automated staking works?" />
            <FAQText question="How does AEGIS improve the Cardano network?" />
          </div>
        </article>
      </section>
    </>
  );
}

export default FifthBackground;
