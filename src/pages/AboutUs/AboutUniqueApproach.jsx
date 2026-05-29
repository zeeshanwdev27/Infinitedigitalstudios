import React from 'react'
import {data} from '@/data/UniqueApproach_data'

function AboutUniqueApproach() {
  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/UniqueApproach/bg.png')] bg-cover bg-no-repeat ">

        <div className='flex flex-col items-center justify-center gap-15'>
            <h1 className='font-bricolage primary-txt text-center text-5xl lg:text-7xl font-bold'>Unqiue Approach</h1>


            <div className='flex flex-col lg:flex-row gap-10'>
                          {
              data.map((data,index)=>(
                <div key={index} className='p-5 py-7 rounded-xl shadow flex flex-col gap-5 border border-[#F2F0EE] bg-[#F2F0EE] w-full lg:max-w-xs hover:scale-102'>
                  <img src={data.image} alt="" className='w-17 h-14' />
                  <h1 className='text-xl lg:text-2xl font-semibold'>{data.title}</h1>
                  <p className='text-sm md:text-base lg:text-md text-wrap'>{data.description}</p>
                </div>
              ))
            }

            </div>



        </div>
      
    </div>
  )
}

export default AboutUniqueApproach
