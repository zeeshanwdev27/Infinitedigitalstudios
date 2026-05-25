import React from 'react'
import { ArrowRight } from 'lucide-react';

function OurProjects() {
  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/OurProjects/bg.png')] bg-cover bg-no-repeat ">



        <div className='flex flex-col gap-10 lg:gap-20'>



            {/* Header */}
        <div className='flex flex-col gap-5 lg:flex-row justify-between text-white'>
            <h1 className='text-5xl md:text-5xl lg:text-7xl font-bold'>Some of our <br /> recent projects</h1>
            <p className='text-sm md:text-base lg:text-xl w-full max-w-lg text-white/70'>
            We’ve delivered high-impact digital experiences for brands worldwide—combining strategy, design, and technology to create work that performs, scales, and lasts.
            </p>
        </div>



        {/* Card 1 */}
        <div className="bg-[url('/Home/OurProjects/card-bg.png')] bg-cover bg-no-repeat rounded-4xl px-10 py-5 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        <img src="/Home/OurProjects/add-design.png" alt="" className='w-full h-50 md:h-80 lg:w-100 lg:h-100' />

        <div className='flex flex-col gap-5 text-white w-full max-w-xl'>
             <h1 className='text-4xl md:text-5xl lg:text-7xl'>app design & development</h1>
             <ul className='flex flex-wrap gap-5 text-xs'>
                <li className='border border-white rounded-full text-white p-2'>UI/UX Design</li>
                <li className='border border-white rounded-full text-white p-2'>Web Development</li>
                <li className='border border-white rounded-full text-white p-2'>Mobile Apps</li>
                <li className='border border-white rounded-full text-white p-2'>E-Commerce</li>
                <li className='border border-white rounded-full text-white p-2'>Wordpress</li>
             </ul>
            <p className='text-sm md:text-base lg:text-sm text-white/70'>
            We design and develop intuitive, high-performance applications that deliver seamless user experiences. From concept to launch, we turn ideas into scalable digital products built for engagement and growth. 
            </p>

            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer'>
                <span>Find Out More</span>
                <ArrowRight className='w-5 h-5'/>
            </button>

        </div>

        </div>


        {/* Card 2 */}
        <div className="bg-[url('/Home/OurProjects/card-bg.png')] bg-cover bg-no-repeat rounded-4xl px-10 py-5 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        <div className='flex flex-col gap-5 text-white w-full max-w-xl'>
             <h1 className='text-5xl md:text-5xl lg:text-7xl'>web design & development</h1>
             <ul className='flex flex-wrap gap-5 text-xs'>
                <li className='border border-white rounded-full text-white p-2'>Brand Strategy</li>
                <li className='border border-white rounded-full text-white p-2'>UX/UI</li>
                <li className='border border-white rounded-full text-white p-2'>Visual identity</li>
             </ul>
            <p className='text-sm md:text-base lg:text-sm text-white/70'>
            We create visually compelling, conversion-focused websites that blend aesthetics with functionality—helping brands stand out while driving measurable business results.
            </p>

            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer'>
                <span>Find Out More</span>
                <ArrowRight className='w-5 h-5'/>
            </button>

        </div>

        <img src="/Home/OurProjects/webdeisgn.png" alt="" className='w-full h-50 md:h-80 lg:w-100 lg:h-100' />

        </div>


        {/* Card 3 */}
        <div className="bg-[url('/Home/OurProjects/card-bg.png')] bg-cover bg-no-repeat rounded-4xl px-10 py-5 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        <img src="/Home/OurProjects/digitalmarketing.png" alt="" className='w-full h-50 md:h-80 lg:w-100 lg:h-100' />

        <div className='flex flex-col gap-5 text-white w-full max-w-xl'>
             <h1 className='text-5xl md:text-5xl lg:text-7xl'>digital marketing</h1>
             <ul className='flex flex-wrap gap-5 text-xs'>
                <li className='border border-white rounded-full text-white p-2'>Growth Strategy</li>
                <li className='border border-white rounded-full text-white p-2'>Creative Campaigns</li>
                <li className='border border-white rounded-full text-white p-2'>Performance Marketing</li>
             </ul>
            <p className='text-sm md:text-base lg:text-sm text-white/70'>
            Our digital marketing solutions amplify brand visibility, attract the right audience, and turn attention into action through data-driven strategies and creative execution.
            </p>

            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer'>
                <span>Find Out More</span>
                <ArrowRight className='w-5 h-5'/>
            </button>

        </div>

        </div>



        {/* Card 4 */}
        <div className='flex flex-col gap-10 lg:gap-20 w-full max-w-6xl mx-auto'>

        <div className='flex flex-col gap-5 lg:flex-row justify-between text-white'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Results speak louder <br /> than words</h1>
            <p className='text-sm md:text-base lg:text-lg w-full max-w-md text-white/70'>
            Our work delivers real outcomes—measurable growth, stronger brands, and digital experiences that connect with users across the globe.
            </p>
        </div>


        <div className="bg-[url('/Home/OurProjects/lastcard-bg.png')] bg-cover bg-no-repeat rounded-4xl px-10 py-5 flex flex-col lg:flex-row gap-10 items-center">
        
        
        <div className='flex flex-col justify-evenly gap-5 lg:gap-10 text-white w-full max-w-xl'>

            <h1 className='text-xl md:text-2xl lg:text-3xl'>GLOBAL</h1>

            <div className='flex flex-col gap-5'>
                <h1 className='font-bricolage primary-txt text-6xl lg:text-8xl font-bold'>104.9%</h1>
            <p className='text-sm md:text-base lg:text-xl text-white/70 w-full max-w-md font-light'>
            Increase in organic traffic within the first month through strategic design, development, and optimization
            </p>
            </div>

            <button className='flex items-center justify-between p-3 rounded-md primary-btn w-60 cursor-pointer'>
                <span>Find Out More</span>
                <ArrowRight className='w-5 h-5'/>
            </button>


        </div>

        <img src="/Home/OurProjects/phone.png" alt="" className='w-full h-50 md:h-80 lg:w-100 lg:h-80' />

        </div>

        </div>



        </div>

      
    </div>
  )
}

export default OurProjects
