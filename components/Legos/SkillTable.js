import React from "react";
import Image from "next/image";


function SkillTable({img, title, desc, blocks}){
    return(
        <>
        <div className=' font-productsans text-center p-5 rounded-xl my-10 flex-1 group
           bg-card-light hover:bg-hover-bg-light 
           dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            <div className='flex justify-center'>
            <Image src={img} width={100} height={100}/>
            </div>
            <h3 className=' text-2xl pt-8 pb-2'>{title}</h3>
            <p className='py-2'>
              {desc}
            </p>

            <div className='container mx-auto font-productsans pt-5'>
              
                  {blocks}
              
            </div>
            
          </div>
        </>
    )
}

export default SkillTable