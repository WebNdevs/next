import React from 'react'
import user from '../assets/user.png';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import '../css/team.css';

const Team = (props) => {

    return (
        <>
            <div className='team-card w-[96%] pt-4 md:px-3 rounded bg-[lavender] mx-auto' >
                <div className="team-icons flex justify-between text-3xl">
                    <a href={props.insta} className='text-[#ff6ffb]' > <FaInstagram /></a>
                    <a href={props.face} className='text-[#2b2be1e0] rounded-full'> <FaLinkedin /></a>
                </div>

                <div className=" rounded-full flex justify-center">
                    <img src={user} alt="user" className='[60%] h-[200px] ' />
                </div>

                <div className="content-team py-4 ">
                    <h3 className="text-center text-lg uppercase">{props.name} </h3>
                    <h3 className="text-center text-lg py-1">{props.post} </h3>
                    <p className='py-2' >{props.pera} </p>
                    <div className="py-1 team-btn my-3 flex justify-center">
                        <a className='rounded-lg  py-2 px-5 border-2 border-white' href={'tel:' + props.contact} >Contact</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team