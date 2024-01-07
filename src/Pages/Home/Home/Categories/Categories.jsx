import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Categories.css';
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaBorderAll, } from 'react-icons/fa';
import PCard from '../../PCard/PCard';
import Search from './Search';


const Categories = () => {
    const [categories, setcategories] = useState([]);

    const { id } = useParams();
    const categorisProdut = useLoaderData();


    useEffect(() => {
        fetch('https://baby-love-23-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
            .catch(error => console.error(error))
    }, [])
 

    return (

        <section className='bg4'>
            <div className='bg4 '>

           

                <div className='flex pt-14'>
                    <div className="card w-72 bg4    ml-20 bg-base-100 shadow-xl">
                        <figure className=''><img className='' src="https://img.freepik.com/free-psd/baby-boy-mockup_23-2147685643.jpg?w=996&t=st=1700841419~exp=1700842019~hmac=3d050d79e7de460753d823791c0e365860eaa5903c4046e807e6607114f42d2b" alt="Shoes" /></figure>

                        <div className="card-body  ">
                            <div className='flex underline underline-offset-8'>
                                <div className="font-bold text-2xl 	">ALL Categories</div>
                                <div className='mt-3 ml-1'>
                                    <FaBorderAll />
                                </div>
                            </div>
                            <div className=' mt-5   font-bold' >
                                {
                                    categories.map(category => <p
                                        className='mt-5 btn btn-ghost font-bold normal'
                                        key={category.id}>

                                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600  ' : '')} to={`/categories/${category.id}`}>{category.name} </NavLink><  FaArrowRight />


                                    </p>)
                                }
                            </div>



                        </div>
                    </div>






                    <div >
                        <button className=" hover:bg-blue-700 font-bold py-2 px-4 ml-96  mb-10 font-bold  text-2xl rounded-full text-cyan-200 bg-cyan-700">
                            <h1 className=''>Items For Category:   {categorisProdut.length}</h1>
                        </button>

                        <div className='  ml-40 grid grid-cols-3 gap-14'>
                            {
                                categorisProdut.map(products => <PCard
                                    key={products._id}
                                    products={products}
                                ></PCard>)
                            }
                        </div>

                    </div>

                   <Search></Search>



                </div>



                <div className='text-center mt-28 '>
                    <Link to='/'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl  mb-10 text-cyan-200 "> <  FaArrowLeft /> <p className='font-bold '> Back to home</p> </button></Link>

                </div>
            </div>
        </section>
    );
};

export default Categories;

