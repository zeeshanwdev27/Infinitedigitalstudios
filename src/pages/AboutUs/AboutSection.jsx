import React from 'react'

function AboutSection() {
  return (
    <div className="overflow-hidden h-full w-full py-15 lg:py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-white">

      <div className='flex flex-col gap-8 w-full max-w-lg lg:max-w-5xl'>

        <h1 className='font-bricolage text-4xl lg:text-6xl font-bold '>
            we spin the fortune wheel of  <span className="font-playfair font-medium text-[#F3395E]">andasnd</span> with one hand
        </h1>

          <p className="font-bricolage text-sm lg:text-xl ">
            Using emotional intelligence and a strategic plan of action, we go the extra mile to make your audience see what they're missing.
          </p>

      </div>
      
    </div>
  )
}

export default AboutSection
