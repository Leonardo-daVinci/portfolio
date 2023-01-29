import { Disclosure } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'
import { 
    BsArrowLeft
} from "react-icons/bs"
import {
    GiHamburgerMenu
} from "react-icons/gi"
import {
    AiFillHome
}from "react-icons/ai"
import {
    FaAward,
    FaCertificate
} from "react-icons/fa"
import Link from 'next/link'


function MiniSideBar(){
    return (
        <>
        <Disclosure as="nav">
         <Disclosure.Button className=" lg:hidden fixed z-20 inline-flex items-center 
         peer justify-center rounded-full p-5
          text-my-text-light dark:text-white
         bg-white dark:bg-[#1f1f1f]
         hover:bg-hover-bg-light dark:hover:bg-card-dark focus:bg-hover-bg-light dark:focus:bg-hover-bg-dark
         focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white group">
            <GiHamburgerMenu className=' block text-2xl' aria-hidden="true" />
         </Disclosure.Button>

            <div className=' p-6 w-1/2 md:w-1/5 h-screen bg-card-light z-20 fixed top-0 -left-1/2 rounded-r-2xl lg:rounded-r-none
            lg:w-28 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200
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
                        <Link href="/">
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 lg:px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        
                        <div className=' flex flex-row items-center justify-center lg:w-full'>

                        <BsArrowLeft className=' text-lg' />
                        <AiFillHome className='mx-2 text-2xl ' />

                        </div>
                        <h3 className='lg:text-base text-lg'>Home</h3>
                        </div>
                        </Link>

                        <a href='#details-c'>
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <FaCertificate className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Certificates</h3>
                        </div>
                        </a>

                        <a href='#details-a'>
                        <div className='flex lg:flex-col lg:flex-none mb-2 justify-start items-center lg:gap-1 px-5
                         hover:bg-hover-bg-light p-2 rounded-md group cursor-pointer m-auto
                          dark:hover:bg-hover-bg-dark 
                         hover:text-gray-800 dark:hover:text-white'>
                        <FaAward className='mx-2 text-2xl ' />
                        <h3 className='lg:text-base text-lg'>Awards</h3>
                        </div>
                        </a>

                    </div>


                </div>

            </div>

         </Disclosure>
        </>
    ) 
}

export default MiniSideBar