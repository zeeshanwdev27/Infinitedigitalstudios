import React, { useState } from 'react'

function Packages() {

  const [activeCategory, setActiveCategory] = useState('animation');

  const dummyData = [
    {
      title: 'Basic Boost',
      price: '99',
      description: 'Perfect for small businesses or startups looking to establish their social media presence.',
      features: ['No. of Posts: 10', 'Platforms Included: FB, LinkedIn', 'Per Additional Platform: $20/month', 'No. of Post Revisions: 3', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Standard', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)'],
      type: 'animation'
    },
    {
      title: 'Growth Accelerator',
      price: '199',
      description: 'Ideal for businesses aiming to build and scale their social media following.',
      features: ['No. of Posts: 20', 'Platforms Included: FB, Instagram, LinkedIn', 'Per Additional Platform: $20/month', 'No. of Post Revisions: 5', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Standard', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)', 'Promotional Brochure ($200 Value)', 'Upto $20 Ad Spend Included (On Meta)'],
      type: 'animation'
    },
    {
      title: 'Premium Influence',
      price: '299',
      description: 'Tailored for established businesses seeking a comprehensive social media strategy with advanced ',
      features: ['No. of Posts: 30', 'Platforms Included: FB, Instagram, LinkedIn, X (Twitter)Per Additional Platform: $20/month', 'No. of Post Revisions: 10', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Advance', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)', 'Promotional Brochure ($200 Value)', '1x Conversion-Focused Blog (1000 Words) ($500 Value)', 'Upto $50 Ad Spend Included (On Meta)'],
      type: 'animation'
    },

    


    {
      title: 'Basic Boost 2',
      price: '99',
      description: 'Perfect for small businesses or startups looking to establish their social media presence.',
      features: ['No. of Posts: 10', 'Platforms Included: FB, LinkedIn', 'Per Additional Platform: $20/month', 'No. of Post Revisions: 3', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Standard', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)'],
      type: 'branding'
    },
    {
      title: 'Growth Accelerator',
      price: '199',
      description: 'Ideal for businesses aiming to build and scale their social media following.',
      features: ['No. of Posts: 20', 'Platforms Included: FB, Instagram, LinkedIn', 'Per Additional Platform: $20/month', 'No. of Post Revisions: 5', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Standard', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)', 'Promotional Brochure ($200 Value)', 'Upto $20 Ad Spend Included (On Meta)'],
      type: 'branding'
    },
    {
      title: 'Premium Influence',
      price: '299',
      description: 'Tailored for established businesses seeking a comprehensive social media strategy with advanced ',
      features: ['No. of Posts: 30', 'Platforms Included: FB, Instagram, LinkedIn, X (Twitter)Per Additional Platform: $20/month', 'No. of Post Revisions: 10', 'Custom Posts: (Holidays, Seasonal, etc)', 'Post Scheduling', 'Monthly Reporting: Advance', 'Customer Support', 'Social Profile DP & Cover Design ($100 Value)', 'Promotional Brochure ($200 Value)', '1x Conversion-Focused Blog (1000 Words) ($500 Value)', 'Upto $50 Ad Spend Included (On Meta)'],
      type: 'branding'
    },
  ];


const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter data based on active category
  const filteredData =  dummyData.filter(item => item.type === activeCategory);


  const getButtonClass = (category) => {
    const baseClass = 'text-black p-2 md:p-3 px-4 md:px-8 rounded-md font-bold text-sm md:text-md transition-colors duration-200';
    const isActive = 
      (category === 'animation' && activeCategory === 'animation') ||
      (category === 'branding' && activeCategory === 'branding') ||
      (category === 'digitalmarketing' && activeCategory === 'digitalmarketing') ||
      (category === 'ecommerce' && activeCategory === 'ecommerce') ||
      (category === 'logo' && activeCategory === 'logo') ||
      (category === 'seo' && activeCategory === 'seo') ||
      (category === 'smm' && activeCategory === 'smm') ||
      (category === 'webdesign' && activeCategory === 'webdesign') 
    
    return isActive 
      ? `${baseClass} primary-btn` 
      : `${baseClass}  bg-linear-to-b from-white to-[#E4D8CA] hover:bg-amber-100`;
  };




  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-[url('/Home/UniqueApproach/bg.png')] bg-cover bg-no-repeat ">
      <div className="flex flex-col items-center justify-center gap-15">
      
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bricolage primary-txt text-5xl lg:text-7xl font-bold">
            All That Glitters Is Not Gold
          </h1>
          <p className="text-gray-900 text-sm md:text-base lg:text-xl mb-10 md:mb-0 w-full max-w-4xl">
            Remember that true treasures lie beyond the gilded veil in a world
            where shimmering illusions dance before your eyes. For all the true
            glitters, choose Digitzlabs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-8 w-full max-w-8xl">
          <button
            className={getButtonClass("animation")}
            onClick={() => handleCategoryClick("animation")}
          >
            Animation
          </button>
          <button
            className={getButtonClass("branding")}
            onClick={() => handleCategoryClick("branding")}
          >
            Branding
          </button>
          <button
            className={getButtonClass("digitalmarketing")}
            onClick={() => handleCategoryClick("digitalmarketing")}
          >
            Digital Marketing
          </button>
          <button
            className={getButtonClass("ecommerce")}
            onClick={() => handleCategoryClick("ecommerce")}
          >
            Ecommerce
          </button>
          <button
            className={getButtonClass("logo")}
            onClick={() => handleCategoryClick("logo")}
          >
            Logo
          </button>

          <button
            className={getButtonClass("seo")}
            onClick={() => handleCategoryClick("seo")}
          >
            SEO
          </button>

          <button
            className={getButtonClass("smm")}
            onClick={() => handleCategoryClick("smm")}
          >
            SMM
          </button>

          <button
            className={getButtonClass("webdesign")}
            onClick={() => handleCategoryClick("webdesign")}
          >
            Web Design
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full px-4 items-stretch">
          {filteredData.map((item, index) => (
            <div
              className="relative z-10 h-full p-[5px] rounded-xl bg-gradient-to-l from-[#F3395E] to-[#9431B6] hover:scale-102 hover:bg-gradient-to-b hover:from-[#FC9D44] hover:to-[#FF4969]"
              key={index}
            >
              <div className="h-full p-7 flex flex-col gap-10 rounded-xl bg-[url('/Home/Packages/cards_bg.png')] bg-cover bg-no-repeat">
                {/* Top content */}
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="text-xl text-white font-medium">
                    {item.title}
                  </h1>
                  <h1 className="text-xl text-white font-medium">
                    ${item.price}
                  </h1>
                  <p className="text-md text-white/60 w-full max-w-md">
                    {item.description}
                  </p>

                  <ul className="list-disc pl-4 sm:pl-5 md:pl-6 space-y-1 sm:space-y-2 text-white/80 text-xs sm:text-sm ">
                    {item.features.map((feature, i) => (
                      <li key={i} className="leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button pinned to bottom */}
                <button className="mt-auto p-3 rounded-md primary-btn cursor-pointer text-white font-semibold">
                  Schedule a call
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Packages
