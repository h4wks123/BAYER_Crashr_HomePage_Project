function HomeSeparatorFAQ({ title, url }) {
  return (
    <>
      <h3 className="text-xl font-bold color-black tracking-[0.05rem] pr-3">
        {title}
      </h3>
      <img src={url} className="w-auto h-auto max-h-8 object-contain" />
    </>
  );
}

export default HomeSeparatorFAQ;
