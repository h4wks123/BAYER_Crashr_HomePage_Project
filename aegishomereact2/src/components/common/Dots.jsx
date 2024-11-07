function LargeDotsRow({ year, quarter }) {
  return (
    <li className="flex flex-col gap-3 text-center">
      <span className="text-lg font-semibold md:text-2xl">{year}</span>
      <div className="relative h-8 w-8 rounded-full bg-[#0033ad] mx-auto"></div>
      <span className="text-lg font-semibold md:text-2xl">{quarter}</span>
    </li>
  );
}

function SmallDotsRow({ year, quarter, className }) {
  return (
    <li className={`flex flex-col gap-3 text-center ${className}`}>
      <span className="text-base font-light md:text-lg">{year}</span>
      <div className="relative h-4 w-4 rounded-full bg-[#d9d9d9] mx-auto"></div>
      <span className="text-base font-light md:text-lg">{quarter}</span>
    </li>
  );
}
//mx-auto after:content-[''] after:absolute after:bg-[#d9d9d9] after:w-[17vw] after:h-[0.05rem] after:top-1/2 after:-translate-y-1/2 after:left-1/2

function SmallDotsColumn({ year, quarter }) {
  return (
    <li className="flex items-center gap-4">
      <span className="text-lg font-light">{year + " | " + quarter}</span>
      <div className="relative h-4 w-4 rounded-full bg-[#d9d9d9] mr-2 mx-auto after:content[''] after:absolute after:bg-[#d9d9d9] after:w-[0.05rem] after:h-[5.4rem] after:left-1/2 after:-transform-x-1/2"></div>
    </li>
  );
}

function LargeDotsColumn({ year, quarter }) {
  return (
    <li className="flex items-center gap-4">
      <span className="text-2xl font-semibold">{year + " | " + quarter}</span>
      <div className="relative h-8 w-8 rounded-full bg-[#0033ad] mx-auto"></div>
    </li>
  );
}

export { SmallDotsRow, SmallDotsColumn, LargeDotsRow, LargeDotsColumn };
