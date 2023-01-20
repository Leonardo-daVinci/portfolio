import { Disclosure } from '@headlessui/react'
import React from 'react'
import { 
    MdOutlineTimeline,
    MdOutlineNotes
} from 'react-icons/md'
import {
    GiHamburgerMenu,
    GiOpenFolder,
    GiJigsawPiece
} from "react-icons/gi"
import {
    AiFillHome
} from "react-icons/ai"
import {
    HiAcademicCap
} from "react-icons/hi"
import {
    FaBrain,
    FaCertificate
} from "react-icons/fa"


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

            <div className=' p-6 w-1/2 h-screen bg-card-light z-20 fixed top-0 -left-96 
            lg:w-20 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200
            dark:bg-card-dark'>
                <div className='flex flex-col justify-start items-center'>
                    {/* Heading */}
                    <h1 className='font-productsans text-base text-center cursor-pointer text-teal-600 border-b border-gray-300 pb-4 w-full'>Akshit</h1>

                    <div className='my-4 pb-4'>
                        <a href='#home'>
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <AiFillHome className=' text-2xl text-gray-800 w-full dark:text-white' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white'>Home</h3>
                        </div>
                        </a>

                        <a href='#my-skills'>
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <FaBrain className=' text-2xl text-gray-800  w-full dark:text-white' />
                        <h3 className='text-base font-productsans text-gray-800  dark:text-white'>Skills</h3>
                        </div>
                        </a>
                        

                        {/* <a href='#my-skills'>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <GiBrain className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Skills</h3>
                        </div>
                        </a> */}

                        <a href='#my-projects'>
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <GiOpenFolder className=' text-2xl text-gray-800 dark:text-white w-full' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white '>Portfolio</h3>
                        </div>
                        </a>

                        <a href="#my-academics">
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <HiAcademicCap className=' text-2xl text-gray-800 dark:text-white w-full' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white'>Study</h3>
                        </div>
                        </a>

                        <a href="#my-merits">
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <FaCertificate className=' text-2xl text-gray-800 dark:text-white w-full' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white'>Merits</h3>
                        </div>
                        </a>

                        <a href="#my-hobbies">
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <GiJigsawPiece className=' text-2xl text-gray-800 dark:text-white w-full' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white'>Extras</h3>
                        </div>
                        </a>

                        <a href='https://keoliya.hashnode.dev/' target="_blank">
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <MdOutlineNotes className=' text-2xl text-gray-800 w-full dark:text-white' />
                        <h3 className='text-base font-productsans text-gray-800 dark:text-white'>Blog</h3>
                        </div>
                        </a>
                    </div>

                    {/* <div className='my-4 '>
                    <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-productsans px-10 py-2 rounded-md' href='#'>Resume</a>
                    </div> */}

                </div>

            </div>

         </Disclosure>
        </>
    ) 
}

export default SideNavBar