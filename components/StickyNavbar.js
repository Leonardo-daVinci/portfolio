"use client"

import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "Skills",
        hash: "#my-skills"
    },
    {
        name: "Projects",
        hash: "#my-portfolio"
    },
    {
        name: "Academics",
        hash: "#my-academics"
    },
    {
        name: "Merits",
        hash: "#my-merits"
    },
    {
        name: "Extras",
        hash: "#my-extras"
    }
]

function StickyNavbar() {
  return (
    <header className='z-[999] relative'>
        
        <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none
        border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
            initial={{y:-100, x:"-50%", opacity:0}}
            animate={{y:0, x:"-50%", opacity:1}}
        >
        </motion.div>

        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2
        sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[36rem] items-center justify-center gap-y-1 
            text-[0.9rem] font-productsans text-gray-600
            sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                {links.map((link)=>(
                    <motion.li key={link.hash} className='h-3/4 flex items-center justify-center'
                        initial={{y:-100, opacity:0}}
                        animate={{y: 0, opacity:1 }}
                    >
                        <Link href={link.hash} className='flex w-full items-center justify-center px-3 py-3
                        hover:text-gray-900 transition'>
                            {link.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>

        </nav>

    </header>
  )
}

export default StickyNavbar