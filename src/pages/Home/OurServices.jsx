import React from 'react'
import { ArrowRight } from 'lucide-react';



function OurServices() {


    const cards = [
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'Website Design',
            description: 'Captivate your users with feature-rich Android, iOS, or hybrid applications',
            image: '/Home/OurServices/webdesign.png',
        }, 
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'Website Development',
            description: 'Using emotional intelligence and a strategic plan of action, we go the extra mile',
            image: '/Home/OurServices/webdev.png',
        }, 
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'Logo & Branding',
            description: "Do you have a business idea? Let's push it into becoming a reality.",
            image: '/Home/OurServices/logo.png',
        }, 
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'App Development',
            description: "Captivate your users with feature-rich Android, iOS, or hybrid applications",
            image: '/Home/OurServices/webdesign.png',
        }, 
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'Secure Web Hosting',
            description: "If you're worried about the safety of your website while conducting business online, you can rest easy ",
            image: '/Home/OurServices/webdev.png',
        }, 
        {
            icon: '/Home/OurServices/favicon.png',
            title: 'Digital Marketing',
            description: 'Gone are the days of attracting customers with a catchy ad on the radio.',
            image: '/Home/OurServices/marketing.png',
        }, 
    ]


  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/OurServices/bg.png')] max-lg:bg-center bg-cover bg-no-repeat ">


        <div className='flex flex-col gap-10 lg:gap-20'>

       

        <div className='flex flex-col gap-5 lg:flex-row justify-between text-white'>
            <h1 className='text-5xl md:text-5xl lg:text-7xl font-bold'>A Glance at Our <br /> Services</h1>
            <p className='text-sm md:text-base lg:text-xl w-full max-w-lg text-white/70'>
                Transform your online presence with our tailored website development solutions. Let’s take your online presence to the next level – explore our full suite of solutions today.
            </p>
        </div>



        <div className='relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-20'>
        {/* Background Image */}
        <img src="/Home/OurServices/bg_icon.png" alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-0 w-50 h-50'/>

        {
            cards.map((data,index)=>(
                <div className='relative z-10 h-fit p-[8px] rounded-xl bg-gradient-to-l from-[#F3395E] to-[#9431B6] hover:scale-102 hover:bg-gradient-to-b hover:from-[#FC9D44] hover:to-[#FF4969]' key={index}>
                         <div className='flex flex-col gap-6 bg-black/90 text-white order-1 '>

                         <div className='p-7 flex flex-col gap-4 w-full'>
                            <img src={data.icon} alt="" className='w-10 h-10' />
                            <h1 className='text-xl text-white font-medium'>{data.title}</h1>
                            <p className='text-md text-white/60 w-full max-w-md'>{data.description}</p>
                        </div>
                        
                        <img src={data.image} alt="" />
                         
                         </div>
                </div>
            ))
        }
        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10'>

            <button className='flex items-center justify-between p-4 rounded-md primary-btn w-60 cursor-pointer'>
                <span>View All</span>
                <ArrowRight className='w-5 h-5'/>
            </button>


            <button className='flex items-center justify-between p-4 rounded-md bg-transparent border-1 border-pink-500 w-60 text-white hover:-translate-y-[2px] cursor-pointer hover:border-purple-500'>
                <span>Request a Call Back</span>
                <ArrowRight className='w-5 h-5'/>
            </button>


        </div>




         </div>
      
    </div>
  )
}

export default OurServices
