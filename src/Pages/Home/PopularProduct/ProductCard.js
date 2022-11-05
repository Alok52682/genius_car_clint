import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product }) => {
    const { name, price, photo } = product;
    return (
        <div className="card bg-base-100 shadow-xl rounded-xl">
            <figure className="p-8 h-4/5">
                <img src={photo} className='bg-slate-50 rounded-xl h-full f-full' alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center pt-0">
                <div className=' text-yellow-500'><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" />
                </div>
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className='font-semibold text-red-500'>Price : ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;