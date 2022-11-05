import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(authContext);
    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://genius-car-server-mu-eight.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, refresh, logOut])
    const handelDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this?')
        if (agree) {
            fetch(`https://genius-car-server-mu-eight.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRefresh(!refresh)
                })
                .catch(err => console.log(err))
        }
    }

    const handelStatusUpdate = id => [
        fetch(`https://genius-car-server-mu-eight.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';

                    const newOrders = [...remaining, approving];
                    setOrders(newOrders)

                }
            })
            .catch(err => console.log(err))
    ]

    return (
        <div>
            <h2 className="text-5xl font-bold text-red-500">You have {orders.length} orders </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(order => <OrderRow key={order._id} order={order} handelDelete={handelDelete} handelStatusUpdate={handelStatusUpdate} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;