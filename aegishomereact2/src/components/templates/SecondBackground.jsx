/*-----ASSETS-----*/
import ArrowUpRightColored from "@assets/icons/ArrowUpRightColored.png";
import SaferStaking from "@assets/icons/SaferStaking2.png";
import AutomatedStaking from "@assets/icons/AutomatedStaking2.png";
import CardanoHealth from "@assets/icons/CardanoHealth2.png";
import LiquidityIcon from "@assets/icons/LiquidityIcon2.png";
import sADAIcon from "@assets/icons/sADAIcon2.png";

/*-----COMPONENTS-----*/
import { SecondBackgroundCards } from "@components/common/Cards";

function SecondBackground() {
  return (
    <section className="flex flex-wrap justify-center items-end mt-12 w-full max-w-[1280px] mx-auto px-[min(7.5vw,96px)] md:justify-between">
      <article className="h-80 w-[55%] md:w-[47%] lg:w-[32%]">
        <h3 className="text-4xl font-semibold text-[#323e59] md:text-5xl">
          Key Benefits
        </h3>
        <p className="mt-5 text-base text-left text-[#4d5465] md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          iaculis fringilla ligula, id finibus tortor.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs text-[#323E59] font-semibold color-[#323e59] md:text-base">
            LEARN MORE
          </span>
          <img src={ArrowUpRightColored} className="h-7 object-contain" />
        </div>
      </article>
      <SecondBackgroundCards icon={SaferStaking} title={"Safer Staking"} />
      <SecondBackgroundCards
        icon={AutomatedStaking}
        title={"Automated Staking"}
      />
      <SecondBackgroundCards
        icon={CardanoHealth}
        title={"Cardano Network Health"}
      />
      <SecondBackgroundCards icon={LiquidityIcon} title={"Unlock Liquidity"} />
      <SecondBackgroundCards icon={sADAIcon} title={"sADA (shielded ADA)"} />
    </section>
  );
}

export default SecondBackground;
