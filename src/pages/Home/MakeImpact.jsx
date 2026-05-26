import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown   } from 'lucide-react';

function MakeImpact() {

    const [openIndex, setOpenIndex] = useState(null);


    const content = [
        {
            icon: '/Home/MakeImpact/img1.png',
            title: 'Tailored Digital Strategies',
            description: 'We craft custom design, development, and branding strategies aligned with your business goals and audience.'
        },
                {
            icon: '/Home/MakeImpact/img2.png',
            title: 'Creative Design & Branding',
            description: 'From brand identity to UI/UX, we design experiences that are visually strong, memorable, and conversion-focused.'
        },
                {
            icon: '/Home/MakeImpact/img3.png',
            title: 'Scalable Web Development',
            description: 'We build fast, secure, and scalable websites and applications designed for performance and growth.'
        },
                {
            icon: '/Home/MakeImpact/img3.png',
            title: 'Data-Driven Results',
            description: 'Every decision is backed by insights and analytics to ensure measurable impact and continuous improvement.'
        }
    ]


    const faqs = [
  {
    title: 'Why is the vape industry considered high risk?',
    description: 'Vape and e-cigarette sales have strict regulations and higher dispute rates, so regular processors often decline them.'
  },
  {
    title: 'How fast can a vape business get approved?',
    description: 'Most vape merchants get approved within 24 hours after submitting compliance documents.'
  },
  {
    title:  'Does Crazy Merchants support both online and retail vape stores?',
    description: 'Yes — you can process payments for physical shops, online stores, and subscription-based vape products.'
  },
  {
    title: 'What payment methods can vape businesses accept?',
    description: 'Credit/debit cards, recurring billing, and multi-currency payments for international customers.'
  },
  {
    title: 'What protections are available for high-risk vape transactions?',
    description: 'Fraud tools, chargeback alerts, and secure routing to keep risk levels low.'
  }
];



    // Animation variants (unchanged)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const faqItemVariants = {
        closed: {
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const answerVariants = {
        closed: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
};



  return (
    <div className="overflow-hidden relative h-full w-full py-20 px-5 sm:px-6 md:px-8 lg:px-45 bg-white">


        <div className='flex flex-col gap-20'>


        {/* Top */}
        <div className='flex flex-col lg:flex-row gap-20 lg:gap-30'>


            {/* Left Side */}
            <div className='flex flex-col gap-5 w-full relative'>

                {/* divider */}
                <div className='hidden lg:block absolute top-10 -right-5 h-120 w-[1.6px] bg-gradient-to-b from-[#FFFFFF] via-[#000000]/48 to-[#FFFFFF]'></div>

                <p className='font-bricolage primary-txt text-lg font-light'>• The Marketairre Difference</p> 
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black lg:text-left font-bricolage max-w-md">
                    MAKING AN IMPACT <span className="font-playfair font-medium">THAT MATTERS</span>
                </h1>
                <p className="text-gray-900 text-lg mb-10 md:mb-0 max-w-xl">
                    Our agency was built on the belief that great digital work should create real value. We focus on projects that are meaningful, purposeful, and impactful—not just profitable. We measure success by the positive change we bring to our clients’ businesses, the experiences we create for users, and the long-term growth we help achieve. From thoughtfully designed websites to results-driven digital strategies, our work is guided by intention and innovation. Whether your goal is to launch, scale, or transform your business, we’re here to help you make it happen.
                </p>

                <button className='p-3 rounded-md primary-btn w-90 cursor-pointer text-xl font-semibold'>Let’s create impact—together</button>


            </div>


            {/* Right Side */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 w-full max-w-2xl'>
                {
                    content.map((data, index)=>(
                        <div key={index} className='flex flex-col gap-5 '>
                            <img src={data.icon} alt="" className='w-10 lg:w-15 g-10 lg:h-15' />
                            <h1 className='text-3xl font-semibold'>{data.title}</h1>
                            <p className='text-gray-900 text-md max-w-lg'>{data.description}</p>
                        </div>
                    ))
                }

            </div>
             
        </div>



        {/* Bottom */}
         <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20">
            
            {/* FAQ Section */}
            <div className='relative overflow-hidden w-full max-w-3xl '>
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "0px" }}
                                variants={containerVariants}
                                className="w-full max-w-3xl flex flex-col items-center justify-center px-0 sm:px-2 lg:px-8"
                            >
                                {/* FAQ Items */}
                                <motion.div 
                                    variants={containerVariants}
                                    className="w-full space-y-3 sm:space-y-3 lg:space-y-4"
                                >
                                    {
                                        faqs.map((faq, index) => (
                                            <motion.div
                                                key={index}
                                                className="border-b-2 border-gray-400/20 cursor-pointer w-full bg-white/50 backdrop-blur-sm pb-4 sm:pb-5"
                                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.995 }}
                                            >
                                                <motion.div 
                                                    className="flex items-center justify-between"
                                                    variants={faqItemVariants}
                                                >
                                                    <motion.h3 
                                                        className="text-md lg:text-lg font-medium text-slate-800 pr-3 sm:pr-4 lg:pr-6 leading-relaxed"
                                                        whileHover={{ color: "#f59e0b" }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {faq.title}
                                                    </motion.h3>
                                                    
                                                    <motion.div 
                                                    variants={iconVariants}
                                                    animate={openIndex === index ? "open" : "closed"}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="flex-shrink-0 text-slate-700"
                                                    >
                                                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </motion.div>


                                                </motion.div>
                                                
                                                <AnimatePresence>
                                                    {openIndex === index && (
                                                        <motion.p 
                                                            variants={answerVariants}
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            className="text-sm lg:text-base text-slate-600 mt-3 sm:mt-4 lg:mt-5 leading-relaxed sm:leading-loose"
                                                        >
                                                            {faq.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
            </div>


            {/* CTA */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bricolage primary-txt2 text-4xl lg:text-5xl font-bold'>New Project In Mind?</h1>
                <p className='text-gray-900 text-sm md:text-base lg:text-lg  w-full max-w-sm font-semibold'>Get expert help, right when you need it. Subscribe to our newsletter.</p>
                
                <div className='flex gap-3'>
                    <input type="text" className='py-1 lg:py-2 px-4 rounded-lg border border-purple-400 w-full max-w-4xl outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300' placeholder='Enter Your Email' />
                    <button className='p-2 lg:p-3 rounded-lg primary-btn w-40 cursor-pointer text-lg lg:text-xl font-semibold'>Lets Talk</button>
                </div>

            </div>


        
        </div>



         </div>
            
      
    </div>
  )
}

export default MakeImpact
