import React from 'react';
import tareq2 from '../../../assets/tareq2.png'

const Banner = () => {
  
    return (
        <div className="w-full">
        
    
        <div className="hero md:py-28 lg:py-32 bg-blue-50">
          <div className="hero-content flex-col lg:flex-row-reverse justify-end">
            <img
              src={tareq2}
              className="max-w-lg rounded-lg animate__animated animate__slideInRight"
            />
            <div>
     
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">Md. Tareq Ibna Rahman</h1>
              <p className="py-3 text-2xl">
               I am a Front-End Web Developer
              </p>
              <button className="btn bg-blue-700 text-white hover:bg-blue-400">
    Resume
  </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;