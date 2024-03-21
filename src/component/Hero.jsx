import React, { useEffect } from 'react'
import '../css/hero.css';
import bubble1 from '../assets/bubble2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 500,
        })
    }, [])


    return (
        <>
            <div className="home-main min-h-screen md:h-auto w-full">
                <div className="flex relative w-full " data-aos='fade-right' >
                    <div className="w-full relative top-60">
                        <div className="absolute top-10 left-40 w-full h-img-1">
                            <img src={bubble1} alt="bubble" />
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="absolute top-40 right-10 w-full h-img-2">
                            <img src={bubble1} alt="bubble" />
                        </div>
                    </div>
                </div>
                <div className="my-container">
                    <div className="flex justify-center items-end z-0 relative top-40 md:items-center home-hero">
                        <div className="h-h-left w-full  relative" data-aos='fade-right' >
                            <h6 className='text-xl'>{props.title}</h6>
                            <h1 className='text-6xl font-normal py-8  '>{props.heading} </h1>
                            <p className='text-lg'>{props.pera} </p>
                        </div>
                        <div className="h-h-right w-full md:ps-10 relative  pt-[20px]" data-aos='fade-left'  >
                            <div className={"h-r-img1 " + props.img_up}>
                                <img src={props.hero1} alt="" width='100%' className='h-[100%]' />
                            </div>
                            <div className="h-r-img2 absolute top-0">
                                <img src={props.hero2} alt="" width='100%' className='h-[100%]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero