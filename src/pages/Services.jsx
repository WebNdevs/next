import React, { useEffect } from 'react';
import development from '../assets/about_img.png';
import img from '../assets/development.png';
import digital from '../assets/digital.jpg';
import design from '../assets/design.jpg';
import seo from '../assets/seo.jpg';
import services1 from '../assets/services.png';
import Hero from '../component/Hero';
import Title from '../component/Title';
import CardTwo from '../component/CardTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

function Services() {
    const hero = [
        {
            id: 1,
            heading: 'Take Your Business to the next Level',
            title: '',
            pera: 'Our list of services includes everything about web development. Our Service forte includes Search Engine Optimization, UI/UX Design, etc.',
            hero1: img,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Web Development',
            pera: "Web development refers to creating programs and applications for the World Wide Web. Mobile app development is the process by which a mobile app is developed for mobile devices.",
            img: development,
            img_class: 'img_left',
            aosfirst: 'fade-right',
            aossecond: 'fade-left',
        },
        {
            id: 2,
            heading: 'Web Designing',
            pera: "A good website is not just about graphics, but a lot more than that! The website design should be in a way that solves problems, achieves results, and communicates a message effectively.",
            img: design,
            img_class: 'img_right',
            class: 'order',
            aosfirst: 'fade-left',
            aossecond: 'fade-right',
        },
        {
            id: 3,
            heading: 'Digital Marketing',
            pera: "You can trust us to provide you with complete control over SEO services so that you can decide to feature your business in your own way.",
            img: digital,
            img_class: 'img_left',
            aosfirst: 'fade-right',
            aossecond: 'fade-left',
        },
        {
            id: 4,
            heading: 'Search Engine Optimization (SEO)',
            pera: "SEO is optimizing your website page content so that a search engine according to certain keywords shows you in the top result.",
            img_class: 'img_right',
            class: 'order',
            img: seo,
            aosfirst: 'fade-left',
            aossecond: 'fade-right',
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            
            <section className='w-full overflow-hidden'>
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

                <div className="py-10 my-container">
                    <Title content="Our Best Services" class='main' />

                    <div className=" sm:py-14"  >
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

export default Services