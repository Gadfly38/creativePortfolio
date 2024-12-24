import letArrow from "@/assets/let-arrow.png";

const Marque2 = () => {
  return (
    <div className="flex pb-20">
      <div className="flex overflow-hidden gap-[20px]">
        <div className="uppercase text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="italic">Let's Talk!</div>
          <div className="flex w-[90px] h-[90px]">
            <img src={letArrow} className="align-middle" />
          </div>
          <div className="text-stroke">Let's Talk!</div>
          <div className="flex w-[90px] h-[90px]">
            <img src={letArrow} className="align-middle" />
          </div>
          <div className="italic">Let's Talk!</div>
        </div>
        <div className="uppercase text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="text-stroke">Let's Talk!</div>
          <div className="flex w-[90px] h-[90px]">
            <img src={letArrow} className="align-middle" />
          </div>
          <div className="italic">Let's Talk!</div>
          <div className="flex w-[90px] h-[90px]">
            <img src={letArrow} className="align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque2;
