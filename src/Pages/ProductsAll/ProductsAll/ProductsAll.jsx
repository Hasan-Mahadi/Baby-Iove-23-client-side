import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const ProductsAll = () => {

    const products = useLoaderData();

    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, [])

    const {  img, title, details,price, category_id} = products
    return (
        <div className="card w-96 mb-20 ml-80 mt-20 rounded-lg  bg-cyan-500 bg-base-100 shadow-xl " data-aos='fade-down-right'>
        <figure className='max-w-sm rounded-lg hover:text-7xl transform hover:scale-110  transition delay-150 duration-300 ease-in-outoverflow-hidden 	 '>
            <img className='h-72 w-96  rounded-lg ' src={img} alt="" />
        </figure>
        <p className='text-center mt-5 font-bold text-black'>{title}</p>
        <div className="mt-4 mb-5 text-center">
        <h1 className='font-bold'><span className='text-black'>$</span>{price}.00</h1>
        <h1 className='font-bold mb-2'>Made in Bangladesh</h1>
            <p><small>{details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga nemo non quidem animi, suscipit rem minima. Nesciunt eaque necessitatibus velit commodi obcaecati aliquid odit quos delectus, facere dolorum! Placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga nemo non quidem animi, suscipit rem minima. Nesciunt eaque necessitatibus velit commodi obcaecati aliquid odit quos delectus, facere dolorum! Placeat.</small></p>
        
     

        </div>
        <div className=" ml-14 mb-5 ">
                <Link to={`/categories/${category_id}`}> <button className="btn btn-primary 	rounded-full  text-cyan-200 bg-cyan-700   "><  FaArrowLeft /><p className='font-bold '>All Items In This Categories</p> </button></Link>
                </div>
    </div>
    );
};

export default ProductsAll;