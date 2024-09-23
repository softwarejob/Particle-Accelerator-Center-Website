import React from 'react';
import {images} from "../constants";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
    FaFacebookSquare,
    FaGithub,
    FaYoutube,
    FaTelegram,
    FaLinkedin,
    FaAtom,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return <section className="bg-dark-hard">
        <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-12 lg:gap-x-10">
            <div className="col-span-5 md:col-span-4 lg:col-span-2">
                <h3 className="text-dark-light font-bold ">Research</h3>
                <ul className="text-[#959EAD] text-sm mt-5 space-y-4 ">
                    <li>
                        <a href="/">Ongoing Projects</a>
                    </li>
                    <li>
                        <a href="/">Publications</a>
                    </li>
                    <li>
                        <a href="/">Research Areas</a>
                    </li>
                    <li>
                        <a href="/">Data Analysis</a>
                    </li>
                    <li>
                        <a href="/">Theoretical Physics</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-5 md:col-span-4 lg:col-span-2">
                <h3 className="text-dark-light font-bold md:text-lg">Facilities</h3>
                <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-sm xl:text-base">
                    <li>
                        <a href="/">Accelerator Complex</a>
                    </li>
                    <li>
                        <a href="/">Detectors</a>
                    </li>
                    <li>
                        <a href="/">Computing Grid</a>
                    </li>
                    <li>
                        <a href="/">Laboratories</a>
                    </li>
                    <li>
                        <a href="/">User Facilities</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
                <h3 className="text-dark-light font-bold md:text-lg">Collaboration</h3>
                <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
                    <li>
                        <a href="/">Partner Institutions</a>
                    </li>
                    <li>
                        <a href="/">International Projects</a>
                    </li>
                    <li>
                        <a href="/">Industry Partnerships</a>
                    </li>
                    <li>
                        <a href="/">Visiting Scientists</a>
                    </li>
                    <li>
                        <a href="/">Job Opportunities</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-5 md:col-span-4 lg:col-span-2">
                <h3 className="text-dark-light font-bold md:text-lg">Resources</h3>
                <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
                    <li>
                        <a href="/">Education & Outreach</a>
                    </li>
                    <li>
                        <a href="/">Public Events</a>
                    </li>
                    <li>
                        <a href="/">Scientific Data</a>
                    </li>
                    <li>
                        <a href="/">Media Center</a>
                    </li>
                    <li>
                        <a href="/">Safety Guidelines</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
                <img className="brightness-0 invert mx-auto md:mx-0" src={images.Logo} alt="logo" />
                <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
                    tation sea curae nihil iaculis tempus singulis
                </p>
                <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
                    <li>
                        <a href="/">
                            <FaSquareXTwitter className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FaFacebookSquare className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FaGithub className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FaYoutube className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FaTelegram className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <AiFillInstagram className="w-6 h-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FaLinkedin className="w-6 h-auto"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col  items-center space-y-5 md:col-span-12 lg:col-sapn-10">
                <div className="bg-white text-orange-500 p-3 rounded-full ">
                    <FaAtom className="w-7 h-auto"/>
                </div>
                <div className="font-bold italic text-dark-light ">
                    <p>
                        Copyright © 2024 National Particle Accelerator Center. All rights reserved.
                    </p>
                    <p>
                        The content on this website is for informational purposes only.
                    </p>
                    <p>
                        For citations, please contact the center for permission.
                    </p>
                    <p>
                        Crafted with particle-level attention to detail.
                    </p>
                </div>
            </div>
        </footer>
    </section>;
}

export default Footer;
