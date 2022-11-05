import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { img, price, title, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-xl">
            <div className='h-3/5 p-5'>
                <img src={img} className='h-full w-full rounded-lg' alt="Shoes" />
            </div>
            <div className="card-body h-2/5 relative">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="card-actions justify-between mb-4 items-center absolute bottom-3 left-3 right-3">
                    <p className='text-red-500 text-2xl font-semibold text-start'>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-warning border-none hover:text-slate-100 rounded-lg">Check Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;