import React from 'react'
import { motion } from "framer-motion";

function Header({title}) {
  return (
          <div className="bg-[url('/Home/HeroSection/herosection.png')] bg-cover bg-no-repeat  text-white py-20 px-6 md:px-20 text-center pt-40 lg:pt-45">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {/* <motion.p
          className="mt-4 max-w-2xl mx-auto text-white/80 text-md md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p> */}
      </div>
  )
}

export default Header