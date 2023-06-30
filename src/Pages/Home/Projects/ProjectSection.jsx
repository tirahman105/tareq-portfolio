import toyCarProject from "../../../assets/toyCarProject.png";
import languageSchoolProject from "../../../assets/languageSchoolProject.png";
import bdFoodProject from "../../../assets/bdFoodProject.png";
import { AiFillCheckCircle } from "react-icons/ai";

const ProjectSection = () => {
  return (
    <div>
      This is project section
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-6">
        <div className="  p-3">
          <img src={toyCarProject} alt="" />
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
       <div className="p-4 flex justify-center items-center">
          <button className="btn btn-primary mx-1">Live Preview</button>
          <button className="btn btn-primary mx-1">Client Code</button>
          <button className="btn btn-primary mx-1">Server Code</button>
        </div>
       </div>
      </div>

      {/* Project 2 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-6">
        <div className="  p-3">
          <img src={languageSchoolProject} alt="" />
        </div>
        <div className=" p-3">
          <h1 className="text-2xl font-bold">Online Language School</h1>
          <p className="text-sm">  A Online Language Learning website</p>
          <ul className="mt-4 list-disc ">
            <li> 
            Integration of Firebase authentication with email-password, Google Sign-In methods.
            </li>
            <li> Different role for Admin, instructor and user.</li>
            <li>
            Admin can make instructor, approve or deny class posted by instructor, see payment details.
            </li>
            <li>
             Instructor can add new class, manage booked class, user can enroll class and ,make payment using stripe.
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
       <div className="p-4 flex justify-center items-center">
          <button className="btn btn-primary mx-1">Live Preview</button>
          <button className="btn btn-primary mx-1">Client Code</button>
          <button className="btn btn-primary mx-1">Server Code</button>
        </div>
       </div>
      </div>


      {/* Project 3 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-103 transition-all transform duration-500 my-6">
        <div className="  p-3">
          <img src={bdFoodProject} alt="" />
        </div>
        <div className=" p-3">
          <h1 className="text-2xl font-bold">BD Food</h1>
          <p className="text-sm">  Chef and recipe website</p>
          <ul className="mt-4 list-disc ">
            <li> 
            Integration of Firebase authentication with email-password, Google Sign-In, and GitHub Sign-In methods.
 
            </li>
            <li>Chef section with <i>View recipe</i> button that redirects to the Chef Recipes page, displaying chef information and top 3 recipes. Favorite button functionality with a toast message.</li>
           
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
       <div className="p-4 flex justify-center items-center">
          <button className="btn btn-primary mx-1">Live Preview</button>
          <button className="btn btn-primary mx-1">Client Code</button>
          <button className="btn btn-primary mx-1">Server Code</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default ProjectSection;
