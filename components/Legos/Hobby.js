import React from "react";
import Image from "next/image";


function Hobby({img, desc}){
    return (
    <>
    <div className=' font-productsans text-center p-5 rounded-3xl flex-1 group
         bg-card-light 
         scale-100 hover:scale-105 ease-in duration-300
          hover:border-4 hover:border-my-text-light
         dark:text-white dark:bg-card-dark dark:hover:border-hover-bg-light'>
        <div className='flex justify-center'>
            <Image src={img} width={100} height={100}/>
        </div>
        <h3 className=' text-xl pt-4 pb-2'>{desc}</h3>
    </div>
    
    </>
    )
}

export default Hobby