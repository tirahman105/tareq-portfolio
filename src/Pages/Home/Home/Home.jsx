import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
// import Projects from '../Projects/Projects';
import ProjectSection from '../Projects/ProjectSection';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../MySkills/MySkills';
import BackToTop from '../../../Shared/BackToTop/BackToTop';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
          <ProjectSection></ProjectSection>
           <About></About>
           <BackToTop></BackToTop>
        </div>
    );
};

export default Home;