import React from 'react';
import DashboardModal from "./component/Popup/DashboardModal";
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Testimonial/TestimonialTwo';
import BlogTwo from './component/Blog/BlogTwo';
import ContactTwo from './component/ContactTwo';
import SkillTwo from './component/Skill/SkillTwo';
import Footer from './component/Footer';
import jhonData from './component/jhonData';
import Faq from './component/Faq/faq';
export const Homefrelencer = () => (
  <div className="body_wrapper">
    {/* Uncomment For Modal */}
    {/* <DashboardModal /> */}  
    <NavbarTwo mClass="menu_two" mainlogo="company-logo/Ava_inverted.svg" stickylogo="Ava_logo.png"/>  
    <FBanner jhonData={jhonData}/>
    <ServiceTwo rowFlex="flex-row-reverse"/>
    <SkillTwo/>
    <PortfolioSlider/>
    {/* <TestimonialTwo/> */}
    <BlogTwo/>
    <Faq/>
    <ContactTwo jhonData={jhonData}/>
    <Footer jhonData={jhonData}/>
  </div>
)
