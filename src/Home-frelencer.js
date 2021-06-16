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
import FooterTwo from './component/FooterTwo';
import jhonData from './component/jhonData';
import Faq from './component/Faq/faq';
export const Homefrelencer = () => (
  <div className="body_wrapper">
    <DashboardModal />
    <NavbarTwo mClass="menu_two" mainlogo="logo_new.png" stickylogo="logo_new.png"/>  
    <FBanner jhonData={jhonData}/>
    <ServiceTwo rowFlex="flex-row-reverse"/>
    <PortfolioSlider/>
    <SkillTwo/>
    <TestimonialTwo/>
    <BlogTwo/>
    <Faq/>
    <ContactTwo jhonData={jhonData}/>
    <FooterTwo jhonData={jhonData}/>
  </div>
)
