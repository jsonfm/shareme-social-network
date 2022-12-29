import React from 'react'


export function Profile() {
  return (
    <>
    <section>
        <img
            src="https://source.unsplash.com/1600x900/?nature,photography,technology"
            className="h-[50vh] w-full shadow-md"
        />
    </section>
    <section>
        <div
            className="flex flex-col items-center justify-center"
        >
            <img
                src=""
                alt="user-avatar"
                className="w-20 h-20 rounded-full -mt-10 bg-gray-500"
            />
            <p className="mt-4 text-center font-bold text-xl">
                Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div className="flex justify-center mt-6">
            <button
                className="px-4 py-2 outline-none border-none rounded-full bg-[#EF4444] text-white"
            >
                created
            </button>
            <button
                className="px-4 py-2 outline-none border-none rounded-full"
            >
                saved
            </button>
        </div>
        <div className="min-h-[40vh] max-w-[600px] mx-auto mt-12">
            <p className="text-center">Pins not Found</p>
        </div>
    </section>

    </>
  )
}
