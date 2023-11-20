import React from 'react';
import './Home.css';

import Banner from './Banner';
import Card from './Card';



const Home = () => {
    return (

        <section className='bg'>
            <div className=''>




                <div className=''>

                    <Banner></Banner>

                </div>
               
                <div className=''>
                    <Card></Card>
                </div>


            </div>
        </section>


    );
};

export default Home;