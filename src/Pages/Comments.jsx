import React, { useEffect } from 'react';
import './Comments.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Comments = () => {

    useEffect(() => {
        Aos.init({ duration: 4000 });

    }, [])

    return (
        <section className='pb-20 w-9/12  ml-56'>
           
            <h1 className='text-6xl ml-80 font-bold text-cyan-600 pb-10 pt-40 ' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">Comments Box</h1>

            <div className='   rounded-2xl   bg111'>

                <div className="max-w-md gap-20 pt-5 flex">

                    <h1 className=" text-5xl pl-20 font-bold text-cyan-400"> <h1>Enter Your Email... </h1></h1>


                    <div className='pl-40'>
                        <img className=' rounded-2xl ml-80' src="https://img.freepik.com/free-vector/pack-red-mailboxes-isometric-style_23-2147609238.jpg?size=626&ext=jpg&uid=R104361349&ga=GA1.1.1969347999.1690546895&semt=sph" alt="" />
                    </div>

                </div>
                <div className=''>
                    <h1 className='text-cyan-200 font-bold pl-10 pb-1'>Send Email For get any update </h1>
                </div>


                <div className='pb-5 pl-10'>
                    <input type="email" placeholder="Type here@..." className="input input-bordered input-info bg-cyan-200 w-full max-w-xs" />
                </div>
            </div>



        </section>
    );
};

export default Comments;