function OpenAppBtn({ color }) {
  return (
    <div className="p-[2px] rounded-[50px] bg-gradient-to-br from-[#79FAF3] via-[#3C92F9] to-transparent">
      <button
        className={`w-full h-full rounded-[50px] ${color} px-8 text-base font-medium py-2`}
      >
        <span className="text-white text-base font-medium">OPEN APP</span>
      </button>
    </div>
  );
}

function StartStakingNowBtn() {
  return (
    <div className="w-64 mx-auto p-[2px] rounded-[50px] bg-gradient-to-br from-[#79FAF3] via-[#3C92F9] to-transparent">
      <button className="w-full h-full rounded-[50px] bg-white px-8 py-2 text-base font-medium">
        <span className="text-[#000F33] text-base font-medium">
          START STAKING NOW
        </span>
      </button>
    </div>
  );
}

export { OpenAppBtn, StartStakingNowBtn };
