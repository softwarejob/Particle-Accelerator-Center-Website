import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import {images} from "../constants";


const navItemInfo = [
    {name: "Home", type: "link"},
    {name: "Research", type: "link"},
    {name: "Facilities", type: "dropdown", items: ["Accelerator Complex", "Detector Systems"]},
    {name: "Collaborations", type: "link"},
    {name: "Education", type: "link"},
]

const NavItem = ({item}) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdownHandler = () => {
        setDropdown((curState) => {
            return !curState
        });
    }
    return (
        <li className="relative group">
            {item.type === "link" ? (
                <>
                    <a href="/" className="px-4 py-2">
                        {item.name}
            </a>
                <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                /
            </span>
            </>
                ) : (
                <div className="flex flex-col items-center">
                    <button className="px-4 py-2 flex gap-x-1 items-center" onClick={toggleDropdownHandler}>
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown/>
                    </button>
                    <div className={`${dropdown ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                        <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page) => (
                                    <a
                                        href="/"
                                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                    >
                                        {page}
                                    </a>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </li>
    );
}

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };
    return (
        <section className="sticky top-0 left-0 right-0 z-50 bg-white">
            <header className="container mx-auto px-5 flex justify-between py-4 items-center">
                <div>
                    <img className="w-32" src={images.Logo} alt="logo"/>
                </div>
                <div className="lg:hidden z-50">
                    {navIsVisible ? (
                        <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler}/>
                        )}
                </div>
                <div
                    className={`${
                      navIsVisible ? "right-0" : "-right-full"
                    } transition-all duration-300 mt-[180px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
                >
                    <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                        {navItemInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">Portal
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Header;
