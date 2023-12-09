import React from "react";
import ViewBtn from "./ViewBtn";
import Image from "next/image";

function Project({img, tags, name, des, link}){
    return(
        <>
        <div className='flex flex-col font-productsans h-[36rem]
         bg-card-light rounded-3xl hover:bg-hover-bg-light group
         scale-100 hover:scale-105 ease-in duration-300
          hover:border-4 hover:border-my-text-light
             dark:bg-card-dark dark:hover:border-my-text-dark'>
              <Image src={img} className=" rounded-t-3xl object-cover group-hover:hidden" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

                {tags}

                <h3 className="text-3xl pt-4 text-gray-800 dark:text-white">{name}</h3>
              <p className='hidden group-hover:block text-2xl pt-2 dark:text-gray-400'>{des}</p>
              </div>
              <ViewBtn link={link} />
            </div>
        </>
    )
}

export default Project