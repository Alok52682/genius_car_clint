import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className="absolute w-1/2 right-5 top-1/2 rounded-lg shadow-2xl border-8 border-warning" alt='' />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-2xl text-red-500 font-bold">About Us</h1>
                    <h1 className="text-5xl font-extrabold my-5">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-4 text-sm text-slate-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 text-sm text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning border-none hover:text-slate-100 rounded-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;