import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { authContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext);


    const handelLogOut = () => {
        logOut()
            .then(() => { }).catch(err => { })
    }

    const menuItems = <>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-red-500 text-white' : undefined
            } to='/home'>Home</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-red-500 text-white' : undefined
            } to='/about'>About</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-red-500 text-white' : undefined
            } to='/services'>Services</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-red-500 text-white' : undefined
            } to='/orders'>Orders</NavLink></li>
        {
            user ?
                <li onClick={handelLogOut} className='font-semibold mr-3'><Link>Log Out</Link></li>
                :
                <li className='font-semibold mr-3'><NavLink
                    className={({ isActive }) =>
                        isActive ? 'bg-red-500 text-white' : undefined
                    } to='/login'>Log In</NavLink></li>

        }
    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-32 h-2">
                    <img src={logo} className='h-full' alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid && <Link className="btn btn-outline btn-warning font-bold">{user?.displayName}</Link>}
            </div>
        </div>
    );
};

export default Header;