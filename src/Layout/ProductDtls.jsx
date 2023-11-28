import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const ProductDtls = () => {
    return (
        <div >
        <NavBar></NavBar>

       <div className='min-h-[calc(100vh-136px)]'>
    
       <Outlet></Outlet>
       </div>

        <Footer></Footer>
    </div>
    );
};

export default ProductDtls;