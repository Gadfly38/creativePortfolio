import textSlide from "@/assets/text-slide.png";

const Marque1 = () => {
  return (
    <div className="flex pb-20">
      <div className="flex overflow-hidden gap-[20px]">
        <div className="uppercase text-[60px] lg:text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="italic">client's testimonial</div>
          <div className="flex w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
          <div className="text-stroke">client's testimonial</div>
          <div className="flex w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
          <div className="text-stroke">client's testimonial</div>
        </div>
        <div className="uppercase text-[60px] lg:text-[100px] text-white font-semibold flex items-center whitespace-nowrap animate-scroll gap-7 cursor-pointer flex-row">
          <div className="italic">client's testimonial</div>
          <div className="flex w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
          <div className="text-stroke">client's testimonial</div>
          <div className="flex w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]">
            <img src={textSlide} className="align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque1;
