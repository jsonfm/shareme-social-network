import React from 'react';
import { Link } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import {truncate} from "@/utils/strings";
import "./styles.css";


export function PinCard({ data }) {

  if(!data) return;
  const { image = { assets : { url : ""}}, _id = "not-found", postedBy, destination } = data;
  if(!image) return;


  return (
    <article className="mx-auto my-6">
        <Link
          to={`/pin/detail/${_id}`}
          className="relative overflow-hidden pin-image"
        >
          <img
            src={image.asset.url}
            className="rounded-lg bg-gray min-h-[100px] bg-gray-300"
            loading="lazy"
          />
          <div className="absolute rounded-lg top-0 left-0 w-full h-full bg-black/30 px-2 py-2 pin-buttons">
            <div className="flex justify-between">
              <div className="bg-white rounded-full px-2 py-2">
                  <MdDownloadForOffline/>                
              </div>
              <button className="btn btn-primary rounded-full px-2 py-1 text-sm">
                Save
              </button>
            </div>
            <div className="flex absolute bottom-4">
              <a href={`${destination}`} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full flex gap-2 items-center text-sm">
                <FaExternalLinkSquareAlt/>
                <p>
                  {truncate(destination, 10)}
                </p>
              </a>
            </div>
          </div>
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
