function HomeSmallCards({ title, url }) {
  return (
    <li class="h-56 w-full mb-4 border-white border-[0.1rem] bg-white bg-opacity-5 border-opacity-25 rounded-xl flex flex-col justify-between items-center md:h-[48%] md:mb-0">
      <h3 className="text-white text-xl mt-4 w-[75%] text-left font-semibold">
        {title}
      </h3>
      <img
        src={url}
        className="w-[90%] h-auto max-h-[65%] object-contain"
      />
    </li>
  );
}

export default HomeSmallCards;
