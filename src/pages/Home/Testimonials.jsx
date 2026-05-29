import React from "react";
import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/testimonial.jsx";


function Testimonials() {
  return (
    <div className="flex flex-col lg:gap-10 overflow-hidden relative h-full w-full py-15 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/Testimonials/bg.png')] bg-cover bg-no-repeat text-white">


         <h1 className='font-bricolage text-center text-4xl lg:text-7xl font-bold w-full max-w-lg lg:max-w-4xl mx-auto'>
            Why Clients Keep <span className="font-playfair font-medium">Coming Back To</span> asdssaada 
        </h1>


        <div className="lg:-rotate-5">

      
        <div className='flex flex-col w-full'>


            <Marquee className="mx-auto mt-11"  speed={25} >
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (

        <motion.div className=" rounded-lg mx-4 p-4 w-80 lg:p-8 lg:w-100 shrink-0 bg-white/5 backdrop-blur-xl border border-white/20"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
            <div className="flex flex-col gap-2">


                <div className="flex justify-between">

                                <h1 className="text-lg font-semibold line-clamp-2">
                {testimonial.comments}
            </h1>


                    <img src="/Home/Testimonials/quote.png" alt="" className="w-7 h-5" />

                </div>
                                
                        


            <p className="text-sm  text-slate-500 line-clamp-2">
                {testimonial.quote}
            </p>


            


            <div className="pt-2 flex gap-2">
                <img className="size-11 rounded-full" src={testimonial.image} alt={testimonial.name} height={50} width={50} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{testimonial.name}</p>
                    </div>
                    <span className="text-xs text-slate-500">{testimonial.handle}</span>
                </div>
            </div>

             </div>

        </motion.div>

                    ))}
                </div>
            </Marquee>



            <Marquee className="mx-auto" speed={25} direction="right">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (

        <motion.div className=" rounded-lg mx-4 p-4 w-80 lg:p-8 lg:w-100 shrink-0 bg-white/5 backdrop-blur-xl border border-white/20"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
            <div className="flex flex-col gap-2">


                <div className="flex justify-between">

                                <h1 className="text-lg font-semibold line-clamp-2">
                {testimonial.comments}
            </h1>


                    <img src="/Home/Testimonials/quote.png" alt="" className="w-7 h-5" />

                </div>
                                
                        


            <p className="text-sm  text-slate-500 line-clamp-2">
                {testimonial.quote}
            </p>


            


            <div className="pt-2 flex gap-2">
                <img className="size-11 rounded-full" src={testimonial.image} alt={testimonial.name} height={50} width={50} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{testimonial.name}</p>
                    </div>
                    <span className="text-xs text-slate-500">{testimonial.handle}</span>
                </div>
            </div>

             </div>

        </motion.div>

                    ))}
                </div>
            </Marquee>



        </div>

        </div>
      

    </div>
  )
}

export default Testimonials

