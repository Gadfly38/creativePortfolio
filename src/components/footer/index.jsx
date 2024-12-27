import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import TelegramIcon from "@mui/icons-material/Telegram";
import Logo from "@/assets/logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex bg-[url('@/assets/footer.png')] bg-cover">
      <div className="flex w-[1320px] mx-auto flex-col">
        <div className="flex py-20 w-full px-24">
          <div className="my-5 w-full flex-row justify-between flex flex-wrap gap-y-8">
            <div className="flex w-1/2 lg:w-3/12 flex-col  gap-10">
              <p className="text-white text-[20px] font-semibold">
                About Us
                <div className="flex h-[2px] w-[83px] bg-[#e3ff04] mt-3"></div>
              </p>

              <p className="text text-[16px] text-white">
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
                a lacinia curabitur lacinia mollis
              </p>
              <ul className="text-white">
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <SmartDisplayIcon />
              </ul>
            </div>
            <div className="flex w-1/2 lg:w-3/12 flex-col gap-10">
              <p className="text-white text-[20px] font-semibold">
                Quick Links
                <div className="flex h-[2px] w-[83px] bg-[#e3ff04] mt-3"></div>
              </p>
              <div className="flex flex-col justify-between gap-2">
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  About Xstar
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  Our Services
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  Our Blogs
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  Contact Us
                </p>
              </div>
            </div>
            <div className="flex w-1/2 lg:w-3/12 flex-col gap-10">
              <p className="text-white text-[20px] font-semibold">
                Services
                <div className="flex h-[2px] w-[83px] bg-[#e3ff04] mt-3"></div>
              </p>
              <div className="flex flex-col justify-between gap-2">
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  UI/UX Experience
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  Web Development
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  Produce Design
                </p>
                <p className="text-white text-[16px] cursor-pointer group hover:text-[#e3ff04]">
                  <KeyboardDoubleArrowRightIcon className="group-hover:rotate-180 group-hover:text-[#e3ff04]" />
                  SEO Optimization
                </p>
              </div>
            </div>
            <div className="flex w-1/2 lg:w-3/12 flex-col  gap-10">
              <p className="text-white text-[20px] font-semibold">
                Newsletter
                <div className="flex h-[2px] w-[83px] bg-[#e3ff04] mt-3"></div>
              </p>
              <p className="text text-[16px] text-white">
                Sign up to seargin weekly newsletter to get the latest updates.
              </p>
              <div className="flex w-full">
                <div className="flex flex-row border rounded-s p-[5px] border-[#bebebe] justify-between">
                  <input
                    placeholder="Enter Email Address"
                    className="px-[24px] py-[10px] bg-transparent outline-none text-[#bebebe]"
                  />
                  <div className="flex w-[53px] h-[50px] px-[5px] py-[16px] bg-[#e3ff04] items-center justify-center cursor-pointer">
                    <TelegramIcon className="bg-transparent text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-12 p-6 justify-between items-center bg-[#1b1b1b]">
          <div className="flex">
            <img src={Logo} />
          </div>
          <div
            onClick={scrollToTop}
            className="flex w-[58px] h-[58px] rounded-full bg-[#e3ff04] border-white border-2 items-center justify-center cursor-pointer "
          >
            <ArrowUpwardIcon />
          </div>
          <div className="flex">
            <p className="text-[#bebebe]">
              All Copyright 2024 by{" "}
              <span className="text-[#e3ff04]">XStar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
