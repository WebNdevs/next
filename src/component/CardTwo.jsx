import React, { useEffect, useState } from 'react';
import '../css/cardtwo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CardTwo = (props) => {

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])
    const add_class = ['c-two-right ps-10 pe-3 w-full ', " " + props.class];

    return (
        <>
            <div className="card-two w-full flex justify-center items-center gap-5 w-full ">
                <div className="c-two-left w-full" data-aos={props.aosfirst}  >
                    <img src={props.image} className={props.img_class + " max-h-[500px] w-full"} alt="Card tow imgess" />
                </div>
                <div className={add_class} data-aos={props.aossecond} >
                    <h2 className='pb-6 text-4xl'>{props.heading}</h2>
                    <p>{props.pera}</p>
                    <button className='mt-5 mb-8'><Link to='/contact' className={'border hidden   px-6 rounded-full py-3 ' + props.btn}>Contact</Link></button>
                </div>
            </div>
        </>
    )
}

export default CardTwo;