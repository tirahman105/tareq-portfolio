import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;