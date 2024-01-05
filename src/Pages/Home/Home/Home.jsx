import React, { useEffect } from 'react';
import './Home.css';

import Aos from 'aos';
import 'aos/dist/aos.css'

import Banner from './Banner';
import Card from './Card';
import Testimonial from '../../Testimonial';
import Latest from '../../Latest';
import Comments from '../../Comments';



const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, [])

    return (

        <section className='bg'>
            <div className=''>




                <div className=''>

                    <Banner></Banner>

                </div>

                <div className=''>
                    <Card></Card>

                    <div className='text-center mt-40 mb-20 font-bold ' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className='text-7xl text-cyan-600  '>Testimonial</h1>
                        <p className='font-bold  text-3xl underline '>For</p>
                        <p className='text-4xl'>All <span className='text-red-500'>kids</span> Products</p>


                    </div>


                    <Testimonial></Testimonial>
                    <Latest></Latest>
                    <Comments></Comments>
                </div>


            </div>
        </section>


    );
};

export default Home;