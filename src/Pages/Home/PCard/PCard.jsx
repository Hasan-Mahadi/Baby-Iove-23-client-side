import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const PCard = ({ products }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, [])

    const { _id, img, title, details, price,rating } = products;

    return (
        <div className="card w-64  rounded-lg  bg-cyan-500 bg-base-100 shadow-xl " data-aos='fade-down-right'>
            <figure className='max-w-sm rounded-lg hover:text-7xl transform hover:scale-110  transition delay-150 duration-300 ease-in-outoverflow-hidden 	 '>
                <img className='h-48 w-64  rounded-lg ' src={img} alt="" />
            </figure>
            <p className='text-center mt-1 font-bold text-black'>{title}</p>
            <div className="mt-3 text-center">
            <h1 className='font-bold'><span className='text-black'>$</span>{price}.00</h1>
                <p><small>{details}</small></p>
            
           <div className='mb-5'>
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar/>}
              placeholderSymbol={<FaStar className='text-warning'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            >
              
            </Rating>
            <span className='font-bold'>  {rating?.number}</span>
           </div>
                <div className=" justify-center mb-5 ">
                <Link to={`/productsdtls/${_id}`}> <button className="btn btn-primary 	rounded-full  text-cyan-200 bg-cyan-700   "><p className='font-bold '>Read More</p><  FaArrowRight /> </button></Link>
                </div>

            </div>
        </div>
    );
};


export default PCard;