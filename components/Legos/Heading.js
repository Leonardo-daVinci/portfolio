import React from "react";

function Heading({title, desc}){
    return(
        <>
        <div id="my-projects" className='font-productsans pt-10  text-center'>
          <h3 className='flex w-full justify-center items-center 
          text-center lg:text-start text-5xl pt-10 pb-2 text-my-text-light md:text-7xl dark:text-my-text-dark '>{title}</h3>
          <p className=' flex w-full justify-center items-center 
          text-md py-5 leading-8 text-gray-800v md:text-2xl dark:text-gray-200'>
          {desc}
          </p>
        </div>
        </>
    )
} 

export default Heading