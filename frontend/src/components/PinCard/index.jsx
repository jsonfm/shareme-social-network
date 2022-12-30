import { Link } from "react-router-dom";
import React from 'react'


export function PinCard({ data }) {
  console.log("data: ", data)
  if(!data) return;
  const { image = { assets : { url : ""}}, _id = "not-found", postedBy } = data;
  if(!image) return;
  return (
    <article className="mx-auto my-6 min-h-[10rem]">
      <Link
        to={`/pin/detail/${_id}`}
      >
        <img
          src={image.asset.url}
          className="rounded-lg bg-gray"
        />
        </Link>
        <Link to={`/profile/{postedBy._id}`} className="flex mt-2 gap-2">
          <img
            className="w-8 h-8 rounded-full bg-gray-400"
            src={postedBy.image}
          />
          <p className="text-sm">
            {postedBy.username}
          </p>
        </Link>
    </article>
  )
}
