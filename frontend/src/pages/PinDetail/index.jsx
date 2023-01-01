import React from 'react';
import { useParams } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";
import { PinGrid } from "@/components/PinGrid";
import { authService } from '@/services/auth.service';
import { pinDetailQuery } from '@/api/queries';
import { client } from "@/api/client";
import { useQuery } from '@tanstack/react-query';
import { truncate } from "@/utils/strings";
import { GridLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { relatedPinsQuery } from "@/api/queries";
import { ClipLoader } from "react-spinners";

export function PinDetail() {
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { isLoading: loading, error, data } = useQuery({
        queryKey: [`pin-detail-${id}`],
        queryFn: () => client.fetch(pinDetailQuery(id)),
    });

    const relatedPins = useQuery({
        queryKey: [`related-pins-${id}`],
        queryFn: () => {
            if(!!data){
                return client.fetch(relatedPinsQuery(data[0]))
            }
            return []
        },
    });

    const user = authService.getUser();

    if(!user) return;
    const { image, username } = user;

    if(loading){
        return <div className="min-h-[65vh] flex items-center justify-center"><GridLoader color="#EF4444" /></div>
    }

    if(!!error) {
        return <p>{error}</p>
    }

    const { postedBy, title, about, destination, image:imagePin } = data[0];
    window.scrollTo(0, 0);

    const onCommentSubmit = (data) => {
        const { comment } = data;
        // client
        //     .patch(id)
        //     .setIfMissing({ comments: [] })
        //     .insert('after', 'comments[-1]', [{ comment, _key: uuidv4(), postedBy: { _type: 'postedBy', _ref: user._id } }])
        //     .commit()
        //     .then()
        //     .catch(err => console.error(err));
    }

    if(!!relatedPins.error){
        console.error(relatedPins.error);
    }

    return (
        <>
            <section className="flex flex-col md:flex-row min-h-[400px] p-5 bg-white md:mx-5 mt-5">
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
                        <form 
                            className="flex justify-between mt-6 w-full"
                            onSubmit={handleSubmit(onCommentSubmit)}
                        >
                            <img
                                className="w-10 h-10 bg-gray-500 rounded-full"
                                src={image}
                                alt="me-avatar"
                            />
                            <input
                                className="px-4 py-1 w-[70%] outline-none border rounded-full"
                                placeholder="Write a comment..."
                                {...register("comment")}
                            />
                            <button
                                className="bg-[#EF4444] text-white px-4 py-1 rounded-full"
                                type="submit"
                            >
                                Done
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="px-5">
                <p className="text-center my-6 font-[400] text-xl">
                    More like this
                </p>
                {(!relatedPins.isLoading && !relatedPins.error && relatedPins.data.length > 0) && <PinGrid pins={relatedPins.data}/>}
                {(!relatedPins.isLoading && !relatedPins.error && relatedPins.data.length === 0) && <div className="min-h-[200px] grid place-items-center text-xl font-bold">There are not related post yet.</div>}
                {!!relatedPins.isLoading && <div className="min-h-[200px] grid place-items-center"><ClipLoader color="#EF4444" size={50} /></div>}
                {!!relatedPins.error && <div className="min-h-[200px] grid place-items-center text-xl font-bold">something went wrong :,c</div>}
            </section>
        </>
    )
}