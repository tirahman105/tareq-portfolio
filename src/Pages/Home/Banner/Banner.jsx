
import tareq2 from "../../../assets/tareq2.png";
import resume from '../../../assets/ResumeTareq.pdf'

const Banner = () => {
  return (
    <div className="w-full" >
      <div className="hero md:py-24 lg:py-32 bg-blue-50" >
        <div className="hero-content flex-col lg:flex-row-reverse justify-end">
          <img
            src={tareq2}
            className="md:max-w-md lg:max-w-lg  rounded-lg "
          />
          <div >
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">
              Md. Tareq Ibna Rahman
            </h1>
            <p className="py-3 text-2xl">I am a Front-End Web Developer</p>
            <a href={resume} download  className="btn bg-blue-700 text-white hover:bg-blue-400">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
