import React from 'react';
import { PinGrid } from "@/components/PinGrid";
import { BsDownload } from "react-icons/bs";


export function PinDetail() {
  return (
    <>
        <section className="flex flex-col md:flex-row min-h-screen p-5 bg-white md:mx-5">
            <div className="rounded-lg w-full md:w-1/2 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1672108097936-27d9f3bf347c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    className="rounded-lg w-full object-contain min-h-[200px]"
                />
            </div>
            <div className="w-full md:w-1/2 py-5 md:px-5">
                <div className="flex items-center justify-between">
                    <BsDownload/>
                    <a>
                        Some link
                    </a>
                </div>
                <p className="font-bold text-xl mt-6">
                    Lorem, ipsum dolor.
                </p>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sapiente.
                </p>
            </div>
        </section>
        <section>
            <p className="text-center my-6 font-[400] text-xl">
                More like this
            </p>
            <PinGrid pins={[1, 2, 4, 5, 6, 8, 9 ]}/>
        </section>
    </>
  )
}