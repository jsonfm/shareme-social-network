import React from 'react'
import Masonry from 'react-masonry-css';
import { PinCard } from "@/components/PinCard";


const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  


export function PinGrid({ pins }) {
    return (
        <Masonry className="flex gap-6 animate-slide-fwd min-h-screen" breakpointCols={breakpointColumnsObj}>
            {pins?.map((pin) => (
                <PinCard
                    data={pin}
                    key={pin._id}
                />
            ))}
        </Masonry>
    )
}