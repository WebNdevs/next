import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../page css/contact.css';
import img from '../assets/contact.png';
import Hero from '../component/Hero';
import AOS from 'aos';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Title from '../component/Title';
import { Helmet } from 'react-helmet';

function Contact() {
    const [empty, setEmpty] = useState([])


    // Value Update
    const handleInputs = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        console.log(value)
        setEmpty(values => ({ ...values, [name]: value }))
    }

    //Form Start
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_63jwtp7', 'template_ai38a2y', form.current, {
                publicKey: 'WHdThsJBAI374pC9t',
            }).then(res => {
                if (res) {
                    setEmpty({ user_email: ' ', user_name: ' ', user_phone: " ", massage: ' ' })
                }
            })

    };
    // Form End


    const hero = [
        {
            id: 1,
            title: 'Best IT Solution',
            heading: 'Connect With Us',
            pera: 'At Webndevs, we believe in creating innovative solutions to help our clients maximize their business potential. Our team of digital marketing professionals is dedicated to providing top-notch services in Jaipur to ensure that your brand is visible and successful in the online space. We understand that customer satisfaction is of utmost importance. That’s why, our team works diligently and intelligently to provide our clients with the highest quality of service that exceeds their expectations. As a result, we have established ourselves as one of the fastest growing digital marketing companies in India.',
            hero1: img,
        }
    ]

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])

    return (
        <>
        <Helmet>
            <title>Contact</title>
        </Helmet>
            <section className='max-w-[100%] w-[100%] overflow-hidden '>
                {/* Hero */}
                <div className="">
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} pera={val['pera']} title={val['title']} img_up='h-r-img1' />
                            )
                        })
                    }
                </div>

                {/* Form */}
                <div className="bg-[aliceblue] py-10">
                    <div className="my-container">
                        <div>
                            <Title content="Contact Us" className='main' />
                        </div>
                        <div className="contact-form flex justify-between  md:py-8 " >
                            <form className="md:w-[60%]" data-aos='flip-left' ref={form} onSubmit={sendEmail} >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                    <div className="col-span-2">
                                        <label htmlFor="Name" className='ps-1'>Name*</label>
                                        <div className="flex items-center">
                                            <input name="user_name" type="text" id='Name' className="form-control" value={empty.user_name} onChange={handleInputs} />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="email" className='ps-1'>Email Address*</label>
                                        <div className="flex items-center">
                                            <input name="user_email" type="text" id='email' className="form-control" value={empty.user_email} onChange={handleInputs} />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="phone" className='ps-1'>Phone No*</label>
                                        <div className="flex items-center">
                                            <input name="user_phone" id='phone' type="text" className="form-control" value={empty.user_phone} onChange={handleInputs} />
                                        </div>
                                    </div>
                                    {/* <div className="col-span-2">
                                    <div className="flex items-center">
                                        <select name="user_services" className="form-control bs-select-hidden">
                                            <option value="">Choose Service*</option>
                                            <option value='Web Designing' >Web Designing</option>
                                            <option value='Web Development' >Web Development</option>
                                            <option value='Hosting Services' >Hosting Services</option>
                                            <option value='Digital Marketing' >Digital Marketing</option>
                                            <option value='Industry Training' >Industry Training</option>
                                            <option value='Other' >Other</option>
                                        </select>
                                    </div>
                                </div> */}
                                    <div className="col-span-2">
                                        <label htmlFor="Name" className='ps-1'>Massage*</label>
                                        <div className="flex items-center">
                                            <textarea name="message" className="form-control" value={empty.massage} onChange={handleInputs}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="flex items-center">
                                            <div className="g-recaptcha" data-sitekey="your-site-key" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <input type="submit" name="submit" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>

                            <div className="contact-way  flex flex-col md:w-[40%] items-end " data-aos='flip-right'>
                                <a href="tel:+91-9887603015" className='lg:w-[80%] '>
                                    <div className="flex items-center gap-5">
                                        <div className="icons flex items-center">
                                            <div className="text-2xl px-4 py-4 bg-red-200 rounded-full">
                                                <FaPhoneAlt className='text-white' />
                                            </div>
                                        </div>
                                        <div className="links ps-2">
                                            +91-9887603015
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto:sales@webndevs.com" className='my-10 lg:w-[80%]'>
                                    <div className="flex   items-center gap-5">
                                        <div className="icons flex items-center">
                                            <div className="text-2xl px-4 py-4 bg-red-200 rounded-full">
                                                <FaEnvelope className='text-white' />
                                            </div>
                                        </div>
                                        <div className="links ps-2">
                                            sales@webndevs.com</div>
                                    </div>
                                </a>

                                <a href="" className='lg:w-[80%]'>
                                    <div className="flex items-center gap-5">
                                        <div className="icons flex items-center">
                                            <div className="text-2xl px-4 py-4 bg-red-200 rounded-full">
                                                <FaMapMarkerAlt className='text-white' />
                                            </div>
                                        </div>
                                        <div className="links ps-2">
                                            2nd Floor, Plot No 8, Teacher’s Colony Baba Market Ajmer Road, Jaipur
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Lcation */}
                <div className="pt-24" >
                    <div className='w-full overflow-hidden'>
                        <iframe className='w-full overflow-hidden' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616101.8618833206!2d75.71523929355581!3d27.06815558235206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db598fc09c6f5%3A0x6109fa3fc4e36831!2sWebNDevs%20IT%20Solutions!5e1!3m2!1sen!2sin!4v1710391828528!5m2!1sen!2sin" width='100%' height='650px' ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;