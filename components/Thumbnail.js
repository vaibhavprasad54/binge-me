import Image from "next/legacy/image"
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {                 // Taking in result as prop from index component

    const BASE_URL = "https://image.tmdb.org/t/p/original/"; 

  return (
    <div ref={ref} className="px-2 py-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
         layout="responsive"
         height={1080}
         width={1920}
         src={`${BASE_URL}${result.backdrop_path || result.poster_path }` || `${BASE_URL}${result.poster_path}` } 
         />
         <div className="p-2">
            <p className="truncate max-w-md text-sm"> {result.overview} </p>
            <h2 className="text-lg mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold "> {result.title || result.original_name} </h2>
            
            <div className="flex items-center opacity-0 group-hover:opacity-100 text-sm">
              <p>
                { result.media_type && `${result.media_type} •`} {" "} 
                { result.release_date || result.first_air_date } • {" "}
              </p>
              <HandThumbUpIcon className="h-5 mx-2" /> 
              <p className="text-green-600"> { result.vote_count } </p>
            </div>
         </div>
    </div>
  )
})

export default Thumbnail