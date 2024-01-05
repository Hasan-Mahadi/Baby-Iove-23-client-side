import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const BuyProducts = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/categories/${category_id}';

    const {user} = useContext(AuthContext);



    const products = useLoaderData();
    const { price,title } = products;


  const handleBuyProduct = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = user?.email;
    const order ={
        CustomarName: name,
        email,
        date,
    
        price:price
    }
    console.log(order);
    Swal.fire({
        title: "Alhamdulillah !",
        text: "Your Order has been Recorded! ",
       
        icon: "success"
     
      });


navigate(from,{replace:true});


   


  }

    return (
        <div className=''>

            <div className="hero-content min-h-screen flex-col lg:flex-row-reverse" >

                <div className="card   shadow-2xl bg-base-100 bg-cyan-500 "  >
                <p className='text-center mt-5 font-bold text-black'>{title}</p>

                    <form onSubmit={handleBuyProduct} className="card-body ">

                        <div className='grid grid-cols-1  md:grid-cols-2 gap-y-4 gap-x-12'>

                            <div className="form-control ">
                                <label className="label ">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="name" name='name'defaultValue={user?.name} placeholder="name" className="input input-bordered w-64  " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered  w-64" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered  w-64" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="contact" name='contact' placeholder="+088" className="input input-bordered  w-64 " required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Use Promo Code</span>
                                </label>
                                <input type="code" name='promo code'  placeholder="code"className="input input-bordered  w-64 " required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">  Due Amount</span>
                                </label>
                                <input  defaultValue= {'$'  +  price+ '.00'} name='price'className="input input-bordered text-center w-64 " required />

                            </div>
                            <div className="form-control text-center  mt-6">

                                <input className="font-bold text-cyan-200 transform hover:scale-110  transition delay-150 duration-300 ease-in-out   btn btn-primary ml-40 btn-block" type="submit" value="Take Confirm" />
                                
                            </div>
                        </div>


                    </form>

                </div>

            </div>
        </div>
    );
};

export default BuyProducts;