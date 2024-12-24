import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <div className="flex relative">
      <div className="w-full h-[584px] min-h-full flex bg-[url('@/assets/hero-bg1.png')] pt-48 pb-8 px-6 bg-cover flex-col justify-between items-center">
        <div className="flex flex-col w-[1394px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="uppercase text-[80px] text-white font-semibold">
              next generation <br />
              <span className="italic">creative</span>
              <span
                className="relative before:content-[attr(data-text)] before:absolute before:w-0 before:overflow-hidden before:animate-pulse-width before:custom-text-stroke
                        }"
                style={{
                  fontSize: "80px",
                  color: "transparent",
                  WebkitTextStroke: "2px #e3ff04", // Outline color
                }}
                data-text="agency"
              >
                agency
              </span>
            </h1>

            <div className="relative text-white flex group">
              <div>
                <PlayArrowIcon className="!text-5xl" />
                <div className="hover:group ">
                  <div className=" bg-[url('@/assets/bn1-circle.png')] w-36 h-36 absolute top-[-50px] left-[-50px] animate-textani cursor-pointer group-hover:block"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <h3 className="text-[22px] text-white">1k + Brands Trust Us</h3>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-[180px] w-[617px] bg-[#1f1f1f] rounded-tl-[100px] rounded-bl-[100px] overflow-hidden flex flex-row justify-between">
          <div className="flex w-1/3 bg-transparent hover:bg-[url('@/assets/bn-expri.png')]"></div>
          <div className="flex w-1/3 justify-center flex-col pl-4">
            <p className="text-[20px] text-white">12+</p>
            <p className="text-[16px] text-[#757575]">years of experience</p>
          </div>
          <div className="flex w-1/3 justify-center flex-col pl-4">
            <p className="text-[20px] text-white">25K+</p>
            <p className="text-[16px] text-[#757575]">completed projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
