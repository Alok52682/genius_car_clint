import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const PopularProduct = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(services);
    return (
        <div className='my-20 text-center'>
            <div>
                <p className="text-2xl font-bold text-red-500">Popular Products</p>
                <h2 className='text-5xl font-extrabold my-3'>Browse Our Products</h2>
                <p className="pb-6 text-sm text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-5'>
                {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
            <button className="btn btn-outline btn-warning rounded-lg">More Services</button>
        </div>
    );
};

export default PopularProduct;