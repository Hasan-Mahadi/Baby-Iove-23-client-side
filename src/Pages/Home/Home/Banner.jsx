import React from 'react';
import { Link } from 'react-router-dom';

import {FaBorderAll,  } from 'react-icons/fa';


const Banner = () => {
  return (

    <section className=''>




      <div className='text-end w-full'>

        <div className="carousel	w-full		 mt-5 mb-10 	">
          <div id="slide1" className="carousel-item relative w-full	">

            <img className='w-5/6 h-5/6 ml-28 rounded-lg ' src="https://img.freepik.com/free-photo/father-with-toddler-daughter_1303-9155.jpg?w=1060&t=st=1698767523~exp=1698768123~hmac=1e252a5d0c09a4d6572817d3343a02db56414d3b9565ce703b5dd3bbbfec3140" />

            <div className="absolute flex   transform -translate-y-1/2 left-5 right-5 bottom-1/4 ml-32 ">

              <div className='text-cyan-400 '>
                <h1 className='text-8xl  font-bold italic'>Best <span className='text-red-600'>Babys.</span> <br /> <span className='text-2xl'>Products</span> </h1>
                <h2 className='text-6xl font-bold italic'>For All <span className='text-red-600'>Kids!</span></h2>

               <p> Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur </p>
              


       
        <div className='text-center hover:text-3xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go To  <span className='text-red-600'>Categories</span></p> <FaBorderAll/> </button></Link>

                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900 ml-10	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go to al <span className='text-red-600'>products</span> </p><FaBorderAll/> </button></Link>


                </div>
              
      


       
                




              </div>
             

            </div>
            
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1/4 mr-40 ">


              <a href="#slide4" className="btn btn-circle  bg-orange-600 mr-6">❮</a>
              <a href="#slide2" className="btn btn-circle  bg-orange-600 ">❯</a>
            </div>
          </div>




          <div id="slide2" className="carousel-item relative  w-full">
            <img className='w-5/6 h-5/6 ml-28 rounded-lg' src="https://img.freepik.com/free-photo/man-boy-play-chair_8353-106.jpg?w=1060&t=st=1698767791~exp=1698768391~hmac=acf1adddcb6e9c92251617bbe3ccde404919c8a335d0ec34464a58312ae793df" />


            <div className="absolute flex   transform -translate-y-1/2 left-5 right-5 bottom-1/4 ml-32 ">

              <div className='text-cyan-400'>
                <h1 className='text-8xl font-bold italic'>Best <span className='text-red-600'>Babys</span> <br /> <span className='text-2xl'>Products</span> </h1>
                <h2 className='text-6xl font-bold italic'>For All <span className='text-red-600'>Kids</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur </p>

                <div className='text-center hover:text-3xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go To Categories</p><FaBorderAll/> </button></Link>

                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900 ml-10	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go to al products</p><FaBorderAll/> </button></Link>


                </div>

              </div>

            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/4 mr-40">
              <a href="#slide1" className="btn btn-circle bg-orange-600 mr-6">❮</a>
              <a href="#slide3" className="btn btn-circle  bg-orange-600">❯</a>
            </div>
          </div>



          <div id="slide3" className="carousel-item relative w-full">
            <img className='w-5/6 h-5/6 ml-28 rounded-lg' src="https://img.freepik.com/free-photo/little-boy-sits-green-armchair-before-christmas-tree_8353-118.jpg?w=1060&t=st=1698769067~exp=1698769667~hmac=aab98d3aed87191811aa33c33598871c6f88fba210a571108ac7a29246a2c515" />


            <div className="absolute flex   transform -translate-y-1/2 left-5 right-5 bottom-1/4 ml-32 ">

              <div className='text-cyan-400'>
                <h1 className='text-8xl font-bold italic'>Best <span className='text-red-600'>Babys</span> <br /> <span className='text-2xl'>Products</span> </h1>
                <h2 className='text-6xl font-bold italic'>For All <span className='text-red-600'>Kids</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur </p>

                <div className='text-center hover:text-3xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go To Categories</p><FaBorderAll/> </button></Link>

                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900 ml-10	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go to al products</p><FaBorderAll/> </button></Link>


                </div>

              </div>

            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/4 mr-40">
              <a href="#slide2" className="btn btn-circle bg-orange-600 mr-6">❮</a>
              <a href="#slide4" className="btn btn-circle bg-orange-600">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative  w-full">
            <img className='w-5/6 h-5/6 ml-28 rounded-lg' src="https://img.freepik.com/free-photo/happy-smiling-kid-with-cozy-outfits-room_114579-2891.jpg?w=1060&t=st=1698769512~exp=1698770112~hmac=e66fca42190cd1225c327cb730d5197e972b9dad1eed89adb10ba51f734a3b05" />


            <div className="absolute flex   transform -translate-y-1/2 left-5 right-5 bottom-1/4 ml-32 ">

              <div className='text-cyan-400'>
                <h1 className='text-8xl font-bold italic'>Best <span className='text-red-600'>Babys</span> <br /> <span className='text-2xl'>Products</span> </h1>
                <h2 className='text-6xl font-bold italic'>For All <span className='text-red-600'>Kids</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur </p>

                <div className='text-center hover:text-3xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go To Categories</p><FaBorderAll/> </button></Link>

                    <Link to='categories/'> <button className="btn btn-primary bg-cyan-900 ml-10	rounded-full  text-1xl  mt-10 text-cyan-200 "><p className='font-bold'>Go to al products</p><FaBorderAll/> </button></Link>


                </div>

              </div>

            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/4 mr-40">
              <a href="#slide3" className="btn btn-circle bg-orange-600 mr-6">❮</a>
              <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
};

export default Banner;