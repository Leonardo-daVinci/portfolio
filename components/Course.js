import React from "react";
import Chips from "./Chips";
import {AiOutlineCaretDown} from 'react-icons/ai'

function Course({id, name, prof, des}){
    return(
        <>
        <div className=" relative overflow-hidden">
        <input type="checkbox"
              className=' peer absolute top-0 inset-x-0 w-full h-full z-10 opacity-0 cursor-pointer'/>

            <div className=' text-center rounded-lg flex justify-start m-auto items-center p-5
                bg-white group-hover:bg-card-light  
                dark:bg-card-dark dark:hover:text-gray-700
                dark:group-hover:bg-card-dark
                peer-checked:rounded-b-none
                transition-all duration-500
                '>
            
                    <Chips category={id} />
                    <p className=' px-5 text-xl text-gray-800 dark:text-white' >{name}</p>
            </div>

            <div className=' absolute top-7 right-7
                 text-gray-700 text-2xl
                 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                <AiOutlineCaretDown />
            </div>

            <div className=' bg-white rounded-b-lg
            overflow-hidden transition-all duration-500
                 max-h-0 peer-checked:max-h-60
                 dark:bg-[#1f1f1f] dark:text-white'>

                  <div className=' p-4 text-lg'>
                    <p>
                    {des}
                    </p>
                    <p className=" py-2">
                        Taught by <span className=" text-my-text-light dark:text-my-text-dark">{prof}</span>
                    </p>

                  </div>
                </div>
        </div>

        </>
    )
}

export default Course