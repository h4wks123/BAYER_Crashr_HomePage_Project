import CircleLogo from "@assets/icons/CircleLogo.png";

function SecondBackgroundCards({ icon, title }) {
  return (
    <div className="h-60 w-[70%] bg-[#f9f9f9] rounded-lg mt-6 pt-6 px-6 md:w-[47%] lg:w-[32%]">
      <img src={icon} className="h-9 object-contain" />
      <h6 className="mt-4 text-lg font-semibold text-[#323e59]">{title}</h6>
      <p className="mt-4 text-base text-[#4d5465]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

function ThirdBackgroundCards() {
  return (
    <div className="inline-block align-middle h-96 w-80 mr-12 bg-white rounded-2xl p-4 opacity-40">
      <img src={CircleLogo} className="h-20 object-contain" />
      <h6 className="whitespace-normal mt-4 text-2xl text-[#323e59] font-semibold">
        Unlock Liquidity <br /> with SADA
      </h6>
      <p className="whitespace-normal mt-4 text-sm text-[#323e59] leading-5">
        Unlike traditional staking, AEGIS allows you to unlock liquidity with
        your SADA tokens. Even while your original ADA remains staked and
        earning rewards, you can use sADA to trade, provide liquidity, or
        participate in Dex without sacrificing your staking rewards.
      </p>
    </div>
  );
}

export { SecondBackgroundCards, ThirdBackgroundCards };
