import requests from "../utils/requests";
import { useRouter } from "next/router";                {/* Next js has built in router */}


function Nav() {

    const router = useRouter();
    
  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-base whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* Mapping over "requests" array and destructuring "value" to get title and url. */}
            {Object.entries(requests).map(([key, { title, url }]) => (                 
                <h2
                onClick={() => router.push(`/?genre=${key}`) }
                 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 " 
                    key={key}>{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 " />             {/*Fading the last nav item*/}
    </nav>
  )
}

export default Nav