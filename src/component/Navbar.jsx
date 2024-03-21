import React, { useState, useEffect, } from 'react';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa'; // Import icons from react-icons library
import logo from '../assets/Webndevs logo.webp'
import '../css/navbar.css';
import { Route, Link, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop ';
import About from '../pages/About';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Design from '../pages/Design';
import Development from '../pages/Development';
import Training from '../pages/Training';
import DigitalMarket from '../pages/DigitalMarket';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu open/close
    const [navclass, setNavClass] = useState('');
    const [active, setActive] = useState('home');

    console.log(active)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavClass('fixed  bg-white mx-auto w-full z-10 nav-shadow ');
            } else {
                setNavClass('fixed mx-auto w-full z-10');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nevs = ['fixed mx-auto bg-red w-full z-10 duration-[0.3s] ', navclass]

    const isDown = 'hidden';
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={nevs}>
                <div className='my-container'>
                    <header className="md:h-20 ">
                        <nav className="relative px-2 py-2">
                            <div className=" mx-auto flex justify-between items-center">
                                <a href='/'><img src={logo} alt="Webndevs" className='w-[150px]' /></a>
                                <ul className="hidden md:flex space-x-6">
                                    <li className=''>  <Link to='/' onClick={() => { setActive('home') }} > {active === 'home' ? <div className='text-[#0099d9]' >Home</div> : <div className='text-[#000000]' >Home</div>} </Link> </li>
                                    <li className=''>  <Link to='/about' onClick={() => { setActive('about') }} > {active === 'about' ? <div className='text-[#0099d9]' >About</div> : <div className='text-[#000000]' >About</div>} </Link> </li>

                                    <li className="flex relative group ">
                                        <Link to="/services" className="mr-1" onClick={() => { setActive('services') }}>  {active === 'services' ? <div className='text-[#0099d9]' >Services <span className='-mb-1 ml-1 inline-block'>{<FaAngleDown />}</span></div>  : <div className='text-[#000000]' >Services   <span className='-mb-1 ml-1 inline-block'>{<FaAngleDown />}</span> </div>}  </Link>
                                        <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                            <li > <Link className="text-sm bg-white block hover:bg-slate-100 leading-8" to="/web-design" onClick={() => { setActive('web-design') }} > Web Designing </Link></li>
                                            <li><Link className="text-sm bg-white block hover:bg-slate-100 leading-8" to="/web-development" onClick={() => { setActive('web-development') }}>Web Development </Link></li>
                                            <li><Link className="text-sm bg-white block hover:bg-slate-100 leading-8" to="/digital-marketing" onClick={() => { setActive('digita-marketing') }}>Digital marketing</Link></li>
                                        </ul>
                                    </li>

                                    <li className=''><Link to="/training" onClick={() => { setActive('training') }}>{ active === 'training' ? <div className='text-[#0099d9]' >Industrail Training</div> : <div className='text-black'>Industrail Training</div>}</Link></li>
                                    <li className=''><Link to="/contact" onClick={() => { setActive('contact') }}> { active === 'contact' ? <div className='text-[#0099d9]' >Contact</div> : <div className='text-black'>Contact</div>} </Link></li>
                                </ul>
                                {/* Mobile menu icon */}
                                <button id="mobile-icon" className="md:hidden" onClick={toggleMenu}>
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                            </div>
                        </nav>
                    </header>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden flex justify-center mt-3 w-full">
                            <div className="mobile-menu absolute top-23 w-full bg-gray-100 shadow-lg leading-9 font-bold h-auto">
                                <ul >
                                    <li className="border-b-2 border-white   pl-4"><Link to='/' className="block pl-7" onClick={toggleMenu}  >Home</Link></li>
                                    <li className="border-b-2 border-white   pl-4"><Link to='/about' className="block pl-7" onClick={toggleMenu} >About</Link></li>
                                    <li className="border-b-2 border-white   groups relative ">
                                        {/* {isDown ? <FaAngleDown /> : <FaAngleDown />} */}
                                        <Link to='/services' className="pl-11" onClick={toggleMenu} >Services </Link>   <span className='text-black absolute top-3 right-4'>{<FaAngleDown />}</span>
                                        <ul className="bg-#55595c text-gray-800 w-full menu-ul">
                                            <li className="text-sm leading-8 font-normal hover:bg-slate-200"><Link to='/web-design' className="block pl-16" onClick={toggleMenu} >Webdesign</Link></li>
                                            <li className="text-sm leading-8 font-normal hover:bg-slate-200"><Link to='/web-development' className="block pl-16" onClick={toggleMenu} >Web Development</Link></li>
                                            <li className="text-sm leading-8 font-normal hover:bg-slate-200"><Link to='/digital-marketing' className="block pl-16" onClick={toggleMenu} >Digital marketing</Link></li>
                                        </ul>
                                    </li>
                                    <li className="border-b-2 border-white   pl-4"><Link to='/training' className="block pl-7" onClick={toggleMenu} >Industrial Training</Link></li>
                                    <li className="border-b-2 border-white   pl-4"><Link to='/contact' className="block pl-7" onClick={toggleMenu} >Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <ScrollToTop />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/training' element={<Training />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/web-design' element={<Design />} />
                <Route path='/web-development' element={<Development />} />
                <Route path='/digital-marketing' element={<DigitalMarket />} />
            </Routes>

        </>
    );
}

export default Navbar;
