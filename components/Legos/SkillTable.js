import React from "react";
import Image from "next/image";


function SkillTable({img, title, desc, blocks}){
    return(
        <>
        <div className=' font-productsans text-center p-5 rounded-3xl my-10 flex-1 group
           bg-card-light
           scale-100 hover:scale-105 ease-in duration-300
           hover:border-4 hover:border-my-text-light
           dark:text-white dark:bg-card-dark dark:hover:border-hover-bg-light'>
            <div className='flex justify-center'>
            <Image src={img} width={100} height={100}/>
            </div>
            <h3 className=' text-3xl pt-8 pb-2'>{title}</h3>
            {/* <p className='py-2'>
              {desc}
            </p> */}

            <div className='container mx-auto font-productsans pt-5'>
              
                  {blocks}
              
            </div>
            
          </div>
        </>
    )
}

export default SkillTable