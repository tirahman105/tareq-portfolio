import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import project1 from "../../../assets/project1.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";
import "./Projects.css";





const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my10">This is my project Section </h1>
      <div className="grid grid-cols-1 px-12 md:grid-cols-4 gap-4">
        <div className="border h-[600px] w-full p-4 rounded-lg shadow-lg bg-white">
          <div className="image-container relative overflow-hidden h-full">
            <img
              src={project1}
              alt=""
              className="w-full absolute top-0 transform transition duration-500 hover:scale-150"
            />
          </div>
          <div className="my-4">
            <h1 className="text-lg font-bold text-center mb-2">Toy Car Zone</h1>
            <p className="text-gray-600 text-center">
              A Toy Marketplace website
            </p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
            <div className="flex flex-wrap gap-2">
              <button className="badge badge-primary">HTML</button>
              <button className="badge badge-primary">CSS</button>
              <button className="badge badge-primary">React</button>
              <button className="badge badge-primary">Node JS</button>
              <button className="badge badge-primary">MongoDB</button>
              <button className="badge badge-primary">Firebase</button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-3/4 mx-auto">
            <a
              href="https://toy-car-zone.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLinkExternal className="text-2xl me-2" />
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
              <BiLogoGithub className="text-2xl me-2 " />
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLogoGithub className="text-2xl me-2" />
              <span>Server Code</span>
            </a>
          </div>
        </div>


        
        <div className="border h-[650px] w-full p-4 rounded-lg shadow-lg bg-white">
          <div className="image-container relative overflow-hidden h-full">
            <img
              src={project2}
              alt=""
              className="w-full absolute top-0 transform transition duration-500 hover:scale-150"
            />
          </div>
          <div className="my-4">
            <h1 className="text-lg font-bold text-center mb-2">Online Language School</h1>
            <p className="text-gray-600 text-center">
              A Online Language Learning website
            </p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
            <div className="flex flex-wrap gap-2">
              <button className="badge badge-primary">HTML</button>
              <button className="badge badge-primary">CSS</button>
              <button className="badge badge-primary">Tailwind CSS</button>
              <button className="badge badge-primary">React</button>
              <button className="badge badge-primary">Node JS</button>
              <button className="badge badge-primary">MongoDB</button>
              <button className="badge badge-primary">Firebase</button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-3/4 mx-auto">
            <a
              href="https://toy-car-zone.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLinkExternal className="text-2xl me-2" />
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
              <BiLogoGithub className="text-2xl me-2 " />
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLogoGithub className="text-2xl me-2" />
              <span>Server Code</span>
            </a>
          </div>
        </div>


        <div className="border h-[650px] w-full p-4 rounded-lg shadow-lg bg-white">
          <div className="image-container relative overflow-hidden h-full">
            <img
              src={project3}
              alt=""
              className="w-full absolute top-0 transform transition duration-500 hover:scale-150"
            />
          </div>
          <div className="my-4">
            <h1 className="text-lg font-bold text-center mb-2">BD Food Website</h1>
            <p className="text-gray-600 text-center">
              Chef and recipe website
            </p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
            <div className="flex flex-wrap gap-2">
              <button className="badge badge-primary">HTML</button>
              <button className="badge badge-primary">CSS</button>
              <button className="badge badge-primary">Tailwind CSS</button>
              <button className="badge badge-primary">React</button>
              <button className="badge badge-primary">Node JS</button>
              <button className="badge badge-primary">Firebase</button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-3/4 mx-auto">
            <a
              href="https://bd-food-f4490.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLinkExternal className="text-2xl me-2" />
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
              <BiLogoGithub className="text-2xl me-2 " />
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLogoGithub className="text-2xl me-2" />
              <span>Server Code</span>
            </a>
          </div>
        </div>



        <div className="border h-[790px] w-full p-4 rounded-lg shadow-lg bg-white">
          <div className="image-container relative overflow-hidden h-full">
            <img
              src={project4}
              alt=""
              className="w-full absolute top-0 transform transition duration-500 hover:scale-150"
            />
          </div>
          <div className="my-4">
            <h1 className="text-lg font-bold text-center mb-2">BD Food Website</h1>
            <p className="text-gray-600 text-center">
              Chef and recipe website
            </p>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-lg font-bold mb-2">Technologies used:</h1>
            <div className="flex flex-wrap gap-2">
              <button className="badge badge-primary">HTML</button>
              <button className="badge badge-primary">CSS</button>
              <button className="badge badge-primary">React</button>
              <button className="badge badge-primary">Node JS</button>
              <button className="badge badge-primary">Firebase</button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="w-3/4 mx-auto">
            <a
              href="https://bd-food-f4490.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLinkExternal className="text-2xl me-2" />
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
              <BiLogoGithub className="text-2xl me-2 " />
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              <BiLogoGithub className="text-2xl me-2" />
              <span>Server Code</span>
            </a>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Projects;
