import React from 'react';
import tareq2 from '../../../assets/tareq2.png'

const Banner = () => {
    return (
        <div className="w-full">
        
    
        <div className="hero  bg-blue-50">
          <div className="hero-content flex-col lg:flex-row-reverse justify-end">
            <img
              src={tareq2}
              className="max-w-lg rounded-lg animate__animated animate__slideInRight"
            />
            <div>
     
              <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Md. Tareq Ibna Rahman</h1>
              <p className="py-6">
               I am a professional Web developer
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