import React from 'react'
import { Header } from "@/components/Header";
import { SideBar } from '@/components/SideBar';
import { useLocation } from "react-router-dom";


const hideheader = [
    "/profile",
    "login"
]


export function Layout({ children }) {
    const location = useLocation();
    const { pathname } = location;
    const showHeader = hideheader.some(value => value.toLowerCase().includes(pathname.toLowerCase()));

    return (
        <>
            <main className="flex flex-col md:flex-row w-full bg-[#F9FAFB] relative">
                {!pathname.includes('login') &&
                    <div className="hidden md:flex md:w-1/4">
                        <SideBar show={true}/> 
                    </div>
                }
                <div className={`w-full md:w-3/4 overflow-hidden relative flex flex-col`}>
                {/* {!pathname.includes('login') &&
                    <div className={`${!showHeader && 'md:hidden'}`}><Header/></div>
                } */}
                    <Header/>
                    {children}
                </div>
            </main>
        </>
    )
}