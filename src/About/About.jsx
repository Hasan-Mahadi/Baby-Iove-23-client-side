import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='bg1'>
            <div className='bg1 pt-20'>
            <div className=''>
                <h4 className='text-cyan-600	  font-bold italic text-5xl  text-center mb-5'>Wellcome To Our  <span className='text-red-500'>About</span> Page!!!</h4>
            </div>

            <div className=' p-20 bg '>
            <div className="collapse bg1 collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title font-bold italic text-cyan-600 text-xl text-center font-medium">
              About Our Products
                </div>
                <div className="collapse-content">
                 <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic accusamus voluptate dolores in natus eaque omnis tempore laboriosam laborum et similique, suscipit cupiditate enim non vero ipsa, distinctio tenetur?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt enim ex accusamus id minima ipsam tempora odio non hic deleniti nam unde neque quae, cum dignissimos aliquam commodi dolore. Architecto!
                 </p>
                </div>
            </div>
            <div className="collapse bg1 collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-cyan-600 font-bold italic text-xl text-center  font-medium">
                   More About Our Service
                </div>
                <div className="collapse-content">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic accusamus voluptate dolores in natus eaque omnis tempore laboriosam laborum et similique, suscipit cupiditate enim non vero ipsa, distinctio tenetur?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt enim ex accusamus id minima ipsam tempora odio non hic deleniti nam unde neque quae, cum dignissimos aliquam commodi dolore. Architecto!
                 </p>
                </div>
            </div>
            <div className="collapse bg collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-cyan-600 text-center font-bold italic text-xl font-medium">
            More And More About me!
                </div>
                <div className="collapse-content">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic accusamus voluptate dolores in natus eaque omnis tempore laboriosam laborum et similique, suscipit cupiditate enim non vero ipsa, distinctio tenetur?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt enim ex accusamus id minima ipsam tempora odio non hic deleniti nam unde neque quae, cum dignissimos aliquam commodi dolore. Architecto!
                 </p>
                </div>
            </div>
        </div>


        <div className='text-center mt-10  hover:text-3xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='/'> <button className="btn btn-primary bg-cyan-500	 mb-10 text-1xl ml-20"> Back to home </button></Link>

                </div>

            </div>
        </section>
    );
};

export default About;