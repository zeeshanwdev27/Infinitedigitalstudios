import React from 'react'
import { MapPin, Mail, Clock  } from 'lucide-react';

function ReadyToGetStarted() {
  return (
    <div className="overflow-hidden relative h-full w-full py-15 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/GetStarted/bg.png')] bg-cover bg-no-repeat ">



       <div className="flex flex-col lg:flex-row w-full gap-15 lg:gap-20 text-white">


        {/* Left */}
        <div className='relative overflow-hidden w-full max-w-3xl flex flex-col gap-5 px-4 '>

          <h1 className='text-4xl sm:text-5xl font-bold font-bricolage'>Ready to Get Started?</h1>
          <p className="text-white/60 text-md">Connect with our team and experience what true collaboration feels like.</p>

          <form>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-2xl'>
      
            <input type="text" placeholder='Your Name*'  className='py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm' />
            <input type="text" placeholder='Email*'  className='py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm' />
            <input type="text" placeholder='Phone*'  className='py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm' />
            <input type="text" placeholder='Website*'  className='py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm' />
            <textarea name="" id="" placeholder='Message' className='py-2 px-4 lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm' rows={5} ></textarea>

             </div>

          <button className='mt-10 lg:mt-5 p-2 lg:p-3 px-5 rounded-lg primary-btn w-40 cursor-pointer text-md font-semibold'>Send Message</button>

          </form>
          
        </div>


        {/* Right */}
          <div className='flex flex-col justify-center gap-10 px-4'>

            <div className='flex gap-5'>
              <MapPin className='w-14 h-14 p-3 rounded-full primary-btn'/>

              <div className='flex flex-col gap-2'>
                <h1 className='text-xl sm:text-2xl font-bold font-bricolage'>Our Locations</h1>
                <p className="text-white/60 text-md">1234 Elm Street, Suite 567, <br /> Springfield, IL 62701, United States</p>
              </div>

            </div>

            <div className='flex gap-5'>
              <Mail className='w-14 h-14 p-3 rounded-full primary-btn'/>

              <div className='flex flex-col gap-2'>
                <h1 className='text-xl sm:text-2xl font-bold font-bricolage'>Mail us</h1>
                <p className="text-white/60 text-md">sales@flyerhive.com</p>
              </div>

            </div>


            <div className='flex gap-5'>
              <Clock className='w-14 h-14 p-3 rounded-full primary-btn'/>

              <div className='flex flex-col gap-2'>
                <h1 className='text-xl sm:text-2xl font-bold font-bricolage'>Opening Hours</h1>
                <p className="text-white/60 text-md">Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday -Sunday : 10:00 AM - 4:00 PM</p>
              </div>

            </div>

          </div>



         </div>
      
      
    </div>
  )
}

export default ReadyToGetStarted
