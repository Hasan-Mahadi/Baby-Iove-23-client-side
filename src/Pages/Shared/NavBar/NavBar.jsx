import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { FaAngleDown, FaBorderAll } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Animationbaby from './Animationbaby - 1699376648201.json';
import { AuthContext } from '../../../Providers/AuthProvider';
import { CgProfile } from "react-icons/cg";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }


    return (
        <div className="navbar  	bg-cyan-300	">

            <div className='' style={{ width: '300px', height: '50px' }}>
                <Lottie className='' animationData={Animationbaby} loop={true} />
            </div>

            <div className="navbar-center ">
                <a className="btn btn-ghost mr-50   normal-case italic font-bold text-4xl	">Baby <span className='text-red-600	'>Love</span>.</a>
            </div>


            <div className="navbar-start">

                <div className="dropdown ml-40">



                    <NavLink to="/"
                        title='Go to all Products'

                        className=''>
                        <label tabIndex={0} className="btn btn-ghost normal-case">
                            <div className='flex gap-px'>
                                <div className='text-xl mt-2 '>
                                    < FaBorderAll />
                                </div>
                                <div className='text-lg	flex '>
                                    <div><p className='font-bold ml-1 mt-1 italic'>All Products</p></div>
                                    <div className='mt-2.5'> <FaAngleDown /></div>
                                </div>
                            </div>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>  */}
                        </label>
                    </NavLink>





                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-200 rounded-box w-52">


                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-green-600' : '')} >Homepage</NavLink></li>

                        <li><NavLink className={({ isActive }) => (isActive ? 'text-green-600' : '')}>blogs</NavLink></li>

                        <li><NavLink className={({ isActive }) => (isActive ? 'text-green-600' : '')}>About</NavLink></li>
                    </ul>
                </div>


                {/* ----------blogs---------- */}




                <div className='ml-15'>
                    <label tabIndex={0} className="btn btn-ghost normal-case">
                        <div className='flex gap-px font-bold text-lg italic'>

                            <NavLink to="blogs/"
                                title='Blogs'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : '')} >
                                Blog</NavLink>
                        </div>


                    </label>
                </div>

                <div className='ml-5'>
                    <label tabIndex={0} className="btn btn-ghost normal-case">
                        <div className='flex gap-px font-bold text-lg italic'>

                            <NavLink to="about/"
                                title='abouts' className={({ isActive }) => (isActive ? 'text-blue-600' : '')} >About</NavLink>
                        </div>


                    </label>
                </div>










            </div>

            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>


                {
                    user ? <>
                        <button onClick={handleLogOut} className=' btn btn-primary  '> <p className='text-xl text-black'><CgProfile /></p>LogOut</button>
                    </> :

                        <>  <div className='mr-5'>
                            <label tabIndex={0} className="btn btn-ghost normal-case">
                                <div className='flex gap-px font-bold text-lg italic'>

                                    <NavLink to="login/"
                                        title='please login first' className={({ isActive }) => (isActive ? 'text-blue-600' : '')} >Login</NavLink>
                                </div>


                            </label>
                        </div>

                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;