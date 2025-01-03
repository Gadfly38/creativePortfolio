import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import studyGrid1 from "@/assets/study-grid1.png";
import studyGrid2 from "@/assets/study-grid2.png";
import { motion } from "framer-motion";

const CaseStudySection = () => {
  return (
    <div className="flex pb-[130px]">
      <div className="flex w-[540px] lg:w-[1320px] mr-auto ml-auto">
        <div className="flex w-full flex-col lg:flex-row">
          <div className=" flex w-full lg:w-1/2 flex-col px-2">
            <div className="flex border-b flex-col">
              <div className="flex pb-3 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  src={studyGrid1}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
                    <p className="text-[16px] ">Creative</p>
                    <ArrowOutwardOutlinedIcon />
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <p className="text-white text-[24px]">
                    A Simple Socila Media Marketing Checklist
                  </p>
                  <ArrowOutwardOutlinedIcon className="text-[#e3ff04]" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-full lg:w-1/2 flex-col px-2">
            <div className="flex border-b flex-col">
              <div className="flex pb-3 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  src={studyGrid2}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border w-auto cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
                    <p className="text-[16px] ">Creative</p>
                    <ArrowOutwardOutlinedIcon />
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <p className="text-white text-[24px]">
                    A Simple Socila Media Marketing Checklist
                  </p>
                  <ArrowOutwardOutlinedIcon className="text-[#e3ff04]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudySection;
