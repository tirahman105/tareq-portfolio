import tareqImg from '../../../assets/tareq_img.png'

const AboutMe = () => {
    return (
        <div id="about-me">
            <div className='grid md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img className='rounded h-auto w-3/4' src={tareqImg} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-3xl font-bold'>About Me</h1>
                        <p className='my-4 text-xl pr-4'>I am Md. Tareq Ibna Rahman. By profession I am a dental surgeon, I am working as a lecturer and medical officer in a Private Dental college and hospital in Dhaka. Despite my Dental profession I have a strong interest in web development. And my inspiration comes from Dr. Mehedi hasan , who invented free and open source bangla writing software avro. He proved that a doctor can also become developer.  By my dedication and hard work  I have  learned the technologies from online courses  that is required for the front end development .  <br /> <br />
                        I can develop the front end part of website. I have also skill of graphic design. 
 </p>
                    </div>
                    {/* <div>
                        <h1 className='text-3xl font-bold'>My Skills</h1>
                      <div className='grid grid-cols-5 mt-4'>
                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":90}}>90%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>HTML</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":90}}>90%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>CSS</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":65}}>65%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Javascript</h1>
                        </div>
                        </div>



                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":90}}>90%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Bootstrap</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":85}}>85%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Tailwind CSS</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":65}}>65%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Firebase</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":60}}>60%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Node JS</h1>
                        </div>
                        </div>


                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":60}}>60%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>MongoDB</h1>
                        </div>
                        </div>

                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":90}}>90%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'>Illustrator</h1>
                        </div>
                        </div>

                      <div className='flex justify-center items-center text-center my-2'>
                        <div>
                        <div className="radial-progress text-primary" style={{"--value":80}}>80%</div>
                        <h1 className='mt-3 bg-blue-200 rounded-md p-2'> Photoshop</h1>
                        </div>
                        </div>


                      </div>

                    </div> */}
                </div>

            </div>
            
        </div>
    );
};

export default AboutMe;