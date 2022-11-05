import React from 'react';

const Contact = () => {
    return (
        <div className='border bg-black text-white mb-24 rounded-xl p-20 flex justify-around'>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/Gv22KKM/calendar-icon-time-icon-png-favpng-AZvdif-QYunc-Z3-NJt-Xe-Ptdv0-Cv-removebg-preview.png" className='w-14 h-14' alt="calender" />
                </div>
                <div>
                    <p className='font-semibold'><small>We are open monday-friday</small></p>
                    <p className='text-xl font-bold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/ChT89ch/call-removebg-preview.png" className='w-14 h-14' alt="calender" />
                </div>
                <div>
                    <p className='font-semibold'><small>Have a question?</small></p>
                    <p className='text-xl font-bold'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/4Nk1kWG/images-removebg-preview.png" className='w-14 h-14' alt="calender" />
                </div>
                <div>
                    <p className='font-semibold'><small>Need a repair? our address</small></p>
                    <p className='text-xl font-bold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;