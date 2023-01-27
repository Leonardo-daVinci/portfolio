import Head from "next/head";
import {useState} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Certificate from "../components/Certificate";

import Image from "next/image";
import coursera from "../public/coursera-logo.png"
import devfest from "../public/devfest.png"
import intel from "../public/intel.png"
import udacity from "../public/udacity.png"
import unity from "../public/unity.png"
import gcloud from "../public/gcloud.png"
import certificate from "../public/certificate.png"
import achieve from "../public/achievement.png"
import Achievement from "../components/Achievement";
import MiniSideBar from "../components/MiniSideBar";

export default function Details(){

    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
        <div id="details" className={darkMode ? "dark" : ""}>
            <Head>
                <title>Akshit Keoliya Certifications</title>
                <meta name="description" content="List of all the certifications and achievements" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <MiniSideBar />

            <main className=' bg-white px-5 md:px-5 lg:px-40 lg:ml-28 dark:bg-[#1f1f1f]' >

                <nav className='fixed z-10 top-10 right-4 lg:right-10 flex justify-between dark:text-white'>
                    <ul className='flex items-center'>
                     <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/>
                     </li>
             
                    </ul>
                </nav>

                <section>

                <div id="details-c" className=' font-productsans'>
                <h3 className='text-center lg:text-start text-5xl pt-10 pb-2 text-my-text-light md:text-4xl dark:text-my-text-dark '>Certifications</h3>
                <p className=' text-md py-5 leading-8 text-gray-800v md:text-xl dark:text-gray-200'>
                    This section includes an exhaustive list of certifications in machine learning, data science, mobile application development and cloud skills.
                    <br></br>
                    It demonstrates my commitment to learning new things and developing my abilities.
                </p>
                </div>

                <div className="my-10 container grid lg:grid-cols-3 gap-5 mx-auto">
                
                <Certificate 
                img={coursera}
                name="Introduction to TensorFlow for AI, ML, and Deep Learning"
                source="DeepLearning.AI"
                link="https://coursera.org/share/1f8ea593b1c2ad611800a10e65337336" 
                />

                <Certificate 
                img={coursera}
                name="Neural Networks and Deep Learning"
                source="DeepLearning.AI"
                link="https://coursera.org/share/b5fea1b15974aa58b6e1233d10cb3dac" 
                />

            {/* Qwiklabs Certificate 1*/}

                <Certificate 
                    img={gcloud}
                    name="Machine Learning Path"
                    source="Google Cloud"
                    link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404"
                />

                {/* Coursera Certificate  2*/}

                <Certificate 
                    img={coursera}
                    name="Convolutional Neural Networks in TensorFlow"
                    source="DeepLearning.AI"
                    link="https://coursera.org/share/5df47f9480c647ddde06ac7a1437f0cf" 
                />

          
                {/* Coursera Certificate  3*/}

                <Certificate 
                    img={coursera}
                    name="Natural Language Processing in TensorFlow"
                    source="DeepLearning.AI"
                    link="https://coursera.org/share/d8438d9d4d830342f83649642936bdfd" 
                />


                {/* Coursera Certificate  4*/}

                <Certificate 
                    img={coursera}
                    name="Sequence, Time Series and Prediction"
                    source="DeepLearning.AI"
                    link="https://coursera.org/share/85833a94a7eeef74a2e8904914bc84de" 
                />


                {/* Udacity Certificate  1*/}

                <Certificate 
                    img={udacity}
                    name="Intro to TensorFlow for Deep Learning"
                    source="TensorFlow"
                    link="https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187"
                />

                {/* Udacity Certificate  1*/}

                <Certificate 
                    img={udacity}
                    name="Developing Android Apps with Kotlin"
                    source="Google"
                    link="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012"
                />
                </div>
                </section>

                <section>

                <div id="details-a" className=' font-productsans'>
                <h3 className='text-center lg:text-start text-5xl pt-10 pb-2 text-my-text-light md:text-4xl dark:text-my-text-dark '>Achievements</h3>
                <p className=' text-md py-5 leading-8 text-gray-800v md:text-xl dark:text-gray-200'>
                This section shows my accomplishments and awards in the fields of machine learning and developing real world applications, and serves as a testament to my skills.
                </p>
                </div>

                <div className="mt-10 pb-10 container grid lg:grid-cols-3 gap-5 mx-auto">

                <Achievement
                    img={devfest}
                    name= "ML Expert Track Winner"
                    source="DevFest India"
                    des = " Implemented an end to end predictive model pipeline using colab then will learn to use DevOps for ML and conclude it with an image classification case study to classify tumors in health reports using TensorFlow."
                />

                <Achievement
                    img={devfest}
                    name="Android Expert Track Winner"
                    source="DevFest India"
                    des = "Built a clone of BookMyShow App using UI basics, loading dynamic content from the server and how to make the app available run offline"
                />

                <Achievement
                img={intel}
                name="Intel Edge AI Scholarship"
                source="Udacity and Intel Corporation"
                des={<>
                    Hands-on experience with edge AI tools and platforms, 
                including the Intel<span>&#174;</span> Distribution of OpenVINO<span>&#8482;</span> toolkit and Intel<span>&#174;</span> Developer Cloud for the Edge.
                    </>}
                />

                <Achievement
                img={unity}
                name="Unity Game Development Competition"
                source="College of Engineering, Pune"
                des="Built a game development project - Open World Runner - using Unity Game Engine, featuring 3D graphics and gameplay mechanics. "
                />

                </div>



                </section>


            </main>
        </div>
        </>
    )
}