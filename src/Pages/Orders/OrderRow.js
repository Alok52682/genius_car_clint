import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handelDelete, handelStatusUpdate }) => {
    const { _id, serviceName, price, customarName, email, phone, serviceId, status } = order;
    const [orderService, setOrderService] = useState();
    useEffect(() => {
        fetch(`https://genius-car-server-mu-eight.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data);
            })
    }, [serviceId])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='text-red-500 btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-12">
                            {orderService?.img && <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customarName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button onClick={() => handelStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;