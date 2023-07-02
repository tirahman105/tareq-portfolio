import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
// import Projects from '../Projects/Projects';
import ProjectSection from '../Projects/ProjectSection';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../MySkills/MySkills';
import BackToTop from '../../../Shared/BackToTop/BackToTop';
import Contact from '../Contact/Contact';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
          <ProjectSection></ProjectSection>
          <Contact></Contact>
           {/* <About></About> */}
           <BackToTop></BackToTop>
           <Footer></Footer>
        </div>
    );
};

export default Home;