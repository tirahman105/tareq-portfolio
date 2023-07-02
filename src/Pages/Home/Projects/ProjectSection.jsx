import toyCarProject from "../../../assets/toyCarProject.png";
import languageSchoolProject from "../../../assets/languageSchoolProject.png";
import bdFoodProject from "../../../assets/bdFoodProject.png";

import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import project3 from '../../../assets/project3.png'
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";


const ProjectSection = () => {
  return (
    <div id="my-projects ">
      <SectionTitle heading={"My Projects"}></SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-6">
       
            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
          <img
            src={project1}
            alt=""
            className="w-full object-cover object-top rounded-lg"
          />
        </div>
      </div>

        <div className=" p-3">
          <h1 className="text-2xl font-bold">Toy Car Zone</h1>
          <p className="text-sm"> A Toy Marketplace website</p>
          <ul className="mt-4 list-disc ">
            <li>
              Login and registration system with email/password login and Google
              sign-in options
            </li>
            <li>A home page featuring a toy gallery and Shop by Category</li>
            <li>
              Additional pages for browsing, adding, and managing user toys.
            </li>
          </ul>
        </div>
        <div>
          <div className=" p-3">
            <h1 className="mb-3 text-xl">Technologies used:</h1>
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
          <div className="p-4 flex justify-center items-center gap-2">
          <a
              href="https://toy-car-zone.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-600 flex justify-center items-center"
            >
             
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
             
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
          
              <span>Server Code</span>
            </a>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-16">
       
             <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
          <img
            src={project2}
            alt=""
            className="w-full object-cover object-top rounded-lg"
          />
        </div>
      </div>
        <div className=" p-3">
          <h1 className="text-2xl font-bold">Online Language School</h1>
          <p className="text-sm"> A Online Language Learning website</p>
          <ul className="mt-4 list-disc ">
            <li>
              Integration of Firebase authentication with email-password, Google
              Sign-In methods.
            </li>
            <li> Different role for Admin, instructor and user.</li>
            <li>
              Admin can make instructor, approve or deny class posted by
              instructor, see payment details.
            </li>
            <li>
              Instructor can add new class, manage booked class, user can enroll
              class and ,make payment using stripe.
            </li>
          </ul>
        </div>
        <div>
          <div className=" p-3">
            <h1 className="mb-3 text-xl">Technologies used:</h1>
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
          <div className="p-4 flex justify-center items-center gap-2">
          <a
              href="https://toy-car-zone.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
            
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
             
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/toy-car-zone-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              
              <span>Server Code</span>
            </a>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-6">
      <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
          <img
            src={project3}
            alt=""
            className="w-full object-cover object-top rounded-lg"
          />
        </div>
      </div>
        <div className=" p-3">
          <h1 className="text-2xl font-bold">BD Food</h1>
          <p className="text-sm"> Chef and recipe website</p>
          <ul className="mt-4 list-disc ">
            <li>
              Integration of Firebase authentication with email-password, Google
              Sign-In, and GitHub Sign-In methods.
            </li>
            <li>
              Chef section with <i>View recipe</i> button that redirects to the
              Chef Recipes page, displaying chef information and top 3 recipes.
              Favorite button functionality with a toast message.
            </li>
          </ul>
        </div>
        <div>
          <div className=" p-3">
            <h1 className="mb-3 text-xl">Technologies used:</h1>
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
          <div className="p-4 flex justify-center items-center gap-2">
          <a
              href="https://bd-food-f4490.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
              
              <span>Live Preview</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-client"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center my-2"
            >
              
              <span>Client Code</span>
            </a>
            <a
              href="https://github.com/tirahman105/bd-food-server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover:bg-blue-700 flex justify-center items-center"
            >
             
              <span>Server Code</span>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProjectSection;
