import { Link } from 'react-router-dom';
import './Login.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Login = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, [])

    return (
        <div className='bg11'>
            <div className='bg11'>
                <h1 className="text-5xl text-center pt-10 font-bold">Login now!</h1>
                <div className="hero min-h-screen bg11 bg-base-200">

                    <div className="hero-content flex-col lg:flex-row-reverse" >

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-cyan-500"data-aos='fade-down-left' >
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className='text-center mt-3'>
                                    <p className='font-bold'>Are you New?  <Link to='/sign'  className='btn btn-primary'>SignUp<FaArrowRight /> </Link></p>
                                </div>
                            </form>
                        </div>



                        <div className="text-center mr-10 lg:text-left" data-aos='fade-down-right'>
                            <img className='rounded-3xl ' src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?size=626&ext=jpg&uid=R104361349&ga=GA1.1.1969347999.1690546895&semt=sph" alt="" />

                        </div>

                    </div>


                </div>
                <div className='text-center mt-28 '>
                    <Link to='/'> <button className="btn btn-primary bg-cyan-600	rounded-full  text-1xl  mb-10 text-cyan-200 "> <  FaArrowLeft /> <p className='font-bold '> Back to home</p> </button></Link>

                </div>
            </div>

        </div>
    );
};

export default Login;