import React from "react";
import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { testimonialsData } from "@/data/testimonial.jsx";
import TestimonialCard from "@/components/TestimonialCards";


function Testimonials() {
  return (
    <div className="flex flex-col lg:gap-10 overflow-hidden relative h-full w-full py-15 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/Testimonials/bg.png')] bg-cover bg-no-repeat text-white">


         <h1 className='font-bricolage text-center text-4xl lg:text-7xl font-bold w-full max-w-lg lg:max-w-4xl mx-auto'>
            Why Clients Keep <span className="font-playfair font-medium">Coming Back To</span> asdssaada 
        </h1>


        <div className="lg:-rotate-5">

        <div className='flex flex-col w-full'>

            <Marquee className="mx-auto mt-11"  speed={25} >
                <div className="flex items-center justify-center py-5">
                    {testimonialsData.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
                </div>
            </Marquee>

            <Marquee className="mx-auto" speed={25} direction="right">
                <div className="flex items-center justify-center py-5">
                    {testimonialsData.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
                </div>
            </Marquee>

        </div>

        </div>
      


    </div>
  )
}

export default Testimonials