import React from "react";

function Blocks({skill, image}){
    return(
        <>
        <div className=' text-center rounded-lg  flex-1 w-full
        bg-hover-bg-light group-hover:bg-card-light  
            dark:bg-hover-bg-dark dark:group-hover:bg-hover-bg-light dark:group-hover:text-gray-700'>
            <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                    <img height="32" width="32" src={image} />
            </div>
            <p className='pb-2' >{skill}</p>
            </div>
        </>
    )
}

export default Blocks