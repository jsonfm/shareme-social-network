import React, { useState } from 'react'
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiAddthis } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import { SideBar } from "@/components/SideBar";


export function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="flex items-center w-full h-16 shadow-xl md:shadow-none z-[100] sticky top-0 ">
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
                <div className="w-full hidden md:flex items-center gap-2 bg-white py-2 px-4">
                    <BiSearch size={20}/>
                    <input
                        placeholder="Find something..."
                        className="outline-none border-none"
                    />
                </div>
                <div className="flex items-center gap-4">
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
                    <Link classNmae="hidden md:flex">
                        <SiAddthis size={35}/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}