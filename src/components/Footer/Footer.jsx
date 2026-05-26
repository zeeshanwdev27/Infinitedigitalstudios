import React from 'react'
import { Mail, MapPin, ArrowUpRight  } from 'lucide-react';

function Footer() {
  return (
    <div className="overflow-hidden relative h-full w-full py-10 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Footer/bg.png')] bg-cover bg-no-repeat text-white">

        <div className='flex flex-col gap-5'>



        {/* Top */}
        <div className='flex justify-between items-center border-b border-gray-400 pb-8'>
            <img src="/Home/Footer/logo.png" alt="" className='w-80 h-15' />

        <div className='relative flex gap-10 divide-red-300'>

            {/* Divider */}
            <div className='hidden lg:block absolute -top-1 right-56 h-12 w-[1.6px] bg-white/40'></div>


            <div className='flex gap-3'>
              <Mail className='w-7 h-7 text-white/60'/>

              <div className='flex flex-col'>
                <p className="text-white/60 text-sm">(888) 251-7552</p>
                <p className="text-white/60 text-sm">info@marketairre.com</p>
              </div>

            </div>



            <div className='flex gap-3'>
              <MapPin className='w-7 h-7 text-white/60'/>

              <div className='flex flex-col'>
                <p className="text-white/60 text-sm">303 Perimeter Center N Ste </p>
                <p className="text-white/60 text-sm">300, Atlanta, GA 30346</p>
              </div>

            </div>

        </div>

        </div>



         {/* Main */}
        <div className='grid grid-cols-5'>

            {/* About */}
            <div className='flex flex-col gap-8 w-full col-span-2 max-w-xs'>
                <h1 className='text-xl font-bold'>About Us</h1>
                <p className='text-gray-500 text-md max-w-lg'>asdssaadais a digital marketing agency that specializes in bringing out the best in brands through a comprehensive range of services. From social media marketing to logo design, we do it all, and we do it best.</p>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Follow Us:</h1>

                    <div className='flex gap-3'>
                        <img src="Footer/fb.png" alt="" className='w-10 h-10 hover:opacity-80 cursor-pointer' />
                        <img src="Footer/insta.png" alt="" className='w-10 h-10 hover:opacity-80 cursor-pointer' />
                        <img src="Footer/linkedin.png" alt="" className='w-10 h-10 hover:opacity-80 cursor-pointer' />
                        <img src="Footer/twitter.png" alt="" className='w-10 h-10 hover:opacity-80 cursor-pointer' />

                    </div>

                </div>

            </div>


            {/* Quick links */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-bold'>Quick Links</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Home</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>About Us</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Blog</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Case Studies</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Contact Us</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Privacy Policy</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Terms And Conditions</li>
                </ul>

            </div>


            {/* Services links */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-bold'>Services</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>PPC Services</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>SEO Services</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>SMM Services</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Email Marketing Services</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Branding Services</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>Website Development</li>
                    <li className='text-md text-gray-400 cursor-pointer hover:text-purple-400'>App Development Services</li>
                </ul>

            </div>


            {/* CTA */}
            <div className='flex flex-col gap-8'>
                    <h1 className='text-xl font-bold'>Subscribe Now</h1>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-500 text-md'>Only valuable resource no bullshit</p>
                    <div className='flex gap-1 py-2 px-4 bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:ring-1 focus:ring-purple-400 rounded-sm'>
                        <input type="text" className='outline-none w-full' placeholder='Your Email*' />
                        <button className='p-2 px-3 rounded-lg primary-btn  cursor-pointer text-md font-semibold'><ArrowUpRight className='w-4 h-4'/></button>
                        
                    </div>
                </div>


            </div>


        </div>



        {/* Bottom */}
        <div className='flex justify-center items-center'>
                    <div className='mt-15 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/20 flex justify-center items-center py-4 rounded-lg'>
           <p className='text-md text-stone-300'>© Copyright 2024 —asdssaada All Rights Reserved.</p>
        </div>

        </div>




         </div>


    </div>
  )
}

export default Footer
