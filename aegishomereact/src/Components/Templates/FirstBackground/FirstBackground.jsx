import AegisNavBar from "../../../Components/Layout/Header/AegisNavbar";

/* Commons */
import HomeSmallCards from "../../Common/SmallCards/HomeSmallCards";
/* Backgrounds */
import AegisBg from "../../../Assets/Backgrounds/Aegis.png";

/* Icons */
import StakingIcon from "../../../Assets/Icons/SaferStaking.png";
import AutomatedStaking from "../../../Assets/Icons/AutomatedStaking.png";
import ShieldedADA from "../../../Assets/Icons/ShieldedADA.png";
import CardanoNetworkHealth from "../../../Assets/Icons/CardanoNetworkHealth.png";
import UnlockLiquidity from "../../../Assets/Icons/UnlockLiquidity.png";

function FirstBackground() {
  return (
    <section className="relative bg-gradient-to-br from-[#79FAF3] from-0% via-[#3C92F9] via-37% to-[#0F3CAE] to-100% mix-blend-normal w-full h-auto flex justify-center">
      <li className="absolute bg-[#000F33] mix-blend-hard-light w-full h-full" />
      <li
        className="absolute top-0 min-w-full h-full bg-no-repeat bg-top bg-cover bg-fixed mix-blend-screen xl:bg-scroll xl:bg-contain xl:min-w-[70%]"
        style={{ backgroundImage: `url(${AegisBg})` }}
      />

      <div className="max-w-[1280px] w-full h-full flex flex-col justify-center items-center">
        <AegisNavBar />

        <article className="relative h-auto w-[85%] flex flex-col justify-center items-center text-center mt-8 md:mt-12 xl:h-auto xl:mt-24 2xl:mt-64">
          <h1 className="text-white font-semibold text-[3rem] leading-[3.8rem] md:text-[4.2rem]">
            Protecting Value, <br />
            Maximizing Rewards
          </h1>
          <p className="text-white font-light mt-14 text-lg leading-[1.5rem]">
            Join AEGIS and safeguard your assets with <br />
            secure, Cardano-powered staking solutions.
          </p>
          <button className="mt-14 border-[#94BFF4] border-solid border-[0.01rem] bg-white bg-opacity-[0.25rem] shadow-[0_4px_8px_0_rgba(255,255,255,0.15)] rounded-full px-8 py-4">
            <span className=" text-white text-sm font-[500] tracking-[0.1rem]">
              START STAKING NOW
            </span>
          </button>
        </article>

        <ul className="relative flex flex-col items-center mt-56 mb-32 h-auto w-[85%] text-center md:flex-row md:h-96 md:justify-between">
          <div className="w-full h-full flex flex-col items-center md:w-[32%] md:justify-between">
            <HomeSmallCards title="Safer Staking" url={StakingIcon} />
            <HomeSmallCards title="Automated Staking" url={AutomatedStaking} />
          </div>
          <li class="h-72 w-full mb-4 border-transparent rounded-xl bg-gradient-to-br from-[rgba(60,146,249,0.55)] from-0% to-[rgba(15,60,174,0.55)] to-100% flex flex-col justify-between items-center md:w-[32%] md:h-full md:mb-0">
            <h3 className="text-white text-xl mt-4 w-[75%] text-left font-semibold">
              sADA (shielded ADA)
            </h3>
            <img
              src={ShieldedADA}
              className="w-[90%] h-auto max-h-[80%] pb-8 object-contain"
            />
          </li>
          <div className="w-full h-full flex flex-col items-center  md:w-[32%] md:justify-between">
            <HomeSmallCards
              title="Cardano Network Health"
              url={CardanoNetworkHealth}
            />
            <HomeSmallCards title="Unlock Liquidity" url={UnlockLiquidity} />
          </div>
        </ul>
      </div>
    </section>
  );
}

export default FirstBackground;
