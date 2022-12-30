import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "@/assets/images/logo.png";
import { categories } from "@/utils/categories";
import { BsArrowRightShort } from "react-icons/bs";
import { authService } from "@/services/auth.service";

export function CategoryCardLink({ image, category }){
    const style = "flex items-center gap-3 text-gray hover:text-black duration-200";

    return(
        <NavLink
            className={({ isActive }) => (`${style} ${isActive ? 'font-extrabold' : ''}`)}
        >
            <img
                className="w-8 h-8 rounded-full shadow-sm bg-gray-500"
                alt="category-avatar"
                src={image}
            />
            <p className="capitalize">
                {category}
            </p>
        </NavLink>
    )
}

export function SideBar({ show, setShow }) {
    const user = authService.getUser();
    if(!user) return;
    
    const {image:profileImage, username, _id} = user;

    return (
        <div className={`${show ? 'left-0' : '-left-[100%]'} flex flex-col justify-between  md:left-0 md:w-1/4 md:py-6 min-h-screen bg-white fixed top-0  duration-200 px-4 py-2`}>
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
                 <Link to="/" className="flex gap-4 items-center my-4">
                    <AiFillHome size={20}/>
                    <p>Home</p>
                </Link>
                <h4 className="my-2 font-semibold">
                    Discover categories
                </h4>
            </div>
            <div className="flex flex-col gap-2 max-h-[60vh] 2xl:max-h-[70vh] overflow-y-auto">
                {categories.map(({ name, image }, index) => (
                    <CategoryCardLink
                        image={image}
                        category={name}
                        key={`catside-${index}`}
                    />
                ))}
            </div>
            <Link to={`/profile/${_id}}`} className="flex justify-between items-center gap-1 shadow-md mt-[10%] py-2 px-2 ronded-xl">
                <img
                    className="w-10 h-10 rounded-full bg-gray-300"
                    alt="user-avatar"
                    src={profileImage}
                />
                <p>
                    {username}
                </p>
                <BsArrowRightShort size={20}/>
            </Link>
        </div>
    )
}