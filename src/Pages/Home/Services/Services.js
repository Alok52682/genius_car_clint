import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://genius-car-server-mu-eight.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);
    return (
        <div className='my-20 text-center'>
            <div>
                <p className="text-2xl font-bold text-red-500">Service</p>
                <h2 className='text-5xl font-extrabold my-3'>Our Service Area</h2>
                <p className="pb-6 text-sm text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-5'>
                {
                    services && services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <button className="btn btn-outline btn-warning rounded-lg">More Services</button>
        </div>
    );
};

export default Services;