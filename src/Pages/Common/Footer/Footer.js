import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img src={logo} width="80" height="65" alt="" />
                <p>Edwin Diaz is a software and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/' className="link link-hover">Service</Link>
                <Link to='/' className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/' className="link link-hover">Why Car Doctor</Link>
                <Link to='/' className="link link-hover">About</Link>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <Link to='/' className="link link-hover">Support Center</Link>
                <Link to='/' className="link link-hover">Feedback</Link>
                <Link to='/' className="link link-hover">Accesbility</Link>
            </div>
        </footer>
    );
};

export default Footer;