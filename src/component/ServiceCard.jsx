import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/servicescard.css';

const ServiceCard = (props) => {
    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200, });
    })

    const roundClass = ['s-card-img w-20 h-20 rounded-full mx-auto flex justify-center items-center my-8 relative ', props.rclass]

    return (
        <>
            <div className="service-card max-w-[32%] py-12 relative px-3 rounded-lg " >
                <div className={roundClass} >
                    <i className="absolute text-4xl text-white">{props.icon}</i>
                </div>
                <div className="s-card-content mt-12">
                    <h4 className='text-center text-2xl py-3'>{props.heading}</h4>
                    <p>{props.pera}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard