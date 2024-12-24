import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WatchCircle from "@/assets/watch-ciricle01.png";

const WatchSection = () => {
  return (
    <div className="flex py-[300px] items-center justify-center bg-[url('@/assets/watch-bg01.png')] bg-cover bg-fixed bg-center z-[1]">
      <div className="relative text-white flex group">
        <div className="flex">
          <div className="flex w-48 h-48 !relative justify-center items-center">
            <div className="w-36 h-36 rounded-full bg-[#e3ff04] items-center justify-center flex">
              <PlayArrowIcon className="text-black !text-5xl" />
            </div>
            <img
              src={WatchCircle}
              className="absolute flex w-48 h-48 animate-textani cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchSection;
