import React from 'react'
import '../css/footer.css';
import logo from '../assets/Webndevs logo.webp';
import phone from '../assets/phone.png';
import location from '../assets/map.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-container w-full pt-20  bg-black">
                <div className="my-container">
                    <div className="footer-up flex justify-between items-center text-white border-b border-white pb-4">
                        <div className='w-[25%] up-box'>
                            <img src={logo} alt="Webndevs" className='w-[220px]' />
                        </div>
                        <div className="flex w-[25%] justify-center items-center up-box">
                            <div className="icons">
                                <img src={phone} alt="phone" className='w-12 h-12' />
                            </div>
                            <div className="links ps-3">
                                <a href="tel:+91-9887603015">+91-9887603015</a><br />
                                <a href="mailto:sales@webndevs.com">sales@webndevs.com</a>
                            </div>
                        </div>
                        <div className="flex w-[25%] justify-center up-box">
                            <div className="icons w-[20%]">
                                <img src={location} alt="phone" className='w-12 h-12' />
                            </div>
                            <div className="links w-[80%] ps-2">
                                <a href="">2nd Floor, Plot No 8, Teacher’s Colony Baba Market Ajmer Road, Jaipur</a><br />
                            </div>
                        </div>
                    </div>
                    <div className="footer-down flex w-full justify-between text-white py-5">
                        <div className="f-about d-box w-[35%]">
                            <p>
                                We specialize in the creation of custom software solutions tailored to the specific needs of our clients around the world. Our team of experienced professionals is dedicated to delivering the highest quality products, ensuring that each of our clients receives a unique and innovative solution.
                            </p>
                        </div>
                        <div className="our-services d-box w-[25%] ps-10">
                            <h2 className='text-2xl pb-4'>Services</h2>
                            <ul className='flex flex-col gap-2'>
                                <li> <Link to='/web-development'> Wordpress Development</Link> </li>
                                <li> <Link to='/web-development'> Web Development</Link> </li>
                                <li> <Link to='/web-design'> Web Designing</Link> </li>
                                <li> <Link to='/digital-market'> Digital Marketing</Link> </li>
                                <li> <Link to='/training'> Industrial Training</Link> </li>
                            </ul>
                        </div>
                        <div className="our-agency d-box w-[25%] ps-10" >
                            <h2 className='text-2xl pb-4'>Agency</h2>
                            <ul className='flex flex-col gap-2'>
                                <li> <Link to='/about'> About Us</Link> </li>
                                <li> <Link to='/services'> Services</Link> </li>
                                {/* <li> <Link to='/'> Our Team</Link> </li> */}
                                {/* <li> <Link to='/'> Industrial Training</Link> </li> */}
                                <li> <Link to='/contact'> Contactm Us</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bar py-5 bg-[#1f343b]">
                    <h5 className='text-center text-white '>© 2024 Web & Devs IT Solutions</h5>
                </div>
            </div>
        </>
    )
}

export default Footer