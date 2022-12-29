import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "@/assets/images/logo.png";


export function CategoryCardLink({image, category}){
    const style = "flex items-center gap-3 text-gray hover:text-black duration-200";
    return(
        <NavLink
            className={({ isActive }) => (`${style} ${isActive ? 'font-extrabold' : ''}`)}
        >
            <img
                className="w-8 h-8 rounded-full shadow-sm bg-gray-500"
                alt="category-avatar"
            />
            <p>
                {category}
            </p>
        </NavLink>
    )
}

export function SideBar({ show, setShow }) {
    return (
        <div className={`${show ? 'left-0' : '-left-[100%]'} w-72 md:py-6 md:w-1/4 h-screen bg-white fixed top-0  duration-200 px-4 py-2`}>
            <div className="flex flex-col">
                <AiFillCloseCircle 
                    size={32} 
                    onClick={() => setShow(!show)}
                    className="self-end md:hidden"
                />
                <img
                    src={Logo}
                    className="h-8 md:h-6 object-contain self-start"
                />
            </div>
            <Link to="/" className="flex gap-4 items-center my-4">
                <AiFillHome size={20}/>
                <p>Home</p>
            </Link>
            <h4 className="my-2">
                Discover categories
            </h4>
            <div className="flex flex-col gap-2">
                <CategoryCardLink/>
            </div>
        </div>
    )
}