import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { FaBorderAll } from 'react-icons/fa';

const Latest = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, [])


    return (
        <div className='pb-10 flex gap-20 ml-40 mt-40'>



            <div className="card w-2/4 bg-cyan-500 bg-base-100 shadow-xl" data-aos='fade-down-right'>
                <figure><img src="https://img.freepik.com/free-photo/top-view-pregnancy-announcement-with-baby-items_23-2150252862.jpg?size=626&ext=jpg&uid=R104361349&ga=GA1.1.1969347999.1690546895&semt=ais" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl bg-cyan-600 text-cyan-200 mb-5  ">Latest Products Blogs</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea a commodi perferendis illum error dolorum mollitia pariatur voluptate. Non blanditiis similique distinctio neque, facilis ex nam molestias sequi ducimus sapiente.

                    <div className="card-actions justify-end mt-3">

                        <Link to='blogs/'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl   text-cyan-200 "><p className='font-bold'>Go To Latest</p><FaBorderAll /> </button></Link>
                    </div>

                </div>
            </div>

            <div className='mt-20' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="4000">

                <h1 className='text-9xl font-bold text-cyan-600'>Our Latest Products</h1>
                <h1 className='text-2xl mt-10 ml-40 font-bold mb-5'>For Kides</h1>
                <h1 className='text-6xl font-bold ml-2'>For <span className='text-red-500'>Loves.</span></h1>
            </div>
        </div>
    );
};

export default Latest;