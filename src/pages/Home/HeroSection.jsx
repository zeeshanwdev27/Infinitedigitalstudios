import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { motion } from "motion/react";
import {logos} from '@/data/BrandsLogos.jsx'

function HeroSection() {

  return (
    <div className="overflow-hidden relative min-h-screen mx-auto py-3 md:py-5 lg:pt-40 px-5 sm:px-6 md:px-8 lg:px-10 w-full bg-[url('/Home/HeroSection/herosection.png')] bg-cover bg-no-repeat ">
    
    
    <div className=" text-white flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-50 mt-30 md:mt-30 lg:mt-10 lg:mb-25">

      {/* Left Side */}
     <div className='relative flex flex-col gap-6 md:gap-8 w-full lg:max-w-3xl '>


      {/* Emoji Icons */}
      <img src="/Home/HeroSection/laugh.png" alt="shocking" className="hidden lg:block absolute w-30 h-18 md:w-20 md:h-20 -left-8 top-10 md:-left-35  floating" />
      <img src="/Home/HeroSection/heart.png" alt="shocking" className="hidden lg:block absolute w-40 h-20 md:w-25 md:h-25 bottom-0 -left-35  floating" />

      {/* Mobile Emoji Icons */}
      {/* <img src="/Home/HeroSection/laugh.png" alt="shocking" className="lg:hidden absolute w-15 h-12 md:w-20 md:h-20 -left-2 top-45 md:-left-35  floating" /> */}
      {/* <img src="/Home/HeroSection/heart.png" alt="shocking" className="lg:hidden absolute w-18 h-15 md:w-20 md:h-20 -left-2 top-45 md:-left-35  floating" /> */}

      {/* Componies Icons */}
      <motion.div 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      className='hidden lg:flex items-center justify-center lg:justify-start divide-x divide-white/30'>


  <div className='px-4 md:px-6'>
    <img src="/Home/HeroSection/meta.png" alt="meta" className='w-40 h-11 object-contain' />
  </div>

  <div className='px-4 md:px-6'>
    <img src="/Home/HeroSection/google.png" alt="google" className='w-40 h-11 object-contain' />
  </div>

  <div className='px-4 md:px-6'>
    <img src="/Home/HeroSection/wordpress.png" alt="wordpress" className='w-40 h-11 object-contain' />
  </div>

  <div className='px-4 md:px-6'>
    <img src="/Home/HeroSection/adobe.png" alt="adobe" className='w-40 h-11 object-contain' />
  </div>

</motion.div>




      <motion.h1 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left font-bricolage'>
        Your One-Stop <span className="font-playfair">Digital Marketing and</span> Web Design <span className="font-playfair">Partner Empowering</span> Your Brand Voice
      </motion.h1>

      <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
       className='text-sm lg:text-lg font-medium w-full max-w-md lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0'>Searching for a reliable digital solution agency to strengthen your online brand and make a mark in the digital world? We’re here to help.
       </motion.p>


      {/* Call To Actions */}
      <motion.div
                      initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
       className='flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start'>

        <Link to={'/contact-us/'} className='hidden md:block primary-btn p-3 px-5 rounded-md text-white font-bold cursor-pointer text-center'>
        View All Services
        </Link>


        <div className="flex flex-col gap-1">

          <h1 className="text-md font-semibold">Trusted By Many</h1>

          <div className="flex gap-2">
            <img src="/Home/HeroSection/stars.png" alt="" className='w-20 object-contain' />
            <p className="text-sm text-gray-400">4.5/5 (13k+ reviews)</p>
          </div>

        </div>



      </motion.div>

     </div>



     {/* Right Side */}
     {/* <div className='p-[6px] rounded-xl bg-gradient-to-r from-[#F3395E] to-[#9431B6]'> */}

     <div className="relative flex items-center">

      {/* Emoji's Icons */}
     <img src="/Home/HeroSection/shocking.png" alt="shocking" className="hidden lg:block absolute z-50 w-30 h-18 md:w-20 md:h-20 -top-8 md:-top-13 -right-3 md:-right-1 floating" />
     <img src="/Home/HeroSection/cool.png" alt="shocking" className="hidden lg:block absolute z-50 w-30 h-18 md:w-20 md:h-20 -left-8 top-30 md:-left-35  floating" />
     <img src="/Home/HeroSection/lovely.png" alt="shocking" className="hidden lg:block absolute z-50 w-30 h-18 md:w-20 md:h-20 -bottom-8 md:-bottom-10 -right-3 md:-right-25 floating" />

      {/* Mobile Emoji's Icons */}
     <img src="/Home/HeroSection/shocking.png" alt="shocking" className="lg:hidden absolute z-50 w-20 h-18 md:w-20 md:h-20 -top-8 md:-top-13 -right-3 md:-right-1 floating" />

    <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                className='h-fit p-[8px] rounded-xl bg-gradient-to-b from-[#FC9D44] to-[#FF4969]'>
      
     
     <div className='relative flex flex-col gap-6 md:gap-10 py-8 md:py-15 rounded-xl px-6 md:px-10 h-auto w-full max-w-2xl lg:max-w-2xl  lg:mx-0 bg-black/90 text-white order-1 '>
     


      <div className='flex flex-col gap-2'>
          <h1 className='text-2xl md:text-3xl font-bold '>Request a <span className='text-[#9431B6]'>Quote</span></h1>
          <p className='text-sm md:text-md '>Enhance your Design and start thriving by signing up for our services today.</p>
      </div>

      <form className='flex flex-col gap-4 md:gap-5'
          onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
      
                  try {
                    const response = await fetch(
                      "https://kdppublications.com/sendmail.php",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
      
                    const result = await response.text();
      
                    if (result.includes("success")) {
                      Swal.fire({
                        icon: "success",
                        title: "Message Send!",
                        text: "🎉 Thank you! Message Send Successfully.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    } else if (result.includes("invalid_email")) {
                      Swal.fire({
                        icon: "warning",
                        title: "Invalid Email",
                        text: "⚠️ Please enter a valid email address.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "❌ Something went wrong. Please try again later.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    }
                  } catch (error) {
                    Swal.fire({
                      icon: "error",
                      title: "Network Error",
                      text: "🚨 Please check your connection and try again.",
                      confirmButtonColor: "#FBBF24",
                    });
                    console.error(error);
                    e.target.reset();
                  }
          }} >
        <div className='flex flex-col gap-4 md:gap-5'>
        <input type="text" name='fullname' required placeholder='Full Name*' className='border-b border-[#c084fc] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#7c3aed] focus:ring-0' />
        <input type="email" name='email' required placeholder='Email Address*' className='border-b border-[#c084fc] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#7c3aed] focus:ring-0' />
        <input type="number" name='phonenumber' required placeholder='Phone Number*' className='border-b border-[#c084fc] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#7c3aed] focus:ring-0' />
        <input type="text" name='message' placeholder='Write us a message' className='border-b border-[#c084fc] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#7c3aed] focus:ring-0' />
        </div>

        <p className='text-xs md:text-sm'>
          Your data is protected with us — no worries, no compromises
        </p>

        <button type='submit' className='primary-btn p-3 md:p-4  text-white rounded-md cursor-pointer'>Get A Quote</button>
      </form>


     

     </div>

     </motion.div>

     </div>



</div>



{/* Moving Logos */}
<div className="lg:absolute mt-3 bottom-0 left-0 w-full ">
  <Marquee speed={100}>
    <div className="flex items-center gap-8 py-5">
      {[...logos, ...logos].map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-3 py-2 rounded-full bg-white/10 ml-5"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-13 h-13 object-contain rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs md:text-sm text-white font-bold">{data.title}</span>
            <span className="text-xs text-gray-300 text-center">{data.description}</span>
          </div>
        </div>
      ))}
    </div>
  </Marquee>
</div>



    </div>
  )
}

export default HeroSection