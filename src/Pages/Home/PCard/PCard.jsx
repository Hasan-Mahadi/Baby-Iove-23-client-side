import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const PCard = ({ products }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, [])

    const { _id, img, title, details, price } = products;

    return (
        <div className="card w-64 bg-cyan-500  bg-base-100 shadow-xl   " data-aos='fade-down-right'>
            <figure>
                <img src={img} alt="" />
            </figure>
            <p className='text-center mt-1  text-cyan-600'>{title}</p>
            <div className="card-body text-center">
            <h1>${price}.00</h1>
                <p><small>{details}</small></p>
           
                <div className="card-actions justify-end mt-3">

                </div>

            </div>
        </div>
    );
};


export default PCard;