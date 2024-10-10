import React from "react";

function NavBar() {
  return (
    <div class="relative w-full h-auto flex gap-4 justify-between items-center mt-8">
      <img
        src="/Assets/Logo/Aegis.png"
        alt="logo"
        class="max-w-full max-h-full"
      />
      <div class="relative w-auto h-auto flex gap-4 xl:gap-8">
        <h3 class="m-0 text-white">HOME</h3>
        <h3 class="m-0 text-white">HOW IT WORKS</h3>
        <h3 class="m-0 text-white">ABOUT</h3>
      </div>
      <button class="rounded-lg p-2 border border-white text-white flex items-center justify-center">
        <h3 class="m-0 text-white">OPEN APP</h3>
      </button>
    </div>
  );
}

export default NavBar;
