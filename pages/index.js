import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import avatar from '../public/dev-ed-wave.png'
import lang from '../public/lang.png'
import machine from '../public/machine.png'
import tools from '../public/tools.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import {useState} from 'react'
import Link from 'next/link'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Akshit Keoliya Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>

        {/* HOMEPAGE SECTION */}

        <section className='min-h-screen'>
        
        {/* Navigation Section */}
        
        <nav className=' py-10 mb-12 flex justify-between dark:text-white'>
          <h1 className=' text-lg font-productsans'>Leonardo-daVinci</h1>
          <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-productsans px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
        </nav>

          {/* Introduction */}
          
          <div className=' text-center p-10 font-productsans'>
            <h2 className=' text-5xl py-2 text-teal-600 md:text-6xl dark:text-teal-400'>Akshit Abhay Keoliya</h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Machine Learning Enthusiast and Developer</h3>
            <p className=' text-md py-5 leading-8 text-gray-800v md:text-xl max-w-xl mx-auto dark:text-gray-200'>Some sweet description for myself to highlight my profile</p>
          </div>

          {/* Contacts */}

          <div className=' text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400'>
            <a href='https://www.linkedin.com/in/akshit-keoliya'><AiFillLinkedin /></a>  
            <a href='https://github.com/Leonardo-daVinci'><AiFillGithub /></a>
            <a href='https://twitter.com/AkshitAbhay'><AiFillTwitterCircle /></a>
            <a href='https://www.instagram.com/machine.learning.chef'><AiFillInstagram /></a>
          </div>

          {/* Image */}

          <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar} fill="true" objectFit='cover'/>
          </div>

        </section>

        {/* SKILLS SECTION */}

        <section>
          <div className=' font-productsans'>
              <h3 className=' text-3xl py-1 gap-16 dark:text-white'>My skills</h3>
              <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-200'> Small description of 
                <span className=' text-teal-500'> ML skills, Android and Web</span> development ?
              </p>
          </div>

          {/* Cards */}
          <div className='lg:flex gap-10'>
          <div className=' font-productsans text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <div className='flex justify-center'>
            <Image src={lang} width={100} height={100}/>
            </div>
            <h3 className=' text-lg text-teal-600 pt-8 pb-2'>Languages Known</h3>
            <p className='py-2'>
              Some of the languages I use often and .. not so often.
            </p>

            <div className='flex gap-5'>
            <div className='font-productsans text-center p-5 rounded-lg my-5 dark:bg-slate-500 flex-1'>
              <div className='flex justify-center mb-2'>
                  <img height="32" width="32" src="https://cdn.simpleicons.org/python/3776AB" />
              </div>
              <p>Python</p>
            </div>

            <div className='font-productsans text-center p-5 rounded-lg my-5 dark:bg-slate-500 flex-1'>
              <div className='flex justify-center mb-2'>
              <img height="32" width="32" src="https://cdn.simpleicons.org/kotlin/7F52FF" />
              </div>
              <p>Kotlin</p>
            </div>
            </div>

            <div className='flex gap-5'>
            <div className='font-productsans text-center p-5 rounded-lg my-5 dark:bg-slate-500 flex-1'>
              <div className='flex justify-center mb-2'>
              <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/F7DF1E" />
              </div>
              <p>JavaScript</p>
            </div>

            <div className='font-productsans text-center p-5 rounded-lg my-5 dark:bg-slate-500 flex-1'>
              <div className='flex mb-2 justify-center'>
              <img height="32" width="32" src="https://cdn.simpleicons.org/typescript/3178C6" />
              </div>
              <p>TypeScript</p>
            </div>
            </div>
            
          </div>

          <div className=' font-productsans text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <div className='flex justify-center'>
            <Image src={machine} width={100} height={100}/>
            </div>
            <h3 className=' text-xl text-teal-600 pt-8 pb-2'>Frameworks</h3>
            <p className='py-2'>
              
            </p>
            <h4 className='  py-4'>Frameworks and Tools I use</h4>
            <p className=' text-gray-800 py-1'>TensorFlow</p>
            <p>PyTorch</p>
            <p>Google Colab</p>
          </div>

          <div className=' font-productsans text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <div className='flex justify-center'>
            <Image src={tools} width={100} height={100}/>
            </div>
            <h3 className=' text-lg pt-8 pb-2'>Tools</h3>
            <p className='py-2'>
              Employing Machine learning algorithms to create real-life projects.
            </p>
            <h4 className=' text-teal-600 py-4'>Frameworks and Tools I use</h4>
            <p className=' text-gray-800 py-1'>TensorFlow</p>
            <p>PyTorch</p>
            <p>Google Colab</p>
          </div>
          </div>
          
        </section>

        {/* PORTFOLIO SECTION */}
        <section>
          
          <div className=' font-productsans'>
          <h3 className=' text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Some description about the projects</p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className=' basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
          
        </section>

        {/* <section>
          <div className=' text-center p-10 font-productsans'>
              <h3 className='text-5xl py-2 text-teal-600 md:text-6xl dark:text-teal-400'>
              <Link href="/timeline"> Go to timeline </Link>
              </h3>

          </div>

        </section> */}

        

      </main>
    </div>
  )
}
