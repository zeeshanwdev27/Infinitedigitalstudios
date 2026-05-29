import React from "react";
import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { motion } from "framer-motion";

function AboutWhoWeAre() {

  const title1 = "Amplify Your Brand ✦ Build Digital Authority ✦ Drive Real Growth ✦";
  const title2 = "Design That Converts ✦ Marketing That Performs ✦ Scale With Confidence ✦";

  const steps = [
  {
    step: "STEP 1",
    title: "Creative Approach",
    description:
      "At Marketairre, it's your ideas that we transform into reality. We listen, brainstorm, and communicate, all while keeping you in the loop of the process.",
    side: "right",
  },
  {
    step: "STEP 2",
    title: "Tools & Techniques",
    description:
      "Years of experience in the industry have taught us more than a tip or two. We keep updated about the latest trends that help us perform better.",
    side: "left",
  },
  {
    step: "STEP 3",
    title: "Optimized Results",
    description:
      "All strategies fail if you can't get your desired results. Luckily, that's never the case with us as your partner.",
    side: "right",
  },
];

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


        {/* Middle */}
        <div className="py-20 px-5 sm:px-6 md:px-8 lg:px-45">
            <div className="flex flex-col lg:flex-row max-md:gap-5 justify-center">

                {/* Card 1 */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 bg-[url('/About/WhoWeAre/bg1.png')] md:bg-top bg-cover bg-no-repeat w-full max-w-sm">
                    <img src="/About/WhoWeAre/img1.png" alt="" className="w-10 h-10" />
                    <h1 className="text-3xl lg:text-4xl font-semibold font-bricolage">Our Mission</h1>
                    <p className="text-sm lg:text-lg">At Marketairre, we have one mission: to help businesses achieve their goals of maximum ROI and brand presence.</p>
                </div>


                
                {/* Card 2 */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 bg-[url('/About/WhoWeAre/bg2.png')] md:bg-top bg-cover bg-no-repeat w-full max-w-sm">
                    <img src="/About/WhoWeAre/img2.png" alt="" className="w-10 h-10" />
                    <h1 className="text-3xl lg:text-4xl font-semibold font-bricolage">Our Values</h1>
                    <p className="text-sm lg:text-lg">Viewing a world where businesses meet the accepted standards is easy.Taking a step towards that reality is what we do.</p>
                </div>



                
                {/* Card 3 */}
                <div className="rounded-2xl p-4 flex flex-col gap-3 bg-[url('/About/WhoWeAre/bg3.png')] md:bg-top bg-cover bg-no-repeat w-full max-w-sm text-white">
                    <img src="/About/WhoWeAre/img3.png" alt="" className="w-10 h-10" />
                    <h1 className="text-3xl lg:text-4xl font-semibold font-bricolage">Our Values</h1>
                    <p className="text-sm lg:text-lg">We stand by our core values: honesty, integrity, and quality.</p>
                </div>

            </div>

        </div>



        {/* Bottom */}
        <div className="lg:mx-10 overflow-hidden relative h-full py-10 lg:py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/About/WhoWeAre/main-bg.png')] max-md:bg-top max-md:bg-center md:bg-cover bg-no-repeat">


        <div className="flex flex-col gap-10 lg:gap-20">

            {/* Header */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between text-white w-full">

            <h1 className='font-bricolage text-4xl lg:text-7xl font-bold max-w-2xl'>Working Our Way to Shape Your Success</h1>
            <p className='text-sm md:text-md lg:text-lg text-wrap lg:max-w-lg text-stone-300'>We delivered web design, UX/UI and digital projects to 29+ countries, creating lasting experiences tapped and clicked by millions worldwide.</p>

        </div>


        {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

      <div className="py-10 relative lg:max-w-4xl mx-auto flex flex-col gap-10 lg:gap-16">
        {steps.map((item, i) => (
          <TimelineItem key={i} {...item} />
        ))}
      </div>



        </div>

        </div>


    </>
  );
}

export default AboutWhoWeAre;




function TimelineItem({ step, title, description, side }) {
  const isRight = side === "right";

  return (
    <div className="relative flex items-start w-full min-h-[100px]">

      {/* Left content */}
      <div className={`w-1/2 pr-8 lg:pr-12 ${isRight ? "invisible" : ""}`}>
        {!isRight && (
          <div className="text-right">
            <span className="inline-block bg-emerald-400 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {step}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-stone-300 text-sm leading-relaxed">{description}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-start pt-1 z-10">
        <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/20" />
      </div>

      {/* Right content */}
      <div className={`w-1/2 pl-8 lg:pl-12 ${!isRight ? "invisible" : ""}`}>
        {isRight && (
          <>
            <span className="inline-block bg-emerald-400 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {step}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-stone-300 text-sm leading-relaxed">{description}</p>
          </>
        )}
      </div>
    </div>
  );
}