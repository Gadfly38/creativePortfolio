import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import team4 from "@/assets/team4.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Card from "../card";

const TeamSection = () => {
  return (
    <div className="flex py-[130px] ">
      <div className="w-[1320px] flex mx-auto flex-col">
        <div className="flex mb-14 flex-row justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div className="flex px-4 py-2 rounded-3xl text-[#e3ff04] border-[#454750] border w-auto">
                <p className="uppercase text-[20px] font-semibold">
                  our experts{" "}
                </p>
              </div>
            </div>
            <div className="flex text-white text-[55px] font-semibold">
              Meet Our{" "}
              <span className="italic font-normal"> &nbsp;Creative</span>
              &nbsp;Staff
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex px-4 py-2 rounded-3xl text-white border-[#454750] border cursor-pointer hover:text-[#e3ff04] hover:border-[#e3ff04]">
              <p className="uppercase text-[16px] ">View All Service </p>
              <ArrowOutwardOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 flex-col lg:flex-row">
          <div className="flex  px-2 lg:pb-7 overflow-hidden">
            <Card img={team2} />
          </div>
          <div className="flex  px-2 lg:pt-7 overflow-hidden">
            <Card img={team3} />
          </div>
          <div className="flex px-2 lg:pb-7 overflow-hidden">
            <Card img={team4} />
          </div>
          <div className="flex  px-2 lg:pt-7 overflow-hidden">
            <Card img={team1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
