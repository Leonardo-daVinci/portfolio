import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import avatar2 from "../public/avatar2.png"
import {useState} from 'react'

import SideNavBar from '../components/SideNavbar'
import SectionPortfolio from '../components/sections/section-portfolio'
import SectionEducation from '../components/sections/section-education'
import SectionMerits from '../components/sections/section-merits'
import SectionExtras from '../components/sections/section-extras'
import SectionSkills from '../components/sections/section-skills'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="home" className={darkMode ? "dark" : ""}>
      <Head>
        <title>Akshit Keoliya Portfolio</title>
        <meta name="description" content="My portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}/>
      </Head>
      
      <SideNavBar/>

      <div className="lg:hidden fixed top-0 w-full z-10 bg-white dark:bg-[#1f1f1f]">
        <div className=" p-5 flex justify-end dark:text-white">
        <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
        </div>
      </div>

      <main className=' bg-white px-5 md:px-5 lg:ml-20 lg:px-40 dark:bg-[#1f1f1f]'>

        {/* HOMEPAGE SECTION */}

        <nav className='hidden lg:block fixed z-10 top-10 right-4 lg:right-10 justify-between dark:text-white'>
          <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl
              '/></li>
          </ul>
        </nav>

        <section className='lg:pt-20 pt-16 min-h-screen md:min-h-fit'>
        
        {/* Navigation Section */}
        
          {/* Introduction */}

          <div className='flex justify-center mx-auto'>
          <div className='lg:hidden relative rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar2} alt='Avatar' fill="true" objectFit='cover' loading='eager' priority='true' />
          </div>
          </div>

          <div className=' flex justify-center items-center mx-auto md:mb-12 md:pb-10'>
          <div className='hidden lg:block relative bg-gradient-to-b
           from-my-text-light to-my-text-dark 
           rounded-full w-80 h-80 lg:mt-10 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar2} alt='Avatar' fill="true" objectFit='cover' loading='eager' priority='true' />
          </div>
          
          <div className='px-20'>
          <div className=' text-center p-5 lg:p-10 font-productsans'>
            <h2 className=' text-4xl lg:text-6xl py-2 text-my-text-light md:text-6xl dark:text-my-text-dark'>Akshit Abhay Keoliya</h2>
            <h3 className=' text-xl pt-2 md:text-3xl dark:text-white'>Machine Learning Enthusiast and Developer</h3>
            <p className=' text-md py-5 lg:leading-8 text-gray-800v md:text-xl max-w-xl mx-auto dark:text-gray-200'>
            Master<span>&apos;</span>s in Computer Science, Artificial Intelligence at 
            <span className='text-[#0b57d0] dark:text-[#a8c7fa]'><a href='https://www.usc.edu/'> USC</a></span>.
            <br></br>
            Excited to apply my knowledge to real-world problems and help organizations improve their operations 
            and decision-making through machine learning!
              </p>

              <div className='pt-5'>
              <a className=' bg-my-text-light dark:bg-my-text-dark text-white dark:text-gray-800
              text-2xl
              font-productsans px-8 py-4 rounded-full' 
              href='/portfolio/Akshit_Keoliya_Resume.pdf' target="_blank" rel="noreferrer">
                Curriculum Vitae
              </a>
              </div>

          </div>

          {/* Contacts */}

          <div className=' text-5xl flex justify-center gap-10 py-8 text-gray-600 dark:text-gray-400'>
            <a href='https://www.linkedin.com/in/akshit-keoliya'><AiFillLinkedin /></a>  
            <a href='https://github.com/Leonardo-daVinci'><AiFillGithub /></a>
            <a href='https://twitter.com/AkshitAbhay'><AiFillTwitterCircle /></a>
            <a href='https://www.instagram.com/machine.learning.chef'><AiFillInstagram /></a>
          </div>
          </div>

          </div>  

        </section>

        {/* SKILLS SECTION */}
        <section id='my-skills'>
          <SectionSkills />
        </section>

        {/* PORTFOLIO SECTION */}
        <section id='my-portfolio'>
          <SectionPortfolio />
        </section>

        {/* EDUCATION */}
        <section id='my-academics'>
          <SectionEducation />
        </section>

            {/* MERITS */}
          <section id='my-merits'>
            <SectionMerits />
        </section>
        
        {/* EXTRAS */}
        <section id='my-extras'>
            <SectionExtras />
        </section>        

      </main>
    </div>
  )
}
