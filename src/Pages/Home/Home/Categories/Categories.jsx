import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Categories.css';
import { Link, NavLink, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaBorderAll, } from 'react-icons/fa';


const Categories = () => {
    const [categories, setcategories] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
            .catch(error => console.error(error))
    }, [])

    return (

        <section className='bg4'>
            <div className='bg4 '>


                <div className='flex'>
                    <div className="card w-72 bg4    ml-40 bg-base-100 shadow-xl">
                        <figure className='mt-10'><img className='' src="https://img.freepik.com/free-photo/little-baby-sits-wicker-basket_1304-5640.jpg?w=996&t=st=1700238916~exp=1700239516~hmac=48aeb30379ac487b3eb54dff8f4b44b20ed8528a57b12d1e779fbf7cd8103ba5" alt="Shoes" /></figure>

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
                                        className='mt-5 btn btn-ghost normal'
                                        key={category.id}>

                                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600  btn btn-ghost normal' : '')} to={`/categories/${category.id}`}>{category.name} </NavLink><  FaArrowRight />


                                    </p>)
                                }
                            </div>



                        </div>
                    </div>
                    <div className='ml-96 mt-20 font-bold  text-2xl'>
                        <h1>Details for category: {id}</h1>
                    </div>
                </div>



                <div className='text-center mt-28 '>
                    <Link to='/'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl  mb-10 text-cyan-200 "> <  FaArrowLeft /> <p className='font-bold '> Back to home</p> </button></Link>

                </div>
            </div>
        </section>
    );
};

export default Categories;

