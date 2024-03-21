import React, { useEffect } from 'react'
import img from '../assets/about.png'
import Hero from '../component/Hero'
import AOS from 'aos';
import { Helmet } from 'react-helmet';


const Blog = () => {
    const cardtow_Arr = [
        {
            id: 1,
            heading: 'Blog',
            title: 'WHO WE ARE?',
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
            <title>Blog</title>
        </Helmet>
            <div className="">
                {
                    cardtow_Arr.map((val, key) => {
                        return (
                            <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} pera={val['pera']} title={val['title']} img_up='img_up' />
                        )
                    })
                }
                <div className="bg-red-300 h-screen"></div>
            </div>
        </>
    )
}

export default Blog;