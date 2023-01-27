import React from "react";
import Image from 'next/image'
import ViewBtn from "./ViewBtn";

function Achievement({img, name, source, des}){

    return(
        <>
        <div className=' font-productsans rounded-xl flex flex-col group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={img} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-center text-2xl pt-4 pb-2'>{name}</h3>
                <p className=' text-center py-2 text-lg text-my-text-light dark:text-white'>
                   {source}
                </p>
                <p className=" pb-4 text-lg">
                    {des}
                </p>
            </div>
        

        </>
    )
}

export default Achievement