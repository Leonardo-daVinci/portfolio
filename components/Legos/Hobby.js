import React from "react";
import Image from "next/image";


function Hobby({img, desc}){
    return (
    <>
    <div className=' font-productsans text-center p-5 rounded-xl flex-1 group
         bg-card-light hover:bg-hover-bg-light 
         dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
        <div className='flex justify-center'>
            <Image src={img} width={100} height={100}/>
        </div>
        <h3 className=' text-xl pt-4 pb-2'>{desc}</h3>
    </div>
    
    </>
    )
}

export default Hobby