import React, { useEffect } from 'react';
import '../page css/development.css'
import Hero from '../component/Hero';
import dig_hero from '../assets/digit_hero.png'
import dig_ct from '../assets/digital_ct.jpg'

import Title from '../component/Title';
import CardTwo from '../component/CardTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../component/Card';
import { Helmet } from 'react-helmet';

const DigitalMarketing = () => {
    const hero = [
        {
            id: 1,
            heading: 'Digital Marketing ',
            title: '',
            pera: 'You can trust us to provide you with complete control over SEO services so that you can decide to feature your business in your own way..',
            hero1: dig_hero,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'SEARCH ENGINE OPTIMIZATION SERVICES ',
            pera: "Search Engine Optimization is the technique for making your site SEO neighborly. Our teams is expertise in market analysis, new ideas, creativity, and innovations which distinct our digital marketing services from other digital marketing company in Jaipur. Our Service forte includes Search Engine Optimization, Social Media Marketing, Google Ads, Online Reputation Management, UI/UX Design, Youtube Marketing, etc.",
            img_class: 'img_right',
            aosfirst: 'fade-right',
            aossecond: 'fade-left',
            img: dig_ct,
        },
    ]

    const card_Arr = [
        {
            id: 1,
            heading: 'SEO',
            description: 'Do you need an online store? We help to build eCommerce website for all business domains and make sure it benefits the market needs.',
            link: '/web-design',
            aos: 'flip-left',
            icon: ' ',
        },
        {
            id: 2,
            icon: ' ',
            heading: 'SEM',
            description: 'We are renowned website application development firm with nearly 500+ satisfied client from all over the world in the particular technology.',
            link: '/web-devlopment',
            aos: 'flip-down',
        },
        {
            id: 3,
            icon: ' ',
            heading: 'SMO',
            description: 'We have experts who work on amazing UI and manages the front-end for seamless functionalities.',
            link: '/web-design',
            aos: 'flip-right'
        },
        {
            id: 4,
            icon: ' ',
            heading: 'Content Marketing',
            description: 'Do you want to build web apps in your way? We customise all web apps to turn your vision into reality. Hire web app developers now.',
            link: '/web-devlopment',
            aos: 'flip-right',
        },
        {
            id: 5,
            icon: ' ',
            heading: 'Email Marketing',
            description: 'Your website may perform less sometimes. We provide complete PHP/ MySQL development services in your website to create the best output.',
            link: '/web-design',
            aos: 'flip-up'
        },
        {
            id: 6,
            icon: ' ',
            heading: 'PPC',
            description: 'We use RDBMS and Big Data combinations in data management system. Forte uses Azure and AWS cloud systems for web applications.',
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
                <title>Digital-Marketing</title>
            </Helmet>
            <section className='max-w-full w-full overflow-hidden digital-section'>
                {/* Hero */}
                <div className="">
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} img_up='img_up' pera={val['pera']} title={val['title']} />
                            )
                        })
                    }
                </div>

                {/* CardTwo  */}
                <div className="py-10  my-container">
                    <Title content="Marketing" class='main' />

                    <div className="py-14" >
                        {
                            card_two_Arr.map((val, key) => {
                                return <CardTwo key={val.id} btn=' btn' aosfirst={val.aosfirst} aossecond={val.aossecond} heading={val.heading} pera={val.pera} img_class={val.img_class} image={val.img} />
                            })
                        }
                    </div>
                </div>

                {/* bg */}
                <div className="counter-container  bg-[#9991caa8]">
                    <div className="my-container">
                        <div className="py-5 md:py-20">
                            <Title class='main' content="TYPES OF DIGITAL MARKETING SERVICES" />
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

export default DigitalMarketing;