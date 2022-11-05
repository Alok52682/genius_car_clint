import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from '../../api/auth';
import login from '../../assets/images/login/login.svg';
import { authContext } from '../../Context/AuthProvider';
import Header from '../Common/Header/Header';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {

    const { handleForgetPass, userLogIn } = useContext(authContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('')

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                console.log(result.user);
                setAuthToken(result)
                navigate(from, { replace: true });
            })
            .catch(err => alert(err.messege))
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setEmail(email);
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
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <SocialLogIn />
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handelLogin}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input onBlur={handleEmailBlur} className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' placeholder='Enter Email Address' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <Link onClick={() => handleForgetPass(email)} className="text-xs text-gray-500">Forget Password?</Link>
                                </div>
                                <input className="bg-blue-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name='password' placeholder='********' required />
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-red-500 border-none hover:bg-red-700 w-full rounded-xl">Log In</button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/register" className="text-xs text-gray-500 uppercase">or sign up</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;