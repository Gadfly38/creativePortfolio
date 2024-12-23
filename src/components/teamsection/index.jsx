import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import team2 from "@/assets/team2.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

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
        <div className="flex flex-row">
          <div className="flex w-1/4 px-2 pb-7 overflow-hidden">
            <div
              className="flex rounded-sm transform perspective-[500px] scale-x-100"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg) rotateY(0deg)", // Custom transform styles
              }}
            >
              <div className="flex flex-col relativer">
                <div className="flex relative">
                  <img src={team2} />
                  <ul className="absolute bottom-0 left-[-100%] transition-left duration-500">
                    <FacebookOutlinedIcon />
                  </ul>
                </div>
                <div className="flex flex-col text-white">
                  <p className="text-[16px]">Programmer</p>
                  <p className="text-[24px]">Leslie Alexander</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/4 px-2 pt-7 overflow-hidden">
            <div
              className="flex rounded-sm transform perspective-[500px] scale-x-100"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg) rotateY(0deg)", // Custom transform styles
              }}
            >
              <div className="flex flex-col relativer">
                <div className="flex relative">
                  <img src={team2} />
                  <ul className="absolute bottom-0 left-[-100%] transition-left duration-500">
                    <FacebookOutlinedIcon />
                  </ul>
                </div>
                <div className="flex flex-col text-white">
                  <p className="text-[16px]">Programmer</p>
                  <p className="text-[24px]">Leslie Alexander</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
