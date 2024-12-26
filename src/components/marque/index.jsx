import textSlide from "@/assets/text-slide.png";

const Marque = () => {
  return (
    <div className="flex pb-20">
      <div className="flex overflow-hidden gap-[20px]">
        <div className="uppercase text-[60px] lg:text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="italic">creative portfolio</div>
          <div className="flex w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
            <img src="@/assets/text-slide.png" />
          </div>
          <div className="text-stroke">creative portfolio</div>
          <div className="italic">creative portfolio</div>
          <div className="flex w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
          <div className="text-stroke">creative portfolio</div>
        </div>
        <div className="uppercase text-[60px] lg:text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="italic">creative portfolio</div>
          <div className="flex w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
          <div className="text-stroke">creative portfolio</div>
          <div className="italic">creative portfolio</div>
          <div className="flex w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
            <img src="@/assets/text-slide.png" />
          </div>
          <div className="text-stroke">creative portfolio</div>
        </div>
      </div>
    </div>
  );
};

export default Marque;
