import React from "react";
import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { motion } from "framer-motion";

function WhoWeAre() {

  const title1 = "Amplify Your Brand ✦ Build Digital Authority ✦ Drive Real Growth ✦";
  const title2 = "Design That Converts ✦ Marketing That Performs ✦ Scale With Confidence ✦";

  return (
    <>

    {/* Top */}
      <div className="overflow-hidden relative h-full w-full py-10 bg-[url('/Home/WhoWeAre/top-bg.png')] md:bg-top bg-cover bg-no-repeat">
        <Marquee speed={25}>
          <div className="flex items-center justify-center py-5 overflow-hidden">
            <p className="font-bricolage text-white text-center text-5xl lg:text-7xl font-bold">
              {title1}
            </p>
          </div>
        </Marquee>
        <Marquee speed={25} direction="right">
          <div className="flex items-center justify-center py-5 overflow-hidden">
            <p className="font-bricolage text-white text-center text-5xl lg:text-7xl font-bold">
              {title2}
            </p>
          </div>
        </Marquee>
      </div>


        {/* Main */}
        <div className="overflow-hidden relative h-full w-full py-8 md:py-20 md:pb-30 lg:py-30 lg:pb-50 px-0 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/WhoWeAre/main-bg.png')] bg-cover bg-no-repeat ">

        <div className="flex flex-col lg:gap-15 w-full pl-15 md:pl-15 lg:px-10">

            <div className="relative">

                <div className="flex flex-col gap-5 w-full md:max-w-xl lg:max-w-4xl">
                <div className="flex gap-1 items-center">
                    <p className='font-bricolage primary-txt text-xl lg:text-3xl font-bold'>• Who are we?</p> 
                      <motion.span className="text-3xl origin-bottom-right inline-block" 
                      animate={{ rotate: [0, 18, -8, 18, -4, 10, 0] }} 
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                      >
                        👋
                    </motion.span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black lg:text-left font-bricolage">
                    We’re <span className="font-playfair font-medium">Infinite Digital Studios</span>
                </h1>
                <p className="text-gray-900 text-sm md:text-base lg:text-xl mb-10 md:mb-0">We’re a full-service digital agency specializing in design, development, and branding, blending strategic thinking with creative execution to build meaningful digital experiences. Our in-house experts craft tailored solutions that align with your goals, strengthen your brand identity, and drive real business impact.</p>

                 </div>

                 <img src="/Home/WhoWeAre/black-circles.png" alt="" className="hidden lg:block -top-10 right-5 absolute w-100 h-100 floating" />

            </div>

            <img src="/Home/WhoWeAre/peoples.png" alt="" className="hidden lg:block w-full" />

        </div>


        </div>

    </>
  );
}

export default WhoWeAre;
