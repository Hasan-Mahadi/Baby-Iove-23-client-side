import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Blog/Blogs";
import About from "../About/About";
import Login from "../Login/Login";
import Categories from "../Pages/Home/Home/Categories/Categories";
import ProductDtls from "../Layout/PLayout";
import ProductsAll from "../Pages/ProductsAll/ProductsAll/ProductsAll";
  

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
          path:'categories/:id',
          element:<Categories></Categories>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
      
      
      ]

    },

    {
      path:'productsdtls',
      element:<ProductDtls></ProductDtls>,
      children:[
        {
          path: 'id',
          element: <ProductsAll></ProductsAll>
        }
      ]
    }
  ]);



  export default router;



  // {
  //   path:'category/:id',
  //   element:<Category2></Category2>
  // }