import AboutThumb from "@/assets/about-v1thumb.png";

const AboutSection = () => {
  return (
    <div className="pt-[130px] flex w-full justify-center">
      <div className="flex flex-col lg:flex-row w-full justify-between px-32">
        <div className="flex w-1/2 pr-3">
          <img src={AboutThumb} />
        </div>
        <div className="flex w-full lg:w-1/2 flex-col pl-3">
          <div className="flex">
            <div className="flex px-4 py-2 rounded-3xl border-[#454750] border">
              <p className="uppercase text-[16px] text-[#e3ff04]">
                we proud that
              </p>
            </div>
          </div>

          <div className="flex">
            <h2 className="text-white text-[55px]">
              Discover{" "}
              <span className="text-[#e3ff04] italic">
                Our <br />
                Awards
              </span>
            </h2>
          </div>
          <div className="flex">
            <p className="text-white text-[16px]">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation on the runway heading towards a
              streamlined
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between">
              <p className="text-[20px] text-[#e3ff04]">2019</p>
              <p className="text-[20px] text-[#e3ff04]">2021</p>
              <p className="text-[20px] text-[#e3ff04]">2023</p>
            </div>
            <div className="flex flex-row justify-between border-[#e3ff04] border-t pt-[24px]">
              <div className="flex flex-col before:bottom-[-24px] before:custom-clip-path">
                <p className="text-[20px] text-white mb-5">Awwwards</p>
                <p className="text-[16px] text-[#757575]">Website of the day</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] text-white mb-5">Awwwards</p>
                <p className="text-[16px] text-[#757575]">
                  National design contest
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[20px] text-white mb-5">Awwwards</p>
                <p className="text-[16px] text-[#757575]">Apps of the day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
