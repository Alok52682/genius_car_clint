import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../api/auth';
import login from '../assets/images/login/login.svg';
import { authContext } from '../Context/AuthProvider';
import Header from '../Pages/Common/Header/Header';

const Register = () => {

    const { createUser, updateUser } = useContext(authContext);

    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then(result => {
            updateUser(username).then(() => console.log('Name Updated')).catch(err => console.log(err))
            console.log(result.user);
            setAuthToken(result);
            form.reset();
        })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Header />
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center p-10">
                    <div className="hidden lg:block lg:w-1/2 bg-cover">
                        <img src={login} alt='Google' className='w-full' />
                    </div>
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-red-500 text-center">Car Doctor</h2>
                        <p className="text-xl text-gray-600 text-center">Sign Up</p>
                        <form onSubmit={handelSignUp}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">UserName</label>
                                <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='name' placeholder='Enter Username' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' placeholder='Enter Email Address' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                </div>
                                <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name='password' placeholder='********' required />
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-red-500 border-none hover:bg-red-700 w-full rounded-xl">Log In</button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/login" className="text-xs text-gray-500 uppercase">or sign In</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;