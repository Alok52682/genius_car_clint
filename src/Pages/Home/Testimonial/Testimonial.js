import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonial = () => {
    return (
        <div className='my-20 text-center'>
            <div>
                <p className="text-2xl font-bold text-red-500">Testimonial</p>
                <h2 className='text-5xl font-extrabold my-3'>What Customer Says</h2>
                <p className="pb-6 text-sm text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-10'>
                <div className='border p-10 text-justify rounded-xl relative'>
                    <img src="https://i.ibb.co/cgsNDnr/q-removebg-preview.png" className='w-24 absolute right-1/4 top-4' alt="" />
                    <div className='flex gap-2 items-center mb-5'>
                        <div>
                            <img src="https://i.ibb.co/sgDHVPX/photo-1535713875002-d1d0cf377fde-ixlib-rb-4-0.jpg" className='w-12 rounded-full' alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Awlad Hossain</h2>
                            <h2 className='font-semibold text-lg text-slate-400 text-start'>Businessman</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-slate-400 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div className=' text-yellow-500 mt-5'>
                        <StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" />
                    </div>
                </div>
                <div className='border p-10 text-justify rounded-xl relative'>
                    <img src="https://i.ibb.co/cgsNDnr/q-removebg-preview.png" className='w-24 absolute right-1/4 top-4' alt="" />
                    <div className='flex gap-2 items-center mb-5'>
                        <div>
                            <img src="https://i.ibb.co/QktcBmg/images-q-tbn-ANd9-Gc-Qg-FCPc9763-NQMj-F92e-KIHpym-V2u-p-Yux-EY4-Yjap-FOKg-s.jpg" className='w-12 rounded-full' alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>Mr.Alex</h2>
                            <h2 className='font-semibold text-lg text-slate-400 text-start'>Businessman</h2>
                        </div>
                    </div>
                    <div>
                        <p className='text-slate-400 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div className=' text-yellow-500 mt-5'>
                        <StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" /><StarIcon className="h-6 w-6 inline" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;