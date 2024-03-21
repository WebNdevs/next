import React, { useRef, useEffect, useState } from 'react';
import '../css/counter.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counter = (props) => {
    const [count, setCount] = useState(props.start);
    const sectionRef = useRef(null);
    const bg_class = ["counter-round my-2 w-20 h-20  rounded-full relative flex justify-center items-center ", props.bg]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && count < props.end) {
                    // Increment the counter when the section reaches the bottom
                    setCount(prevCount => prevCount + 1);
                }
            },
            {
                // root: null,
                // rootMargin: '0px',
                // threshold: 1.0 // IntersectionObserver trigger when section fully enters the viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [count]); // Re-run effect when count changes

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])
    return (
        <div data-aos='flip-up' >
            <div className="counter-card flex flex-col justify-center items-center py-3 rounded-xl w-[300px] bg-white " >
                <div className={bg_class}>
                    <i className='absolute text-4xl text-white'>{props.icon}</i>
                </div>
                <div className="text-xl">
                    <h3 className='py-2 font-normal'>{props.heading}</h3>
                    <div className="counter text-center text-[#0099d9] font-bold ">{count}</div>
                    <div className="section" ref={sectionRef}></div>
                </div>
            </div>
        </div >
    );
}

export default Counter;
