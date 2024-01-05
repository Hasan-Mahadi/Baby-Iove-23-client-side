import React from 'react';
import { FcRating } from "react-icons/fc";
import Marquee from "react-fast-marquee";



const Testimonial = () => {


    return (
        <div className=' '>
            <Marquee className='' gradientColor='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' pauseOnHover speed={100} >
                <div className="card hover:text-l transform hover:scale-110  transition  bg-cyan-600 bg-base-100 ml-20 shadow-xl w-72 glass mb-10">
                    <figure><img className='w-32 mt-5 rounded-full' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1704296492~exp=1704297092~hmac=cf449fb3060b7c4d1cd38621fcca66c30884e59db17d1717c9865ceb60161c89" alt="car!" /></figure>

                    <div className='flex gap-1 mt-3 ml-24'>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                    </div>

                    <div className="card-body">

                        <h1 className='font-bold text-center text-cyan-200'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis asperiores ab aliquid <span className='text-2xl font-bold text-cyan-300'>Alhamdulillah !!!</span>
                        </h1>

                    </div>
                </div>
                <div className="card hover:text-l transform hover:scale-110  transition  bg-cyan-600 bg-base-100 ml-20  shadow-xl w-72 glass mb-10">
                    <figure><img className='w-32 mt-5 rounded-full' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1704296492~exp=1704297092~hmac=cf449fb3060b7c4d1cd38621fcca66c30884e59db17d1717c9865ceb60161c89" alt="car!" /></figure>

                    <div className='flex gap-1 mt-3 ml-24'>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                       
                    </div>



                    <div className="card-body">

                        <h1 className='font-bold text-center'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis asperiores ab aliquid <span className='text-2xl font-bold text-cyan-300'>beautifull !!!</span>
                        </h1>

                    </div>
                </div>
                <div className="card hover:text-l transform hover:scale-110  transition bg-cyan-600 bg-base-100 ml-40  shadow-xl w-72 glass mb-10">
                    <figure><img className='w-32 mt-5 rounded-full' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1704296492~exp=1704297092~hmac=cf449fb3060b7c4d1cd38621fcca66c30884e59db17d1717c9865ceb60161c89" alt="car!" /></figure>

                    <div className='flex gap-1 mt-3 ml-24'>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                      
                    </div>



                    <div className="card-body">

                        <h1 className='font-bold text-center text-cyan-200'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis asperiores ab aliquid <span className='text-2xl font-bold text-cyan-300'>Good!!!</span>
                        </h1>

                    </div>
                </div>

                <div className="card hover:text-l transform hover:scale-110  transition bg-cyan-600 bg-base-100 ml-20  shadow-xl w-72 glass mb-10">
                    <figure><img className='w-32 mt-5 rounded-full' src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1704296492~exp=1704297092~hmac=cf449fb3060b7c4d1cd38621fcca66c30884e59db17d1717c9865ceb60161c89" alt="car!" /></figure>

                    <div className='flex gap-1 mt-3 ml-24'>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                        <p><FcRating /></p>
                    </div>




                    <div className="card-body">

                        <h1 className='font-bold text-center'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis asperiores ab aliquid <span className='text-2xl font-bold text-cyan-300'>Fantastic!!!</span>
                        </h1>

                    </div>
                </div>


            </Marquee>
        </div>
    );
};

export default Testimonial;