import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import tversion from "@/assets/t-version01.png";
import vector1 from "@/assets/vector01.png";

const TestimonialSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[1394px]">
        <div className="flex w-full relative overflow-hidden">
          <div
            className="flex transition-all duration-0 transform"
            style={{
              transform: "translate3d(0px, 0px, 0px)", // Apply the custom translate3d with inline styles
            }}
          >
            <div className="flex w-[1187px] mr-[30px] flex-row">
              <div className="flex w-full">
                <img src={tversion} />
              </div>
              <div className="flex w-full">
                <img src={vector1} />
              </div>
              <div className="flex flex-col">
                <div className="flex mb-4">
                  <FormatQuoteIcon className="text-[#e3ff04] text-[36px]" />
                </div>
                <div className="flex text-white text-[24px]">
                  Posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet,
                  facilisis velit. Nulla ornare convallis malesuada. Phasellus
                  molestie, ipsum ac fringilla.
                </div>
                <div className="flex flex-col pt-6">
                  <p className="pb-2 text-[20px] text-white">Daniel Smith</p>
                  <p className="text-[16px] text-[#e3ff04]">Senior Engineer</p>
                </div>
              </div>
            </div>
            {/* <div className="flex w-[1187px] mr-[30px] flex-row">
              <div className="flex">
                <img src={tversion} />
              </div>
              <div className="flex">
                <img src={vector1} />
              </div>
              <div className="flex flex-col">
                <div className="flex mb-4">
                  <FormatQuoteIcon className="text-[#e3ff04] text-[36px]" />
                </div>
                <div className="flex text-white text-[24px]">
                  Posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet,
                  facilisis velit. Nulla ornare convallis malesuada. Phasellus
                  molestie, ipsum ac fringilla.
                </div>
                <div className="flex flex-col">
                  <p className="pb-2 text-[20px]">Daniel Smith</p>
                  <p className="text-[16px] text-[#e3ff04]">Senior Engineer</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
