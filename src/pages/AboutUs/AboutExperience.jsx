import React from 'react'

function AboutExperience() {


    const bars=[
        {
            title: 'SEO',
            value: '90'
        },
                {
            title: 'Branding',
            value: '95'
        },
                {
            title: 'Web Development',
            value: '95'
        },
                {
            title: 'Digital Marketing',
            value: '95'
        },
    ]


    const graph=[
        {
            image: '/Home/Experience/graph.png',
            text: 'Constant Client Coordination'
        },
        {
            image: '/Home/Experience/graph.png',
            text: 'Proven Digital Expertise'
        },
        {
            image: '/Home/Experience/graph.png',
            text: 'Results-Driven Execution'
        },
    ]


  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/Experience/bg.png')] bg-cover bg-no-repeat ">


        <div className='flex flex-col lg:flex-row gap-5'>

            <img src="/Home/Experience/card.png" alt="card" className='h-90 md:h-120 lg:h-140 hover:scale-102' />


            <div className='flex flex-col gap-5 w-full max-w-4xl'>


                <h1 className='font-bricolage primary-txt text-5xl lg:text-6xl font-bold'>ExperienceThat Speaks for Itself</h1>
                <p className='text-gray-900 text-sm md:text-base lg:text-xl'>Whether you are looking to create a mind-boggling website or e-commerce store, a promising Digital Marketing Strategy, or attention-grabbing graphic design services, we have the right bunch of people who go beyond your expectations to produce exemplary results.</p>

                {
                    bars.map((data,index)=>(
                                        <div className="w-full max-w-3xl" key={index}>
                    <div className="flex justify-between mb-2">
                        <span className="text-lg font-medium">{data.title}</span>
                        <span className="text-sm">{data.value}%</span>
                    </div>
                    
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-700" style={{ width: `${data.value}%` }}/>
                    </div>
                </div>

                    ))
                }


                <div className="flex gap-5 lg:gap-10 w-full">
                {
                    graph.map((data,index)=>(

                        <div className='p-5 rounded-xl shadow lg:gap-5 flex flex-col hover:scale-102'  key={index}>
                            <img src={data.image} alt="" className='w-10 lg:w-15 h-10 lg:h-15' />
                            <h1 className='text-sm lg:text-md font-semibold'>{data.text}</h1>
                        </div>
                    ))
                }
                </div>



            </div>

        </div>
      

      
    </div>
  )
}

export default AboutExperience
