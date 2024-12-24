import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ProgressBar = () => {
  return (
    <div className="fixed right-5 bottom-5 z-[9999]  w-10 h-10 bg-[#e3ff04] border-2 rounded-full flex items-center justify-center transition-all ease-in-out duration-400">
      <ArrowUpwardIcon />
    </div>
  );
};
export default ProgressBar;
