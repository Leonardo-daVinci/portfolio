import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import avatar from '../public/dev-ed-wave.png'
import lang from '../public/lang.png'
import machine from '../public/machine.png'
import tools from '../public/tools.png'
import amazon from "../public/amazon-clone.png"
import fashion from "../public/hm-fashion.png"
import vigil from "../public/vigil-system.png"
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import {useState} from 'react'
import Link from 'next/link'
import SideNavBar from '../components/SideNavbar'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Akshit Keoliya Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}/>
      </Head>
      <SideNavBar/>
      <main className=' bg-white px-10 md:px-20 lg:ml-60 lg:px-40 dark:bg-gray-900'>

        {/* HOMEPAGE SECTION */}

        <section className='min-h-screen'>
        
        {/* Navigation Section */}
        
        <nav className=' py-10 mb-12 flex justify-between dark:text-white'>
          {/* <h1 className=' text-lg font-productsans'>Leonardo-daVinci</h1> */}
          <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-productsans px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
        </nav>

          {/* Introduction */}
          
          <div className=' text-center p-10 font-productsans'>
            <h2 className=' text-5xl py-2 text-teal-600 md:text-6xl dark:text-teal-400'>Akshit Abhay Keoliya</h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Machine Learning Enthusiast and Developer</h3>
            <p className=' text-md py-5 leading-8 text-gray-800v md:text-xl max-w-xl mx-auto dark:text-gray-200'>
            Completing my master's in Computer Science at 
            <span className=' text-teal-600 dark:text-teal-400'><a href='https://www.usc.edu/'> USC</a></span>.
            <br></br>
            Excited to apply my knowledge to real-world problems and help organizations improve their operations and decision-making through machine learning!
              </p>
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
          <Image src={avatar} alt='Avatar' fill="true" objectFit='cover' loading='eager' />
          </div>

        </section>

        {/* SKILLS SECTION */}

        <section>
          <div className=' font-productsans'>
              <h3 className=' text-3xl py-1 gap-16 mt-8 dark:text-white'>My skills</h3>
              <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-200'> 
              I have a strong background in mathematics and computer science and 
              have been working on developing my skills in machine learning techniques and algorithms.
                {/* <span className=' text-teal-500'> ML skills, Android and Web</span> development ? */}
              </p>
          </div>

          {/* Cards */}
          <div className='lg:flex gap-10'>
          <div className=' font-productsans text-center p-5 rounded-xl my-10 flex-1 border-teal-600 border-4 dark:border-teal-400'>
            <div className='flex justify-center'>
            <Image src={lang} width={100} height={100}/>
            </div>
            <h3 className=' text-xl text-teal-600 pt-8 pb-2 dark:text-teal-400'>Languages Known</h3>
            <p className='py-2 dark:text-white'>
              Using multitudes of languages to accomplish tasks and leveraging best features of each one!
            </p>

            <div className='container mx-auto font-productsans'>
              <div className=' grid-cols-2 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-row-2'>
                  {/* <div className=' w-full col-span-3 rounded-sm'>
                  <img height="32" width="32" src="https://cdn.simpleicons.org/python/3776AB" />
                  <p>Python</p>
                  </div> */}

                  <div className=' text-center p-5 rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1'>
                    <div className='flex justify-center mb-2'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/python/3776AB" />
                    </div>
                    <p>Python</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/kotlin/7F52FF" />
                    </div>
                    <p className='pb-2' >Kotlin</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/F7DF1E" />
                    </div>
                    <p className='pb-2'>JavaScript</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/sqlite/003B57" />
                    </div>
                    <p className='pb-2'>SQL</p>
                  </div>

              </div>


            </div>

            {/* <div className='flex gap-5'>
            <div className='font-productsans text-center p-5 rounded-lg my-5 border-4 border-slate-700  dark:bg-slate-500 flex-1'>
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
            </div> */}
            
          </div>

          <div className=' font-productsans text-center  p-5 rounded-xl my-10 border-4 flex-1 border-teal-600 dark:border-teal-400'>
            <div className='flex justify-center'>
            <Image src={machine} width={100} height={100}/>
            </div>
            <h3 className=' text-xl text-teal-600 pt-8 pb-2 dark:text-teal-400'>Frameworks</h3>
            <p className='py-2 dark:text-white'>
              Set of libraries and techniques I use to implement and develop machine learning models.
            </p>

            <div className='container mx-auto font-productsans'>
              <div className=' grid-cols-3 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-row-2'>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/tensorflow/FF6F00" />
                    </div>
                    <p className='pb-2' >TensorFlow</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/pytorch/EE4C2C" />
                    </div>
                    <p className='pb-2' >PyTorch</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/scikitlearn/F7931E" />
                    </div>
                    <p className='pb-2'>Scikit-Learn</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/firebase/FFCA28" />
                    </div>
                    <p className='pb-2'>Firebase</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/react/#61DAFB" />
                    </div>
                    <p className='pb-2'>React</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/nodedotjs/339933" />
                    </div>
                    <p className='pb-2'>NodeJS</p>
                  </div>

              </div>
              </div>
          </div>

          <div className=' font-productsans text-center  p-5 rounded-xl my-10 border-4 flex-1 border-teal-600 dark:border-teal-400'>
            <div className='flex justify-center'>
            <Image src={tools} width={100} height={100}/>
            </div>
            <h3 className=' text-xl text-teal-600 pt-8 pb-2 dark:text-teal-400'>Tools</h3>
            <p className='py-2 dark:text-white'>
              Tools for  data pre-processing, visualization, model development and deployment.
            </p>

            <div className='container ml-auto font-productsans'>
              <div className=' grid-cols-3 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-row-2'>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full col-span-2'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/jupyter/F37626" />
                    </div>
                    <p className='pb-2' >Jupyter Notebook</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/googlecolab/F9AB00" />
                    </div>
                    <p className='pb-2'>Colab</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/android/3DDC84" />
                    </div>
                    <p className='pb-2' >Studio</p>
                  </div>

                  

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/anaconda/44A833" />
                    </div>
                    <p className='pb-2'>Anaconda</p>
                  </div>

                  <div className=' text-center rounded-lg border-4 border-slate-700  dark:bg-slate-500 flex-1 w-full'>
                    <div className='flex justify-center mb-2 mt-5 px-5 basis-1/3'>
                      <img height="32" width="32" src="https://cdn.simpleicons.org/git/F05032" />
                    </div>
                    <p className='pb-2'>Git</p>
                  </div>

              </div>
              </div>

            {/* <h4 className=' text-teal-600 py-4'>Frameworks and Tools I use</h4>
            <p className=' text-gray-800 py-1'>TensorFlow</p>
            <p>PyTorch</p>
            <p>Google Colab</p> */}
          </div>
          </div>
          
        </section>

        {/* PORTFOLIO SECTION */}
        <section>
          
          <div className=' font-productsans'>
          <h3 className=' text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Some description about the projects</p>
          </div>

          <div className=' font-productsans flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            
            {/* Multi-camera Surveillance */}
            <div className=' basis-1/3 flex-1 border-4 border-teal-600 dark:border-teal-400 rounded-lg'>
              <Image src={vigil} className=" rounded-b-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 py-4'>
                <h3 className="text-xl text-gray-800 dark:text-white">Multi-Camera Surveillance System</h3>
              <p className='text-md pb-4 dark:text-white'>Some description for the project</p>
              <button className='rounded-full border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>Machine Learning</button>
              <button className='rounded-full mx-2 border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>Python</button>
              </div>
            </div>

            <div className=' basis-1/3 flex-1 border-4 border-teal-600 dark:border-teal-400 rounded-lg'>
              <Image src={amazon} className=" rounded-b-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 py-4'>
                <h3 className="text-xl text-gray-800 dark:text-white">Amazon React Clone</h3>
              <p className='text-md pb-4 dark:text-white'>Some description for the project</p>
              <button className='rounded-full border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>React</button>
               <button className='rounded-full ml-2 border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>Firebase</button>
              <button className='rounded-full ml-2 border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>JavaScript</button>
              </div>
            </div>

            <div className=' basis-1/3 flex-1 border-4 border-teal-600 dark:border-teal-400 rounded-lg'>
              <Image src={fashion} className=" rounded-b-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 py-4'>
                <h3 className="text-xl text-gray-800 dark:text-white">H and M Fashion Recommendation System</h3>
              <p className='text-md pb-4 dark:text-white'>Some description for the project</p>
              <button className='rounded-full border-2 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white p-2
               dark:border-teal-400 dark:hover:bg-teal-400 dark:text-teal-400 dark:hover:text-white'>Python</button>
              </div>
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
