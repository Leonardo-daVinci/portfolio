import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function MoreBtn({title}) {
  return (
    <div className=' flex justify-center'>
          <div className='font-productsans text-center rounded-full mb-10 group p-4 lg:w-1/2
           bg-card-light hover:bg-hover-bg-light
           flex items-center
           scale-100 hover:scale-105 ease-in duration-300
            dark:text-white dark:bg-[#060606] dark:border-2 dark:border-white dark:hover:bg-white dark:hover:text-gray-900'>
             
            <h3 className='text-center w-full text-2xl'>
              {title}</h3>
            <BsArrowRight className=' text-2xl'/>
            </div>
          </div>
  )
}

export default MoreBtn