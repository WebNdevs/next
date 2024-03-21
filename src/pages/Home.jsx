import { React, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegStar, FaRegObjectUngroup, FaRegSmile, FaDesktop, FaNetworkWired, FaChartLine, FaChalkboardTeacher } from "react-icons/fa";
import first from '../assets/solution.jpg';
import two2 from '../assets/gro.png';
import '../page css/home.css'
import hero1 from '../assets/hero 1.png';
import hero2 from '../assets/hero 2.png';
import bubble1 from '../assets/bubble2.png';
import bubble2 from '../assets/bubble1.png';
import bubble3 from '../assets/bubble3.png';
import Card from '../component/Card';
import CardTwo from '../component/CardTwo';
import ServiceCard from '../component/ServiceCard';
import Title from '../component/Title';
import Counter from '../component/Counter';
import Hero from '../component/Hero';


function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000, delay: 200 });
    }, [])

    const hero_Arr = [
        {
            id: 1,
            title: 'WELCOME TO WEB & DEVS',
            heading: "LEANDING WEB DEVELOPMENT COMPANY",
            pera: 'Our passionate, determined and focused IT professionals aim to design and build customized web solutions to address unique business needs.',
            hero1: hero1,
            hero2: hero2,
        }
    ]

    const card_Arr = [
        {
            id: 1,
            icon: <FaRegStar />,
            heading: 'Design',
            description: 'Our team of passionate design experts specializes in creating unique and eye-catching designs tailored to meet your specific business needs. From conceptualization to testing and ongoing support, our dedicated UI/UX designers work closely with you to ensure that the visual design effectively communicates your message and aligns with your objectives.',
            link: '/web-design',
            aos: 'fade-up',
        },
        {
            id: 2,
            icon: <FaRegObjectUngroup />,
            heading: 'Development',
            description: 'Our development contrivers are committed to delivering quality development services that are acclimatized to address your business requirements. We cleave to stylish practices and insure that your website functions optimally and is secure.',
            link: '/web-devlopment',
            aos: 'fade-up',
        }
    ]

    const card_two_Arr = [
        {
            id: 1,
            heading: 'Web Development Solutions',
            pera: "Our passionate, determined and focused IT professionals aim to design and make customized web results to address unique business requirements. Our inventors are largely professed in web development results, furnishing you with innovative results to meet your business requirements.They’ve expansive knowledge and experience in the rearmost web technologies, icing that your design is delivered to the loftiest norms.likewise, our inventors are passionate about creating innovative results that are acclimatized to your specific conditions.With our commitment to excellence, you can be sure that the web results we give will exceed your prospects.",
            img: first,
        }
    ]

    const counter_Arr = [
        {
            id: 1,
            icon: <FaRegSmile />,
            heading: "Satisfied Clients",
            bg: ' bg-green-600',
            start: 2200,
            end: 2500,
        },
        {
            id: 2,
            icon: <FaDesktop />,
            heading: "Project Completed",
            bg: ' bg-green-600',
            start: 900,
            end: 1200,
        },
        {
            id: 3,
            icon: <FaRegSmile />,
            heading: "Years Completed",
            bg: ' bg-green-600',
            start: 0,
            end: 7,
        },
    ]

    const servicArr = [
        {
            id: 1,
            heading: 'Digital Strategy',
            pera: 'At Web & Devs, we produce a design for your success by developing a performance- grounded digital strategy that stands out from the competition. Our strategy is designed to maximize the impact of your brand online, drive engagement and induce leads. We also give detailed reporting and analysis, so you can track your progress.',
            icon: <FaNetworkWired />,
            rclass: ' bg-red-400'
        },
        {
            id: 2,
            heading: 'Search Engine Optimization',
            pera: 'Hunt machine optimization is an important element of any successful digital marketing strategy. SEO helps to drive organic business to your website and ameliorate your visibility on hunt machine affect runners. We offer comprehensive SEO services to help you get to the top and stay ahead of the competition. Our SEO strategies are acclimatized to meet your business needs and help you reach your pretensions.',
            icon: <FaChartLine />,
            rclass: ' bg-yellow-400'
        },
        {
            id: 3,
            heading: 'Industrial Training',
            pera: 'We have technical experts who will teach you technical and logical methods of programming and designing. Contact us to complete your industrial training or college training with us. Students will also get a certificate after completing their training and a chance for placement in our own company. ',
            icon: <FaChalkboardTeacher />,
            rclass: ' bg-pink-400'
        },
    ]

    const takeArr = [
        {
            id: 1,
            heading: "Take Your Business to the next Level",
            pera: "Webndevs can create tailored web solutions that align with your business objectives. Whether it's a website, web application, or e-commerce platform, they can develop a user-friendly, scalable, and secure solution that meets your specific needs.  If you're looking to sell products or services online, Webndevs can develop robust e-commerce platforms that are secure, easy to manage, and optimized for conversions. They can integrate features like payment gateways, inventory management, and customer relationship management (CRM) systems to streamline your online sales process.",
            img: two2,
        }
    ]

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <section className='home-section max-w-[100%] w-[100%] overflow-hidden'>
                {/* Hero Section */}
                <div className="">
                    {hero_Arr.map((val, key) => {
                        return (
                            <>
                                <Hero key={val.id} hero1={val['hero1']} hero2={val['hero2']} pera={val['pera']} heading={val['heading']} title={val['title']} />
                            </>
                        )
                    })
                    }
                </div>

                {/* What to do Section */}
                <div className="my-container what-to-do pt-5  pb-10">
                    <Title content='What to do' class='main' />

                    <div>
                        {card_two_Arr.map((data, key) => {
                            return (
                                <CardTwo key={data.id} aosfirst='fade-right' aossecond='fade-left' image={data['img']} img_class='img_left' heading={data['heading']} pera={data['pera']} />
                            )
                        })}
                    </div>

                    <div className="down-card flex justify-between items-center gap-10 mt-16" >
                        {card_Arr.map((val, key) => {
                            return (
                                <>
                                    <Card key={val.id} ani={val['aos']} class='card-auto' heading={val['heading']} description={val['description']} icon={val['icon']} link={val['link']} />
                                </>
                            )
                        })}
                    </div>
                </div>

                {/* Counter Section */}
                <div className="counter-container  bg-[#0099d9]">
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

                {/* <!-- Services Section --> */}
                <section className="home-services">
                    <div className="my-container py-8 " >

                        <div className=""><Title content='OUR SERVICES' class='main' /></div>

                        <div className="pb-5">
                            {takeArr.map((data, key) => {
                                return (
                                    <CardTwo key={data.id} aosfirst='fade-left' aossecond='fade-right' image={data['img']} class='order' img_class='img_right' heading={data['heading']} pera={data['pera']} />
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Service Card */}
                <div className="my-container mb-10 flex gap-6 items-center justify-between flex-wrap home-services ">
                    {servicArr.map((data, key) => {
                        return (
                            <>
                                <ServiceCard key={data.id} aos='fade-up' heading={data['heading']} pera={data['pera']} icon={data['icon']} rclass={data.rclass} />
                            </>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Home;