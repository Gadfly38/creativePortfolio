import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const WatchSection = () => {
  return (
    <div className="flex py-[300px] items-center justify-center bg-[url('@/assets/watch-bg01.png')] bg-cover bg-fixed bg-center z-[1]">
      <div className="relative text-white flex group">
        <div className="flex">
          <div className="w-20 h-20 rounded-full bg-[#e3ff04] items-center justify-center flex">
            <PlayArrowIcon className="text-black" />
          </div>
          <div className="hover:group ">
            <div className=" bg-[url('@/assets/bn1-circle.png')] w-36 h-36 absolute top-[-35px] left-[-32px] animate-textani cursor-pointer hidden group-hover:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchSection;
