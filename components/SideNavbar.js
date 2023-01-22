import { Disclosure } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'
// import Leo from "../public/Leo.png"
// import LeoWhite from "../public/Leo-White.png"
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
         <Disclosure.Button className="fixed top-8 left-4 z-20 inline-flex items-center 
         peer justify-center rounded-md p-2 text-my-text-light dark:text-white
         bg-card-light dark:bg-card-dark
         hover:bg-hover-bg-light dark:hover:bg-card-dark focus:bg-hover-bg-light dark:focus:bg-hover-bg-dark
         focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white group">
            <GiHamburgerMenu className=' block md:hidden h-6 w-6 ' aria-hidden="true" />
         </Disclosure.Button>

            <div className=' p-6 w-1/2 h-screen bg-card-light z-20 fixed top-0 -left-96 
            lg:w-20 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200
            dark:bg-card-dark'>
                <div className='flex flex-col justify-start items-center gap-5'>
                    {/* Heading */}
                    <div className='flex justify-center dark:hidden'>
                    {/* <Image src={Leo} width={100} height={100}/> */}
                    <Image src={`${process.env.NEXT_PUBLIC_FAVICON}/Leo.png`} width={100} height={100}/>
                    </div>
                    <div className='hidden dark:flex dark:justify-center '>
                        {/* <Image src={Leo} width={100} height={100}/> */}
                        
                        <Image src={`${process.env.NEXT_PUBLIC_FAVICON}/Leo-white.png`} width={100} height={100}/>
                    </div>
                    
                    <h1 className='lg:hidden font-productsans text-base text-center cursor-pointer
                    text-my-text-light dark:text-my-text-dark
                     border-b border-gray-300 pb-4 w-full'>Leonardo-daVinci</h1>

                    <div className='my-4 pb-4 font-productsans
                    text-gray-600 dark:text-gray-200'>
                        <a href='#home'>
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <AiFillHome className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Home</h3>
                        </div>
                        </a>

                        <a href='#my-skills'>
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <FaBrain className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Skills</h3>
                        </div>
                        </a>

                        {/* <a href='#my-skills'>
                        <div className=' mb-2 justify-start items-center text-center gap-4 px-5 hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto dark:hover:bg-hover-bg-dark'>
                        <FaBrain className=' text-2xl text-gray-800  w-full dark:text-white' />
                        <h3 className='text-base font-productsans text-gray-800  dark:text-white'>Skills</h3>
                        </div>
                        </a> */}
                        

                        {/* <a href='#my-skills'>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                        <GiBrain className=' text-2xl text-gray-600 group-hover:text-white' />
                        <h3 className='text-base text-gray-800 group-hover:text-white '>Skills</h3>
                        </div>
                        </a> */}

                        <a href='#my-projects'>
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <GiOpenFolder className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Portfolio</h3>
                        </div>
                        </a>

                        <a href="#my-academics">
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <HiAcademicCap className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Study</h3>
                        </div>
                        </a>

                        <a href="#my-merits">
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <FaCertificate className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Merits</h3>
                        </div>
                        </a>

                        <a href="#my-hobbies">
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <GiJigsawPiece className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Extras</h3>
                        </div>
                        </a>

                        <a href='https://keoliya.hashnode.dev/' target="_blank" rel="noreferrer">
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <MdOutlineNotes className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Blog</h3>
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