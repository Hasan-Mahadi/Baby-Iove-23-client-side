import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { FaBorderAll, } from 'react-icons/fa';

const Card = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='flex ml-48 gap-6 text-center'>

            <div className="card w-64 bg-cyan-500 mb-5 bg-base-100 shadow-xl" data-aos='fade-down-right'>
                <figure><img src="https://img.freepik.com/free-photo/plump-little-girl-sits-white-blanket_8353-432.jpg?w=996&t=st=1700234617~exp=1700235217~hmac=59ec905fa248b88447896086b45adc2507fbb343b401e4aae3bce25c26587fd9" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl ">Babys!</h2>
                    <p>Best Babys Products For Kids For Love <br /> Choose Your Items</p>

                    <div className="card-actions justify-end mt-3">

                        <Link to='categories/:id'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl   text-cyan-200 "><p className='font-bold'>Go To Categories</p><FaBorderAll /> </button></Link>
                    </div>

                </div>
            </div>

            <div className="card w-64 bg-cyan-500 mb-5 bg-base-100 shadow-xl" data-aos='fade-up-right'>
                <div className="card-actions justify-end mt-5 mr-8">

                    <Link to='categories/:id'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl   text-cyan-200 "><p className='font-bold'>Go to all products</p><FaBorderAll /> </button></Link>
                </div>

                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl ">Babys!</h2>
                    <p>Best Babys Products For Kids For Love <br /> Choose Your Items</p>



                </div>
                <figure><img src="https://img.freepik.com/free-photo/portrait-adorable-baby-boy-smiling_23-2148431252.jpg?w=996&t=st=1700239225~exp=1700239825~hmac=1bfde41c4b5893866ef623e5295a99525d79de2ffa3976076397152969e8c913" alt="Shoes" /></figure>

            </div>
            <div className="card w-64 bg-cyan-500 mb-5 bg-base-100 shadow-xl" data-aos='fade-down-left'>
                <figure><img src="https://img.freepik.com/free-photo/little-baby-sits-wicker-basket_1304-5640.jpg?w=996&t=st=1700238916~exp=1700239516~hmac=48aeb30379ac487b3eb54dff8f4b44b20ed8528a57b12d1e779fbf7cd8103ba5" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl ">Babys!</h2>
                    <p>Best Babys Products For Kids For Love <br /> Choose Your Items</p>

                    <div className="card-actions justify-end mt-3">

                        <Link to='categories/:id'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl   text-cyan-200 "><p className='font-bold'>Go To Categories</p><FaBorderAll /> </button></Link>
                    </div>

                </div>
            </div>
            <div className="card w-64 bg-cyan-500 mb-5 bg-base-100 shadow-xl" data-aos='fade-up-left'>

                <div className="card-actions justify-end mt-5 mr-8">

                    <Link to='categories/:id'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl   text-cyan-200 "><p className='font-bold'>Go to all products</p><FaBorderAll /> </button></Link>
                </div>

                <div className="card-body text-center">
                    <h2 className="font-bold text-2xl ">Babys!</h2>
                    <p>Best Babys Products For Kids For Love <br /> Choose Your Items</p>



                </div>
                <figure><img src="https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1700239012~exp=1700239612~hmac=1e1762630a47333b25321ceb2df66d0f73dd6992dc904a9f125852391d53cb93" alt="Shoes" /></figure>
            </div>

        </div>
    );
};

export default Card;