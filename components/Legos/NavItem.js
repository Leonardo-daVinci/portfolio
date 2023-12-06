import React from "react";

function NavItem({title, icon, anchor}){
    return(
    <>
        <a href={anchor}>
        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
            hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
            dark:hover:bg-hover-bg-dark 
            hover:text-gray-800 dark:hover:text-white'>
                
                {icon}
        
        <h3 className='lg:text-base text-lg'>{title}</h3>
        
        </div>
        </a>
    </>
    )
}

export default NavItem