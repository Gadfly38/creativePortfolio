import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const HeroSection=()=>{
    return (
    <div className="w-full flex bg-[url('@/assets/hero-bg1.png')] pt-56 pb-8 px-6 bg-cover justify-center flex-col">
            <div className="flex flex-row justify-between items-center flex-1">
                <h1 className="uppercase text-[80px] text-white font-semibold">next generation <br/><span className="italic">creative</span> 
                <span className='text-4xl' style={{
                    fontSize: "80px",
                    color: "transparent",
                    WebkitTextStroke: "2px #e3ff04", // Outline color
                    background: "linear-gradient(to right, transparent, yellow)", // Gradient starts with transparency
                    WebkitBackgroundClip: "text", // Clip background to text
                    backgroundSize: "200% 100%", // Double the width for smooth animation
                    backgroundRepeat: "no-repeat", // Prevent repeating the background
                    animation: "fillAnimation 3s linear forwards", // Smooth filling animation
                }}>agency</span>
                <style>
                    {`
                    @keyframes fillAnimation {
                        0% {
                        background-position: 0% 0%;
                        }
                        
                        100% {
                        background-position: 200% 0%;
                        }
                    }
                    `}
                </style>
                </h1>

                <div className='relative text-white flex w-4 h-4 group'>
                <PlayArrowOutlinedIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white px-6 py-2  transition-colors duration-300" />
                 
                {/* Rotating circle animation */}
                <div className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                </div>

                    <PlayArrowOutlinedIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white px-6 py-2 rounded-full transition-colors duration-300'/>
                      {/* <img src='@/assets/bn1-circle.png' alt='rotating element' className='absolute'/> */}
                </div>
            </div>
            <div className='flex'>
                <h3 className='text-[22px] text-white'>1k + Brands Trust Us</h3>
            </div>
        
    </div>
    )
}

export default HeroSection;