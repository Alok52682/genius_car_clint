import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(authContext);
    const navigate = useNavigate()

    const handelPlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customarName: `${form.firstName.value} ${form.lastName.value}`,
            email: user?.email || 'unregister',
            phone: form.phone.value,
            messege: form.messege.value
        }
        fetch(`https://genius-car-server-mu-eight.vercel.app/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(order)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Success:');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <form onSubmit={handelPlaceOrder}>
                <h2 className="text-4xl text-red-500 font-bold">{title}</h2>
                <h2 className="text-3xl text-yellow-500 font-bold">Price: ${price}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full input-warning" required />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full input-warning" required />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full input-warning" required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full input-warning" />
                </div>
                <textarea name='messege' className="textarea textarea-bordered textarea-error h-44 w-full my-5" placeholder="Drop your openion"></textarea>
                <div className='text-center'>
                    <input className='btn btn-warning btn-outline mb-5' type="submit" value="Place Your Order" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;