import React from 'react';
import { useParams } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";
import { PinGrid } from "@/components/PinGrid";
import { authService } from '@/services/auth.service';
import { pinDetailQuery } from '@/api/queries';
import { client } from "@/api/client";
import { useQuery } from '@tanstack/react-query';
import { truncate } from "@/utils/strings";


export function PinDetail() {
    const { id } = useParams();

    const { isLoading: loading, error, data } = useQuery({
        queryKey: ['pin-detail'],
        queryFn: () => client.fetch(pinDetailQuery(id))
    });

    const user = authService.getUser();

    if(!user) return;
    const { image, username } = user;

    if(loading){
        return <p>loading...</p>
    }

    if(!!error) {
        return <p>{error}</p>
    }

    const { postedBy, title, about, destination, image:imagePin } = data[0];
    console.log("posted: ", postedBy);

    return (
        <>
            <section className="flex flex-col md:flex-row min-h-screen p-5 bg-white md:mx-5 mt-5">
                <div className="rounded-lg w-full md:w-1/2 overflow-hidden">
                    <img 
                        src={imagePin.asset.url}
                        className="rounded-lg w-full object-contain min-h-[200px]"
                        lazy="loading"
                    />
                </div>
                <div className="w-full md:w-1/2 py-5 md:px-5">
                    <div className="flex items-center justify-between">
                        <BsDownload/>
                        <a href={`${destination}`} target="_blank" rel="noopener noreferrer">
                            {truncate(destination)}
                        </a>
                    </div>
                    <p className="font-bold text-xl mt-6">
                        {title}
                    </p>
                    <p className="mt-4">
                        {about}
                    </p>

                    <div className="flex items-center gap-2 mt-6">
                        <img
                            className="w-10 h-10 bg-gray-300 rounded-full"
                            alt="postedby-avatar"
                            src={postedBy.image}
                        />
                        <p className="capitalize font-bold">
                            {postedBy.username}
                        </p>
                    </div>
                    <div className="mt-12">
                        <p className="text-xl">
                            Comments
                        </p>
                        <form className="flex justify-between mt-6 w-full">
                            <img
                                className="w-10 h-10 bg-gray-500 rounded-full"
                                src={image}
                                alt="me-avatar"
                            />
                            <input
                                className="px-4 py-1 w-[70%] outline-none border rounded-full"
                                placeholder="Write a comment..."
                            />
                            <button
                                className="bg-[#EF4444] text-white px-4 py-1 rounded-full"
                            >
                                Done
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-center my-6 font-[400] text-xl">
                    More like this
                </p>
                <PinGrid />
            </section>
        </>
    )
}