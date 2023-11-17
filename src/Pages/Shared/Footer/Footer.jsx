import Lottie from 'lottie-react';
import React from 'react';
import Animationbaby from './Animationbaby - 1699376648201.json';
import { Link } from 'react-router-dom';
import moment from 'moment'
import {BsStopwatchFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer  bg-cyan-300 rounded-lg text-base-content">

      <aside>
        <div className='ml-20' style={{ width: '200px', height: '' }}>
          <Lottie className='' animationData={Animationbaby} loop={true} />
        </div>
        <a className="btn btn-ghost mb-5 ml-20  normal-case italic font-bold text-4xl	">Baby <span className='text-red-600	'>Love</span>.</a>
      
   
 
      </aside>
     
      
        <nav className='mt-20'>
          <header className="footer-title mb-5 ">Services</header>
          <Link  to="blogs/" className="link link-hover">Blogs</Link>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='mt-20'>
          <header className="footer-title mb-5">Company</header>
          <Link  to="about/" className="link link-hover">About us</Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className='mt-20'>
          <header className="footer-title mb-5">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
         
          <a className="link link-hover"> © 2023 Baby Love. All Rights </a>
        <div className='flex'>
        <div className='mt-1  text-xl'><BsStopwatchFill></BsStopwatchFill></div>
      <div className=' ml-2'>    <p className='font-bold text-xl italic text-red-600'> {moment().format("dddd, MMMM   Do, YYYY,   h:mm:ss a")}</p></div>
        </div>
        
        </nav>
     
     


    </footer>
    
  );
};

export default Footer;