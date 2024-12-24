import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import mblog1 from "@/assets/mblog1.png";
import mblog2 from "@/assets/mblog2.png";
import mblog3 from "@/assets/mblog3.png";

const HomeBlogSection = () => {
  return (
    <div className="flex py-[130px]">
      <div className="flex w-[1320px] mx-auto flex-col ">
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-[#e3ff04] border-[#454750] border w-auto">
                <p className="uppercase text-[20px] font-semibold">
                  our experts{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="flex text-[55px] text-white">
                Check Our <span className="italic">Company</span>
              </p>
              <p className="flex text-[55px] text-white italic font-semibold block">
                Inside Story
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
              <p className="uppercase text-[16px] ">View All Service </p>
              <ArrowOutwardOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex w-1/3 px-3 flex-col">
            <div className="flex mb-4">
              <img src={mblog1} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center mb-3 gap-3">
                <div className="flex">
                  <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
                    <p className="text-[16px] ">Creative</p>
                    <ArrowOutwardOutlinedIcon />
                  </div>
                </div>
                <p className="text-white text-[16px] uppercase">
                  march 24, 2024
                </p>
              </div>
              <div className="flex">
                <p className="text-white text-[24px]">
                  Transforming Challenges Info
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 px-3 flex-col">
            <div className="flex mb-4">
              <img src={mblog2} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center mb-3 gap-3">
                <div className="flex">
                  <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
                    <p className="text-[16px] ">Creative</p>
                    <ArrowOutwardOutlinedIcon />
                  </div>
                </div>
                <p className="text-white text-[16px] uppercase">
                  march 24, 2024
                </p>
              </div>
              <div className="flex">
                <p className="text-white text-[24px]">
                  Design Inspiration Where To Find
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 px-3 flex-col">
            <div className="flex mb-4">
              <img src={mblog3} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center mb-3 gap-3">
                <div className="flex">
                  <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
                    <p className="text-[16px] ">Creative</p>
                    <ArrowOutwardOutlinedIcon />
                  </div>
                </div>
                <p className="text-white text-[16px] uppercase">
                  march 24, 2024
                </p>
              </div>
              <div className="flex">
                <p className="text-white text-[24px]">
                  Creating New Working In The Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
