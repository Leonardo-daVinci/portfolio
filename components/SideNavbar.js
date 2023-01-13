import { Disclosure } from '@headlessui/react'
import React from 'react'
import { 
    MdOutlineTimeline,
    MdOutlineNotes
} from 'react-icons/md'
import {
    GiHamburgerMenu,
    GiBrain,
    GiOpenFolder,
    GiHomeGarage
} from "react-icons/gi"
import {
    AiOutlineHome
} from "react-icons/ai"


function SideNavBar(){
    return (
        <>
        <Disclosure as="nav">
         <Disclosure.Button className="absolute top-8 right-4 inline-flex items-center 
         peer justify-center rounded-md p-2 text-gray-900 
         hover:text-white hover:bg-gray-900
         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu className=' block md:hidden h-6 w-6 ' aria-hidden="true" />
         </Disclosure.Button>

            <div className=' p-6 w-1/2 h-screen bg-[#f3f6fc] z-20 fixed top-0 -left-96 
            lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                <div className='flex flex-col justify-start items-center'>
                    {/* Heading */}
                    <h1 className='font-productsans text-base text-center cursor-pointer text-teal-600 border-b border-gray-300 pb-4 w-full'>Leonardo-daVinci</h1>

                    <div className='my-4 border-b border-gray-100 pb-4'>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <AiOutlineHome className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Home</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <GiBrain className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Skills</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <MdOutlineTimeline className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Timeline</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <GiOpenFolder className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Portfolio</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <MdOutlineNotes className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Blog</h3>
                        </div>
                    </div>

                    <div className='my-4 '>
                    <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-productsans px-10 py-2 rounded-md' href='#'>Resume</a>
                    </div>


                </div>

            </div>

         </Disclosure>
        </>
    ) 
}

export default SideNavBar