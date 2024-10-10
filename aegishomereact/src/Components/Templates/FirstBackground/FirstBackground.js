import React from "react";

import NavBar from "../../Layout/Header/NavBar";
import Text from "./Text";
import Cards from "./Cards";

function FirstBackground() {
  return (
    <div className="relative h-auto min-w-max bg-gradient-to-br from-custom-light-blue via-custom-blue to-custom-dark-blue">
      <div className="relative h-auto min-w-max bg-custom-dark-blue bg-blend-hard-light">
        <div
          className="relative h-auto min-w-max bg-no-repeat bg-top bg-cover bg-fixed flex justify-center"
          style={{ backgroundImage: "url('/Assets/Backgrounds/Aegis.png')" }}
        >
          <div className="w-4/5 h-auto max-w-[1200px] flex flex-col items-center">
            <NavBar />
            <Text />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBackground;
