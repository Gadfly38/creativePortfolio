import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import tversion from "@/assets/t-version01.png";
import vector1 from "@/assets/vector01.png";

const TestimonialSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[800px] lg:w-[1394px]">
        <CarouselProvider
          // naturalSlideWidth={1394}
          // naturalSlideHeight={400}
          totalSlides={2}
          className="!w-full"
          isPlaying={true}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <div className="flex w-[800px] h-[600px] mr-[30px] flex-col lg:flex-row items-center">
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
                    <p className="text-[16px] text-[#e3ff04]">
                      Senior Engineer
                    </p>
                  </div>
                </div>
              </div>{" "}
            </Slide>
            <Slide index={1}>
              <div className="flex  w-[800px] h-[600px] mr-[30px] flex-col lg:flex-row items-center">
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
                    <p className="text-[16px] text-[#e3ff04]">
                      Senior Engineer
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default TestimonialSection;
