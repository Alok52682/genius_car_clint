import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurTeam = () => {

    const [members, setMembers] = useState();

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    // console.log(services);
    return (
        <div className='my-20 text-center'>
            <div>
                <p className="text-2xl font-bold text-red-500">Team</p>
                <h2 className='text-5xl font-extrabold my-3'>Meet Our Team</h2>
                <p className="pb-6 text-sm text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-5'>
                {
                    members && members.map(member => {
                        return (
                            <div key={member.id} className="card bg-base-100 shadow-xl rounded-xl">
                                <figure className="px-10 pt-10">
                                    <img src={member.photo} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-semibold text-2xl">{member.post}</h2>
                                    <h2 className="card-title text-slate-400 font-bold text-xl">{member.expart}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OurTeam;