import React, { useState } from 'react'
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBar } from "@/components/SideBar";


export function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="flex items-center w-full h-16 shadow-xl md:shadow-none z-[100] sticky top-0 bg-white">
            <SideBar show={show} setShow={setShow}/>
            <nav className="flex items-center justify-between w-full h-full p-2">
                <GiHamburgerMenu className="md:hidden" size={32} onClick={() => setShow(!show)} />
                <Link
                    to="/"
                    className="md:hidden"
                >
                    <img
                        src={Logo}
                        className="h-6"
                        alt="logo"
                    />
                </Link>
                <Link
                    to="/profile/1"
                    className="w-12 h-12 rounded-full overflow-hidden bg-gray-200"
                >
                    <img
                        className="w-full h-full object-cover"
                        logo="avatar"
                        alt="avatar"
                    />
                </Link>
            </nav>
        </header>
    )
}