import React, { useEffect } from 'react';
import Hero from '../component/Hero';
import img from '../assets/desing-page.jpg'
import ecommerce from '../assets/ecommerce.png'
import  hero_img from '../assets/web-heor.jpg';

import Title from '../component/Title';
import CardTwo from '../component/CardTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Design = () => {
    const hero = [
        {
            id: 1,
            heading: 'Web Desinging ',
            title: '',
            pera: "Elevate your online presence with our expert web design services. From captivating layouts to seamless user experiences, we craft tailored solutions that drive results. Whether you're a startup or an established brand, let us transform your vision into reality and help your business thrive in the digital world.",
            hero1: hero_img,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Website Design',
            pera: "Webndevs IT Solutions Pvt Ltd welcomes you with a bouquet of professional Website Design & Web Application Development services and promises to partner you through to a new level of functional excellence. We are an India based Web Design Company in Jaipur with a global presence. From the prosperous list our patrons spread across the globe, many have profited from our advanced Application Solutions. Along-side being a Custom Website Design & Web Development Company, Webndevs IT Solutions Pvt Ltd specializes in offering sophisticated IT solutions at an affordable price. At Webndevs IT Solutions Pvt Ltd, we deliver excellence in terms of dedicated and business-centric web solutions. We are specialists in terms of customized web services that meet standards and accommodate scopes for futuristic support.",
            img_class: 'img_right',
            class: 'order',
            aosfirst: 'fade-left',
            aossecond: 'fade-right',
            img: img,
        },
        {
            id: 2,
            heading: 'ecommerce',
            pera: "Transforming Your Business with Online Marketing Solutions In short, we provide top-quality online solutions that transform your business. particular we provide ecommerce consulting, ecommerce solutions, user interface design, graphic design, custom websites, internet marketing including SEO and affiliate program management, eCommerce Website Design and more. And whether you commission a complex e- business solution or decide to start out with a smaller - sized, online marketing project, you can be sure that you are in the right hands.",
            img_class: 'img_left',
            aosfirst: 'fade-right',
            aossecond: 'fade-left',
            img: ecommerce,
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
        <Helmet>
            <title>Web-Design</title>
        </Helmet>
            <section className='max-w-[100%] w-full overflow-hidden'>
                {/* Hero */}
                <div className="">
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} pera={val['pera']} title={val['title']} img_up='img_up' />
                            )
                        })
                    }
                </div>

                <div className="py-10  my-container">
                    <Title content="Website Design" class='main' />

                    <div className="py-14" >
                        {
                            card_two_Arr.map((val, key) => {
                                return <CardTwo key={val.id} aosfirst={val.aosfirst} aossecond={val.aossecond} class={val.class} heading={val.heading} pera={val.pera} img_class={val.img_class} image={val.img} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Design;