import React, { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


function AllInOne() {
    
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef(null);
    const totalCards = 3; 



    const handleSlideChange = (swiper) => {
        // Calculate progress based on real index (accounts for loop)
        const realIndex = swiper.realIndex; // This gives the actual index in the original array
        const progressPercentage = (realIndex / (totalCards - 1)) * 100;
        setProgress(progressPercentage);
    }

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        // Set initial progress
        const realIndex = swiper.realIndex;
        const progressPercentage = (realIndex / (totalCards - 1)) * 100;
        setProgress(progressPercentage);
    }

    const handleProgressClick = (e) => {
        if (!swiperRef.current) return;
        
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progressBarWidth = rect.width;
        const clickPercentage = (clickPosition / progressBarWidth) * 100;
        
        // Calculate which slide to go to based on click position
        const targetSlide = Math.round((clickPercentage / 100) * (totalCards - 1));
        swiperRef.current.slideToLoop(targetSlide);
    }



  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/AllInOne/bg.png')] max-lg:bg-center bg-cover bg-no-repeat ">
        

<Swiper
  className="max-w-[500px] lg:max-w-[1500px]"
  modules={[Navigation, Autoplay]}
  slidesPerView={1}
  spaceBetween={20}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  navigation={{
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  }}
  onSlideChange={handleSlideChange}
  onSwiper={handleSwiperInit}
>


        {/* Slider 1 */}
        <SwiperSlide>
        <div className='flex flex-col gap-10 lg:gap-50 lg:flex-row w-full'>


            {/* Image */}
            <div className='flex lg:hidden items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-100 h-110' />
            </div>


            {/* Content */}
            <div className='flex flex-col gap-2 lg:gap-5 w-full max-w-xl'>

                <div className='text-center py-3 font-bricolage primary-bg rounded-md rounded-br-full text-white text-4xl lg:text-5xl font-bold w-76'>
                    All In One
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-bricolage'>
                    Package for Your <span className="font-playfair font-light">Social Media</span> Needs
                </h1>

                <p className="text-white/60 text-md mb-10 md:mb-0">
                Our all-inclusive package has all your social media needs covered—the best part? You won’t have to pay separately for each service    
                </p>


                <div className='grid md:grid-cols-2 gap-5'>

                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Social Media Strategy and Planning</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Audience Analysis</li>
                            <li>✓ Content Calendar Creation</li>
                            <li>✓ Competitor Research</li>
                            <li>✓ Goal Setting and KPIs</li>
                        </ul>
                    </div>

                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Content Creation and Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Custom Graphics and Videos</li>
                            <li>✓ Copywriting for Engagement</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Advertising and Campaign Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ UNLIMITED Pages Website</li>
                            <li>✓ Complete Deployment</li>
                            <li>✓ Any 3 Social Media Platforms</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Analytics and Performance Reporting</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Social Media Insights</li>
                            <li>✓ Campaign Effectiveness Reports</li>
                        </ul>
                    </div>
                    
                </div>


                
            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer mt-5 text-xl font-semibold'>
                <span>Get Now</span>
                <ArrowRight className='w-5 h-5'/>
            </button>




            </div>


             {/* Image */}
            <div className='hidden lg:flex items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-150 h-160' />
            </div>







        </div>
        </SwiperSlide>



        {/* Slider 2 */}
        <SwiperSlide>
        <div className='flex flex-col gap-10 lg:gap-50 lg:flex-row w-full'>


            {/* Image */}
            <div className='flex lg:hidden items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-100 h-110' />
            </div>


            {/* Content */}
            <div className='flex flex-col gap-2 lg:gap-5 w-full max-w-xl'>

                <div className='text-center py-3 font-bricolage primary-bg rounded-md rounded-br-full text-white text-4xl lg:text-5xl font-bold w-76'>
                    All In One
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-bricolage'>
                    Package for Your <span className="font-playfair font-light">Social Media</span> Needs
                </h1>

                <p className="text-white/60 text-md mb-10 md:mb-0">
                Our all-inclusive package has all your social media needs covered—the best part? You won’t have to pay separately for each service    
                </p>


                <div className='grid md:grid-cols-2 gap-5'>

                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Social Media Strategy and Planning</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Audience Analysis</li>
                            <li>✓ Content Calendar Creation</li>
                            <li>✓ Competitor Research</li>
                            <li>✓ Goal Setting and KPIs</li>
                        </ul>
                    </div>

                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Content Creation and Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Custom Graphics and Videos</li>
                            <li>✓ Copywriting for Engagement</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Advertising and Campaign Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ UNLIMITED Pages Website</li>
                            <li>✓ Complete Deployment</li>
                            <li>✓ Any 3 Social Media Platforms</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Analytics and Performance Reporting</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Social Media Insights</li>
                            <li>✓ Campaign Effectiveness Reports</li>
                        </ul>
                    </div>
                    
                </div>


                
            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer mt-5 text-xl font-semibold'>
                <span>Get Now</span>
                <ArrowRight className='w-5 h-5'/>
            </button>




            </div>


             {/* Image */}
            <div className='hidden lg:flex items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-150 h-160' />
            </div>







        </div>
        </SwiperSlide>



        {/* Slider 3 */}
        <SwiperSlide>
        <div className='flex flex-col gap-10 lg:gap-50 lg:flex-row w-full'>


            {/* Image */}
            <div className='flex lg:hidden items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-100 h-110' />
            </div>


            {/* Content */}
            <div className='flex flex-col gap-2 lg:gap-5 w-full max-w-xl'>

                <div className='text-center py-3 font-bricolage primary-bg rounded-md rounded-br-full text-white text-4xl lg:text-5xl font-bold w-76'>
                    All In One
                </div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-bricolage'>
                    Package for Your <span className="font-playfair font-light">Social Media</span> Needs
                </h1>

                <p className="text-white/60 text-md mb-10 md:mb-0">
                Our all-inclusive package has all your social media needs covered—the best part? You won’t have to pay separately for each service    
                </p>


                <div className='grid md:grid-cols-2 gap-5'>

                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Social Media Strategy and Planning</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Audience Analysis</li>
                            <li>✓ Content Calendar Creation</li>
                            <li>✓ Competitor Research</li>
                            <li>✓ Goal Setting and KPIs</li>
                        </ul>
                    </div>

                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Content Creation and Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Custom Graphics and Videos</li>
                            <li>✓ Copywriting for Engagement</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Advertising and Campaign Management</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ UNLIMITED Pages Website</li>
                            <li>✓ Complete Deployment</li>
                            <li>✓ Any 3 Social Media Platforms</li>
                        </ul>
                    </div>


                    
                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className='text-xl font-semibold'>Analytics and Performance Reporting</h1>
                        <ul className='text-white/60 text-md'>
                            <li>✓ Social Media Insights</li>
                            <li>✓ Campaign Effectiveness Reports</li>
                        </ul>
                    </div>
                    
                </div>


                
            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer mt-5 text-xl font-semibold'>
                <span>Get Now</span>
                <ArrowRight className='w-5 h-5'/>
            </button>




            </div>


             {/* Image */}
            <div className='hidden lg:flex items-center mx-auto'>
                <img src="/Home/AllInOne/slider1_img.png" alt="" className='w-150 h-160' />
            </div>







        </div>
        </SwiperSlide>


        </Swiper>


        {/* Navigation + Progress */}
<div className="hidden lg:flex items-center gap-15 w-full max-w-4xl mt-20 mx-auto">

  {/* Prev Button */}
  <button className="prevBtn flex items-center justify-center p-3 rounded-full bg-gray-900/80 border border-white cursor-pointer">
    <ArrowLeft className="w-6 h-6 text-white" />
  </button>

  {/* Progress Bar Wrapper */}
  <div
    className="relative flex-1 h-4 flex items-center cursor-pointer"
    onClick={handleProgressClick}
  >
    {/* Background Line */}
    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
      
      {/* Active Progress */}
      <div
        className="h-full primary-bg transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>

    {/* Moving Circle */}
    <div
      className="absolute top-1/2 w-5 h-5 bg-white border-4 border-primary-bg rounded-full shadow-md transition-all duration-300 -translate-y-1/2"
      style={{ left: `calc(${progress}% - 10px)` }}
    />
  </div>

  {/* Next Button */}
  <button className="nextBtn flex items-center justify-center p-3 rounded-full primary-bg cursor-pointer">
    <ArrowRight className="w-6 h-6 text-white" />
  </button>
</div>




      
    </div>
  )
}

export default AllInOne
