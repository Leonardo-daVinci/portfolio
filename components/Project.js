import React from "react";
import ViewBtn from "./ViewBtn";
import Image from "next/image";

function Project({img, tags, name, des, link}){
    return(
        <>
        <div className='flex flex-col font-productsans
         bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={img} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

                {tags}

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">{name}</h3>
              <p className='text-md pt-2 dark:text-white'>{des}</p>
              </div>
              <ViewBtn link={link} />
            </div>
        </>
    )
}

export default Project