// import NavButtons from "./navButtons";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full px-4 py-4 mx-auto items-center flex flex-row gap-4 fixed bg-black justify-between z-10">
      <div className="max-[1394px] w-full mx-auto flex justify-between">
        <div className="flex flex-1">
          <img src={Logo} />
        </div>
        <div className="hidden lg:flex flex-row justify-center gap-8 uppercase">
          <div className="flex flex-row text-white items-center ">
            <ArrowOutwardOutlinedIcon />
            <p>home</p>
          </div>
          <div className="flex flex-row text-white items-center ">
            <ArrowOutwardOutlinedIcon />
            <p>pages</p>
          </div>
          <div className="flex flex-row text-white items-center ">
            <ArrowOutwardOutlinedIcon />
            <p>protfolio</p>
          </div>
          <div className="flex flex-row text-white items-center ">
            <ArrowOutwardOutlinedIcon />
            <p>blog</p>
          </div>
          <div className="flex flex-row text-white items-center ">
            <ArrowOutwardOutlinedIcon />
            <p>services</p>
          </div>
          <div className="flex flex-row text-white items-center ">
            <p>contactus</p>
          </div>
        </div>
        <div className="flex flex-1 flex-row gap-3 justify-end ">
          <div className="flex items-center gap-2">
            <SearchIcon className="text-white hover:text-[#e3ff04] cursor-pointer" />
            <ShoppingCartOutlinedIcon className="hidden lg:flex lg:text-white cursor-pointer" />
            <div className="lg:hidden flex w-[36px] h-[24px] flex-col justify-between cursor-pointer">
              <div className="flex border-[#e3ff04] h-[2px] border-t w-full"></div>
              <div className="flex border-[#e3ff04] h-[2px] border-t w-full"></div>
              <div className="flex border-[#e3ff04] h-[2px] border-t w-full"></div>
            </div>
          </div>
          <div className="hidden lg:flex relative border border-white items-center gap-1 text-white py-[10px] px-[20px] text-[16px] flex-row group hover:cursor-pointer hover:text-black overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[#e3ff04] -translate-x-full translate-y-full group-hover:animate-fillDiagonal" />

            {/* Content */}
            <span className="relative flex items-center gap-1 z-10">
              <ArrowOutwardOutlinedIcon className="text-[#e3ff04]" />
              <p>Get In Touch</p>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
