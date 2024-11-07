import BrightnessIcon from "@assets/icons/AegisBrightnessMode.png";

import FirstBackground from "@components/templates/FirstBackground";
import SecondBackground from "@components/templates/SecondBackground";
import ThirdBackground from "@components/templates/ThirdBackground";
import FourthBackground from "@components/templates/FourthBackground";
import FifthBackground from "@components/templates/FifthBackground";
import Footer from "@components/layout/Footer";

function AegisHome() {
  return (
    <>
      <img
        src={BrightnessIcon}
        className="fixed w-24 h-24 z-10 bottom-[10vh] right-[20vw]"
      />
      <FirstBackground />
      <SecondBackground />
      <ThirdBackground />
      <FourthBackground />
      <FifthBackground />
      <Footer />
    </>
  );
}

export default AegisHome;
