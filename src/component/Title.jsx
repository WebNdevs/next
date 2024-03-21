import { useState, React, useEffect } from 'react';
import '../css/title.css';
import AOS  from 'aos';
import 'aos/dist/aos.css'

const Title = (props) => {

    const [h2class, setH2class] = useState('');
    useEffect(() => {

        if (props.class == 'main') {
            const headingClass = 'title-m-h2 uppercase text-center text-3xl bg-[#f55f8d1a] text-[#0099d9] py-3 xl:mb-3 rounded-full';
            setH2class(headingClass);
        } else {
            const headingClass = 'title-h2  text-center text-5xl  py-3 mb-3 rounded-full';
            setH2class(headingClass);
        }

    }, [])
    return (
        < h2 className='title text-4xl font-semibold uppercase text-center mx-auto my-8 md:my-12 py-2 px-5 ' data-aos='fade-right' > {props.content}</h2>
    )
}

export default Title