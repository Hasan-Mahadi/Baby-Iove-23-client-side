import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Blog/Blogs";
import About from "../About/About";
import Login from "../Login/Login";
import Categories from "../Pages/Home/Home/Categories/Categories";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'blogs/',
          element:<Blogs></Blogs>
        },
        {
          path:'about/',
          element:<About></About>
        },
        {
          path:'login/',
          element:<Login></Login>
        },
        {
          path:'categories/',
          element:<Categories></Categories>
        }
      ]
    },
  ]);



  export default router;