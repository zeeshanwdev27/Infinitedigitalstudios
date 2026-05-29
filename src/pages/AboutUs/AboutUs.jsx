import React from 'react'
import Header from '../../components/Header.jsx'
import AboutSection from './AboutSection.jsx'
import AboutUniqueApproach from './AboutUniqueApproach.jsx'
import AboutExperience from './AboutExperience.jsx'
import AboutWhoWeAre from './AboutWhoWeAre.jsx'
import AboutMakeImpact from './AboutMakeImpact.jsx'
import ReadyToGetStarted from '../Home/ReadyToGetStarted.jsx'
import Acheivements from '../Home/Acheivements.jsx'
import Testimonials from '../Home/Testimonials.jsx'



function AboutUs() {
  return (
    <>
    <Header title={'About Us'}/>
    <AboutSection/>
    <AboutUniqueApproach/>
    <AboutExperience/>
    <AboutWhoWeAre/>
    <Acheivements/>
    <AboutMakeImpact/>
    <ReadyToGetStarted/>
    <Testimonials/>
      
    </>
  )
}

export default AboutUs
