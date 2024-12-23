import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import AddIcon from "@mui/icons-material/Add";

const ServiceSection = () => {
  return (
    <div className="flex w-full py-[80px] px-32 flex-col">
      <div className="flex w-full mb-12 justify-between items-center flex-row">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex px-4 py-2 rounded-3xl border-[#454750] border w-auto">
              <p className="uppercase text-[16px] text-[#e3ff04]">
                What we Offer
              </p>
            </div>
          </div>

          <div className="flex">
            <h2 className="text-white text-[55px] font-semibold">
              Most <span className="italic font-normal">Experienced</span>{" "}
              Services
            </h2>
          </div>
        </div>
        <div className="flex mb-6">
          <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
            <p className="uppercase text-[16px] ">View All Service </p>
            <ArrowOutwardOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center py-6 border-t border-[#454750]">
          <div className="flex flex-col gap-7">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto">
                <p className="uppercase text-[20px] font-semibold">01 </p>
                <SouthEastIcon className="text-[#e3ff04]" />
              </div>
            </div>

            <div>
              <p className="text-[30px] text-white">Digitalization</p>
            </div>
          </div>
          <div className="flex">
            <AddIcon className="text-[32px] text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center py-6 border-t border-[#454750]">
          <div className="flex flex-col gap-7">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto items-center">
                <p className="uppercase text-[20px] font-semibold">02 </p>
                <SouthEastIcon className="text-[#e3ff04]" />
              </div>
            </div>

            <div>
              <p className="text-[30px] text-white">Moderization</p>
            </div>
          </div>
          <div className="flex">
            <AddIcon className="text-[32px] text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center py-6 border-t border-[#454750]">
          <div className="flex flex-col gap-7">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto">
                <p className="uppercase text-[20px] font-semibold">03 </p>
                <SouthEastIcon className="text-[#e3ff04]" />
              </div>
            </div>

            <div>
              <p className="text-[30px] text-white">Accelerating Innovation</p>
            </div>
          </div>
          <div className="flex">
            <AddIcon className="text-[32px] text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center py-6 border-t border-b border-[#454750]">
          <div className="flex flex-col gap-7">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border">
                <p className="uppercase text-[20px] font-semibold">04 </p>
                <SouthEastIcon className="text-[#e3ff04]" />
              </div>
            </div>

            <div>
              <p className="text-[30px] text-white">Business consulting</p>
            </div>
          </div>
          <div className="flex">
            <AddIcon className="text-[32px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
