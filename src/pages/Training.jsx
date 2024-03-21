import React, { useEffect } from 'react';
import '../page css/training.css';
import Hero from '../component/Hero';
import AOS from 'aos';
import CardTwo from '../component/CardTwo';
import Title from '../component/Title';
import Card from '../component/Card';

// Img 
import img from '../assets/training.png';
import cd from '../assets/training_ct.png';
import hero2 from '../assets/training_hero.png';
import web from '../assets/training_web.png';
import adv from '../assets/training_adv.png';
import full from '../assets/training_full.webp';
import digital from '../assets/training_disital.png';
import web_new from '../assets/training_new_web.png';
import { Helmet } from 'react-helmet';

const Training = () => {

    const hero = [
        {
            id: 1,
            heading: 'Industrial Training is the Best Part of your Career Growth',
            pera: 'We provide the best industrial training to college students or to those who want to learn Web Development, Web Designing, and Digital Marketing.',
            hero1: img,
            hero2: hero2,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Inspiring The Next Generation Of Engineers Course',
            pera: "We, at WebNdevs IT Solutions, want to prepare the next generation for the IT sector with our special courses. We are not an institute we are a training center where the students will get a chance to work on live projects if they proved themselves. We have technical experts who will teach you technical and logical methods of programming and designing. Contact us to complete your industrial training or college training with us. Students will also get a certificate after completing their training and a chance for placement in our own company. ",
            img_class: 'img_right',
            class: 'order',
            aosfirst: 'fade-right',
            aossecond: 'fade-left',
            img: cd,
        },
    ]


    const card_Arr = [
        {
            id: 1,
            heading: 'Web Development',
            description: 'This course will cover HTML, CSS, jQuery, JavaScript, and WordPress. This course will take 45 working days to complete.',
            icon_img: web,
            aos: 'flip-left',
            link: '/contact'
        },
        {
            id: 2,
            link: '/contact',
            heading: 'Full Stack Development',
            description: 'This course will cover HTML, CSS, jQuery, JavaScript, WordPress, and PHP. This course will take 75 working days to complete.',
            aos: 'flip-left',
            icon_img: full
        },
        {
            id: 3,
            link: '/contact',
            heading: 'Web Designing',
            description: 'This course will include HTML, CSS, and jQuery. This course will take 30 working days to complete.',
            icon_img: web_new,
            aos: 'flip-left',
        },
        {
            id: 4,
            link: '/contact',
            heading: 'Digital Marketing',
            description: 'This course will include SEO, SMO, SEM, SMM, and Email Marketing techniques. This is a 45 days course.',
            aos: 'flip-left',
            icon_img: digital
        },
        {
            id: 5,
            heading: 'Advance Development',
            description: 'Our development contrivers are committed to delivering quality development services that are acclimatized to address your business requirements. We cleave to stylish practices and insure that your website functions optimally and is secure.',
            link: '/contact',
            aos: 'flip-up',
            icon_img: adv
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])

    return (
        <>
        <Helmet><title>Training</title></Helmet>

            <section className='training-section overflow-hidden w-full'>
                {/* Hero section */}
                <div className="">
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} hero2={val['hero2']} heading={val['heading']} pera={val['pera']} title={val['title']} />
                            )
                        })
                    }
                </div>

                {/* bg */}
                {/* <div className=" counter-container mt-24  bg-[#adcad1]">
                    <div className="my-container">
                        <div className="count py-6 md:-20">
                            <Title content="Join Us Now and Increase your Skills" class='main' />
                        </div>
                    </div>
                </div> */}

                {/* Card two */}
                <div className="py-8  mt-24 bg-[#f8f5ff]">
                    <div className="my-container">
                        <Title content="Join Us Now and Increase your Skills" class='main' />
                        {card_two_Arr.map((val, key) => {
                            return (
                                <CardTwo key={val.id} btn={val.btn} heading={val.heading} pera={val.pera} img={val.img} aosfirst={val.aosfirst} aossecond={val.aossecond} img_class={val.img_class} image={val.img} />
                            )
                        })}
                    </div>
                </div>

                {/* Title */}
             

                {/* Card */}
                <div className="my-container sm:py-12">
                <div className="pt-5">
                    <Title class='main' content="Courses We Provide" />
                </div>
                    <div className=" flex gap-5 training-cards flex-wrap " >
                        {card_Arr.map((val, key) => {
                            return (
                                <Card key={val.id} ani={val['aos']} icon_img={val.icon_img} class='card-auto' heading={val['heading']} description={val['description']} icon={val['icon']} link={val['link']} />
                            )
                        })}
                    </div>
                </div>



            </section>
        </>
    )
}

export default Training;