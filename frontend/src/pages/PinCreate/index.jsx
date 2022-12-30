import React, { useState } from 'react'
import { categories } from "@/utils/categories";
import { authService } from "@/services/auth.service";
import { AiOutlineCloudUpload } from "react-icons/ai";


function UploadCard(){
    return(
        <div className="px-4 outline-dashed outline-gray-400 h-full py-12 md:py-16">
            <div className="flex flex-col items-center">
                <AiOutlineCloudUpload size={30}/>
                <p>Click to Upload</p>
            </div>
            <p className="text-gray-400 mt-12 md:mt-24 text-justify text-sm">
                Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
            </p>
        </div>
    )
}

function ImagePreview(){
    return(
        <div className="h-full py-12 md:py-16 relative">
            <img
                className="bg-pink-700/40"
            />

        </div>
    )
}


export function PinCreate() {
    const [state, setState] = useState({
        file: undefined,
        title: undefined,
        description: "",
        link: ""
    });

    const user = authService.getUser();
    
    if(!user) return;

    const { image, username } = user;

    return (
        <section className="min-h-screen">
            <div className="flex flex-col md:flex-row max-w-[900px] md:mt-12 overflow-hidden bg-white mx-auto px-4 py-4">
                <div className="w-full md:w-[45%]">
                    <div className="h-[300px] md:h-[400px] bg-[#F0F0F0] p-4">
                        <UploadCard/>
                    </div>
                </div>    
                <div className="w-full md:w-[55%]">
                    <form className="flex flex-col gap-5 px-4 py-6">
                        <input
                            placeholder="Add your tittle"
                            className="outline-none border-b-2 px-2 py-1 text-xl md:text-2xl"
                        />
                        <div className="flex items-center gap-2">
                            <img
                                className="w-10 h-10 rounded-full bg-gray-300"
                                src={image}
                            />
                            <p>
                                {username}
                            </p>
                        </div>
                        <input
                            placeholder="Tell everyone what your Pin is about"
                            className="outline-none border-b-2 px-2 py-1"
                        />
                        <input
                            placeholder="Add a destination link"
                            className="outline-none border-b-2 px-2 py-1"
                        />
                        <p className="mt-5 text-xl">Choose Pin Category</p>
                        <select className="capitalize outline-none border-b-2 px-2 py-1">
                            <option>Select a Category</option>
                            {categories.map(category => (
                                <option className="capitalize">{category.name}</option>
                            ))}
                        </select>

                        <button
                            className="px-4 py-2 outline-none border-none rounded-full bg-[#EF4444] text-white max-w-[200px] mt-4"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
