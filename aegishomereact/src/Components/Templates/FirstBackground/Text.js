import React from "react";

function Text() {
  return (
    <div className="w-full h-auto flex flex-col gap-20 justify-between items-center mt-16">
      <h1 className="text-white font-semibold text-center text-2xl xl:text-6xl md:text-4xl">
        Protecting Value,
        <br /> Maximizing Rewards
      </h1>
      <p className="text-white text-center ">
        Join AEGIS and safeguard your assets with secure, Cardano-powered
        staking solutions.
      </p>
      <button className="rounded-lg p-2 border border-white text-white flex items-center justify-center">
        START STAKING NOW
      </button>
    </div>
  );
}

export default Text;
