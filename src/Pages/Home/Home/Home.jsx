import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
// import Projects from '../Projects/Projects';
import ProjectSection from '../Projects/ProjectSection';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
           <Banner></Banner>
          <ProjectSection></ProjectSection>
           <About></About>
        </div>
    );
};

export default Home;