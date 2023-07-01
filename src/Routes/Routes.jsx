import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <AboutMe></AboutMe>
        }
      ]

    },
  ]);


export default router;