import React, { useEffect } from 'react';
import { FaRegStar, FaRegObjectUngroup, FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
import img from '../assets/about.png'
import Hero from '../component/Hero'
import AOS from 'aos';
import Title from '../component/Title';
import Card from '../component/Card';
import CardTwo from '../component/CardTwo';
import Team from '../component/Team';
import SlickSlider from '../component/SlickSlider';
import '../page css/about.css'
import Counter from '../component/Counter';
import { Helmet } from 'react-helmet';
//img
import monu from '../assets/monu.png'
import user from '../assets/user.png'
import aboutMarket from '../assets/aboutMarket.png'


const About = () => {
    const hero = [
        {
            id: 1,
            heading: 'Know About Us',
            title: 'WHO WE ARE?',
            pera: 'At Webndevs, we believe in creating innovative solutions to help our clients maximize their business potential. Our team of digital marketing professionals is dedicated to providing top-notch services in Jaipur to ensure that your brand is visible and successful in the online space. We understand that customer satisfaction is of utmost importance. That’s why, our team works diligently and intelligently to provide our clients with the highest quality of service that exceeds their expectations. As a result, we have established ourselves as one of the fastest growing digital marketing companies in India.',
            hero1: img,
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Full-service Digital Marketing Solutions',
            pera: "Our primary objective is to make a positive impact on society through innovation, technology, quality, and growth in digital marketing services. We aim to create a lasting legacy of excellence. Additionally, we strive to provide businesses around the world with access to the latest digital marketing modules, such as Voice Search, Augmented Reality, and Virtual Reality.",
            img: aboutMarket
        }
    ]
    const card_Arr = [
        {
            id: 1,
            icon: <FaRegObjectUngroup />,
            heading: 'Our Principles',
            description: 'At Webndevs, we strive to prioritize our clients’ needs and objectives by utilizing the best resources and technology available, while fostering a collaborative environment that encourages growth and innovation.',
            link: '/web-design',
            aos: 'fade-down'
        },
        {
            id: 2,
            icon: <FaRegObjectUngroup />,
            heading: 'The Future',
            description: 'Have been in the IT industry for over five years, we are well-equipped to stay ahead of the curve and take advantage of the rapidly changing landscape of the industry. We are dedicated to creating a better future, one minute at a time.',
            link: '/web-devlopment',
            aos: 'fade-down'
        },
        {
            id: 3,
            icon: <FaRegObjectUngroup />,
            heading: 'Work Culture',
            description: 'We believe that every individual contributes to the success of our organization and as such, we foster an environment where each team member is encouraged to participate in the decision-making process.',
            link: '/web-devlopment',
            aos: 'fade-down'
        }
    ]
    const counter_Arr = [
        {
            id: 1,
            icon: <FaGoogle />,
            heading: "Reviews",
            bg: ' bg-green-600',
            start: 600,
            end: 800,
        },
        {
            id: 2,
            icon: <FaMapMarkerAlt />,
            heading: "Reviews",
            bg: ' bg-green-600',
            start: 300,
            end: 500,
        },
        {
            id: 3,
            icon: <FaRegStar />,
            heading: "Rating ",
            bg: ' bg-green-600',
            start: 0,
            end: 4,
        },
    ]
    const team_Arr = [
        {
            id: 1,
            name: 'Hitesh saini',
            post: ' CEO ',
            img:user,
        },
        {
            id: 2,
            name: 'Mahesh yogi',
            post: 'Full Stack Developer',
            img:user,
        },
        {
            id: 3,
            name: 'Sourabh Sarkar',
            post: 'Full Stack Developer',
            img:user,
        },
        {
            id: 4,
            name: 'Monu singh',
            post: 'UI Design',
            img:user,
        },
        {
            id: 5,
            name: 'Vishanu Kumawat',
            post: 'Backend Developer',
            img:monu,
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])

    return (
        <>
        <Helmet>
            <title>About</title>
        </Helmet>
            <section className="sec-container max-w-[100%] w-full overflow-hidden ">
                {/* Hero  */}
                <div>
                    {
                        hero.map((val, key) => {
                            return (
                                <Hero key={val.id} hero1={val['hero1']} heading={val['heading']} pera={val['pera']} title={val['title']} img_up='img_up' />
                            )
                        })
                    }
                </div>

                {/* Solutions */}
                <div className="my-container what-to-do pt-5  pb-10">
                    <div className="py-5">
                        <Title content='Solutions' class='main' />
                    </div>

                    <div>
                        {card_two_Arr.map((data, key) => {
                            return (
                                <CardTwo key={data.id} aosfirst='fade-right' aossecond='fade-left' image={data['img']} img_class='img_left' heading={data['heading']} pera={data['pera']} />
                            )
                        })}
                    </div>

                    <div className="down-card flex justify-between items-center gap-10 mt-10" >
                        {card_Arr.map((val, key) => {
                            return (
                                <>
                                    <Card key={val.id} ani={val.aos} class='card-auto' heading={val['heading']} description={val['description']} icon={val['icon']} link={val['link']} />
                                </>
                            )
                        })}
                    </div>
                </div>

                {/* Counter Section */}
                <div className="counter-container  bg-[#009988]">
                    <div className="my-container">
                        <div className="count flex justify-between items-center md:py-20">
                            {
                                counter_Arr.map((val, key) => {
                                    return (<>
                                        <Counter key={val.id} bg={val['bg']} heading={val['heading']} start={val['start']} end={val['end']} icon={val['icon']} />
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Team  */}
                <div className="py-5 md:mt-5 about-team">
                    <div className="my-container">
                        <Title content="Our Team" class='main' />
                        <div className="md:py-6 md:my-2" data-aos='fade-up'  ><SlickSlider childern={
                            team_Arr.map((val, key) => {
                                return <Team key={val.id} img={val.img} name={val['name']} post={val['post']} />;
                            })
                        } />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;