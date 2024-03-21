import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import AOS from 'aos';
import '../css/card.css';
import 'aos/dist/aos.css';

const Card = (props) => {

    const [icon, setIcon] = useState('');

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });

        if (props.icon) {
            setIcon(<i className="flaticon-office card-icon text-4xl absolute top-6 right-5 text-[#0099d9]">{props.icon}</i>)
        } else {
            setIcon(<img className='card-icon w-[70px] h-[70px] rounded -mb-10 mt-4' src={props.icon_img}  />)
        }

    }, [])

    const add_class = ['card-container lg:w-1/2 ', props.class];

    return (
        <div className={add_class} style={{ animationDuration: '1s', animationDelay: '0.1s' }} data-aos={props.ani} >
            <div className="bg-white rounded-lg px-8">
                <div className="mb-10">
                    <div className="relative flex justify-end items-center">
                        {/* <img className='card-icon w-[100px0] h-[100px] ' src={web} alt="card imgess" /> */}
                        {icon}
                    </div>
                </div>
                <div className="pb-5">
                    <h4 className="text-xl  mb-4 text-left">{props.heading}</h4>
                    <p className="mb-6 text-start">{props.description}</p>
                    <a href={props.link} className="inline-block px-6 py-3 text-primary border border-primary rounded-full card-links">Learn More <FaChevronRight className='card-icons inline-block ' /></a>
                </div>
            </div>
        </div>
    );
};

export default Card;
