import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full" style={{ height: '600px' }}>
            <div className='carousel-img'>
                <img src={image} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl" alt='banner4' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-extrabold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-2/4">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning hover:text-white mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${id === 1 ? 6 : id + 1}`} className="btn btn-circle hover:bg-warning border-none">❮</a>
                <a href={`#slide${id === 6 ? 1 : id + 1}`} className="btn btn-circle hover:bg-warning border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;