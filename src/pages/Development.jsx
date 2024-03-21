import React, { useEffect } from 'react';
import '../page css/development.css'
import Hero from '../component/Hero';
import dev_hero from '../assets/dev_hero.png'
import dev_ct from '../assets/dev_ct.jpg'

import Title from '../component/Title';
import CardTwo from '../component/CardTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../component/Card';
import { Helmet } from 'react-helmet';

const Development = () => {
    const hero = [
        {
            id: 1,
            heading: 'Web Development ',
            title: '',
            pera: 'We offer specialized web development services that create quality web applications and user-friendly solutions. Our services are optimized for various business modules from around the globe, providing you with highly-secured solutions at a nominal cost.',
            hero1: dev_hero,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Web Development Company in India ',
            pera: "Are you investing a lot in website development? A website’s success does not only lie in its visuals, but in its ability to address issues, produce outcomes, and communicate effectively. A well-designed website should be able to do just that. Our web development company in India and the US has the expertise to design and develop a website that is not only visually appealing but also solves problems, achieves results, and effectively communicates its message. Let us help you save money while creating a website that meets your needs.",
            img_class: 'img_right',
            class: 'order',
            aosfirst: 'fade-left',
            aossecond: 'fade-right',
            img: dev_ct,
        },
    ]

    const card_Arr = [
        {
            id: 1,
            heading: 'eCommerce Development',
            description: 'Are you looking for an eCommerce website for your services? Our experts can help build an online store that meets your market needs and offers the best customer experience',
            link: '/web-design',
            aos: 'flip-left',
            icon: ' ',
        },
        {
            id: 2,
            icon: ' ',
            heading: 'Mobility',
            description: 'We are a renowned provider of web application development services and have served over 500 clients from around the world. Our team is dedicated to delivering the fastest results for your project(s).',
            link: '/web-devlopment',
            aos: 'flip-down',
        },
        {
            id: 3,
            icon: ' ',
            heading: 'Frontend Engineering',
            description: 'Our experienced front-end developers create stunning user interfaces and ensure seamless functionality for all web applications.',
            link: '/web-design',
            aos: 'flip-right'
        },
        {
            id: 4,
            icon: ' ',
            heading: 'Custom Web App Development',
            description: 'Do you need a custom web app to meet your business needs? Our team of developers can create your vision and bring it to life. Get in touch to learn more.',
            link: '/web-devlopment',
            aos: 'flip-right',
        },
        {
            id: 5,
            icon: ' ',
            heading: 'PHP/MySQL Development',
            description: 'Is your website not performing as expected? We offer complete PHP/MySQL development services to ensure the best performance for your website.',
            link: '/web-design',
            aos: 'flip-up'
        },
        {
            id: 6,
            icon: ' ',
            heading: 'Backend Engineering',
            description: 'Our team of experts utilizes the latest technologies, such as Big Data and RDBMS, to develop robust backend solutions. We also provide cloud-based solutions like Azure and AWS for all web applications.',
            link: '/web-devlopment',
            aos: 'flip-left'
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <Helmet>
                <title>Web-Development</title>
            </Helmet>

            <section className='max-w-full w-full overflow-hidden development-section'>
                {/* Hero */}
                <div className="">
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} pera={val['pera']} title={val['title']} />
                            )
                        })
                    }
                </div>

                {/* CardTwo  */}
                <div className="py-10  my-container">
                    <Title content="Development" class='main' />

                    <div className="py-14"  >
                        {
                            card_two_Arr.map((val, key) => {
                                return <CardTwo key={val.id} btn='btn' aosfirst={val.aosfirst} aossecond={val.aossecond} class={val.class} heading={val.heading} pera={val.pera} img_class={val.img_class} image={val.img} />
                            })
                        }
                    </div>
                </div>

                {/* bg */}
                <div className="counter-container  bg-[#92c2c9a8]">
                    <div className="my-container">
                        <div className="py-5 md:py-20">
                            <Title class='main' content="Advanced Web App Development Services" />
                        </div>
                    </div>
                </div>

                {/* Card  */}
                <div className="development-card">
                    <div className="my-container ">
                        <div className="down-card flex justify-between items-center flex-wrap gap-5  py-16" >
                            {card_Arr.map((val, key) => {
                                return (
                                    <>
                                        <Card key={val.id} ani={val['aos']} class='card-auto' heading={val['heading']} description={val['description']} icon={val['icon']} link={val['link']} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Development;