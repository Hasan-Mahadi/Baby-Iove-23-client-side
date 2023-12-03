import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Blog/Blogs";
import About from "../About/About";

import Categories from "../Pages/Home/Home/Categories/Categories";
import ProductDtls from "../Layout/ProductDtls";
import ProductsAll from "../Pages/ProductsAll/ProductsAll/ProductsAll";



import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blogs/',
        element: <Blogs></Blogs>
      },
      {
        path: 'about/',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/sign',
        element: <Signup></Signup>
      },





      {
        path: 'categories/:id',
        element: <Categories></Categories>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
      },



    ]

  },

  {
    path: 'productsdtls',
    element: <ProductDtls></ProductDtls>,
    children: [
      {
        path: ':id',
        element: <ProductsAll></ProductsAll>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: 'blogs/',
        element: <Blogs></Blogs>
      },

      {
        path: 'about/',
        element: <About></About>
      },
      {
        path: 'login/',
        element: <Login></Login>

      },
      {
        path: 'sign/',
        element: <Signup></Signup>
      },





    ]
  }
]);



export default router;



// {
//   path:'category/:id',
//   element:<Category2></Category2>
// }