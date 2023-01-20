import React from "react";

function Chips({category}){
    return(
        <>
        <button className='rounded-xl mx-1
        sm:text-xs md:text-xs lg:text-xl
        bg-hover-bg-light p-2 hover:cursor-default
              group-hover:bg-hover-bg-dark group-hover:text-white
                dark:bg-hover-bg-dark dark:text-white
                dark:group-hover:bg-hover-bg-light dark:group-hover:text-gray-800'>
                    {category}</button>
        </>
    )
}

export default Chips