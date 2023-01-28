import Head from "next/head";
import {useState} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Certificate from "../components/Certificate";

import Image from 'next/image'
import coursera from "../public/coursera-logo.png"
import devfest from "../public/devfest.png"
import intel from "../public/intel.png"
import udacity from "../public/udacity.png"
import udemy from "../public/udemy.png"
import unity from "../public/unity.png"
import gcloud from "../public/gcloud.png"
import apache from "../public/apache.png"
import assist from "../public/g-assist.png"
import ibm from "../public/ibm.png"

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
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}/>
            </Head>
            <MiniSideBar />

            <div className="lg:hidden fixed top-0 w-full bg-white dark:bg-[#1f1f1f]">
                <div className=" p-5 flex justify-end dark:text-white">
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
                </div>
                
            </div>


            <main className=' bg-white px-5 md:px-5 lg:px-40 lg:ml-28 dark:bg-[#1f1f1f]' >

                <nav className='hidden lg:block fixed z-10 top-10 right-4 lg:right-10 justify-between dark:text-white'>
                    <ul className='flex items-center'>
                     <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/>
                     </li>
             
                    </ul>
                </nav>

                <section  id="details-c" className="pt-10 lg:pt-0">

                <div className=' font-productsans'>
                <h3 className='text-center lg:text-start text-5xl pt-5 pb-2 text-my-text-light md:text-4xl dark:text-my-text-dark '>Certifications</h3>
                <p className=' text-md py-5 leading-8 text-gray-800v md:text-xl dark:text-gray-200'>
                    This section includes an exhaustive list of certifications in machine learning, data science, mobile application development and cloud skills.
                    <br></br>
                    It demonstrates my commitment to learning new things and developing my abilities.
                </p>
                </div>

                <div className="my-10 container grid lg:grid-cols-4 gap-4 mx-auto">

                {/* Coursera Certificates */}

                <Certificate 
                img={coursera}
                name="TensorFlow Developer Specialization"
                source="DeepLearning.AI"
                link="https://coursera.org/share/ea025eb7e88138cfcbac4cf00ff673f9" 
                />
                
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

                <Certificate 
                img={coursera}
                name="Convolutional Neural Networks in TensorFlow"
                source="DeepLearning.AI"
                link="https://coursera.org/share/5df47f9480c647ddde06ac7a1437f0cf" 
                />

                <Certificate 
                img={coursera}
                name="Sequence, Time Series and Prediction"
                source="DeepLearning.AI"
                link="https://coursera.org/share/85833a94a7eeef74a2e8904914bc84de" 
                />

                {/* IBM Skill Network */}
                <Certificate
                img={ibm}
                name="Deep Learning"
                source="IBM - Cognitive Class"
                link="https://www.credly.com/badges/7bdc937c-012d-4cce-af13-fb4b094541fe"
                />

                <Certificate
                img={ibm}
                name="Data Science Foundations"
                source="IBM - Cognitive Class"
                link="https://www.credly.com/badges/0a40eaaa-fff2-4905-aaa2-08665d57b79a"
                />

                <Certificate
                img={ibm}
                name="Python for Data Science"
                source="IBM - Cognitive Class"
                link="https://www.credly.com/badges/69418037-5038-4e0f-831d-302ced9a5c84"
                />

                <Certificate
                img={ibm}
                name="Accelerated Deep Learning with GPU"
                source="IBM - Cognitive Class"
                link="https://www.credly.com/badges/e27a8e7a-001f-4921-a28e-9a0e3a18f18f"
                />

                {/* Qwiklabs Certificate*/}

                <Certificate 
                    img={gcloud}
                    name="Google Cloud Skill Boost"
                    source="Google Cloud"
                    link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404"
                />

                <Certificate 
                    img={gcloud}
                    name="Google Developer Essentials"
                    source="Google Cloud"
                    link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404/badges/148994"
                />

                <Certificate 
                    img={gcloud}
                    name="Build Interactive Apps with Google Assistant"
                    source="Google Cloud"
                    link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404/badges/149155"
                />

                <Certificate 
                    img={gcloud}
                    name="TensorFlow on Google Cloud"
                    source="Google Cloud"
                    link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404/badges/146779"
                />

                {/* Udacity Certificate */}

                <Certificate 
                    img={udacity}
                    name="Intro to TensorFlow for Deep Learning"
                    source="TensorFlow"
                    link="https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187"
                />

                <Certificate 
                    img={udacity}
                    name="Developing Android Apps with Kotlin"
                    source="Google"
                    link="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012"
                />

                {/* Udemy Courses */}
                <Certificate
                img={udemy}
                name="Progressive Web App Bootcamp"
                source="Udemy"
                link="https://www.udemy.com/certificate/UC-2cb6a0fc-2bc3-445d-84d8-dad3038a0ee5/"
                />

                </div>
                </section>

                <section  id="details-a">

                <div className=' font-productsans pt-10 lg:pt-0'>
                <h3 className='text-center lg:text-start text-5xl pt-5 pb-2 text-my-text-light md:text-4xl dark:text-my-text-dark '>Achievements</h3>
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
                img={assist}
                name="Google Assistant Developer Prize"
                source="Google"
                des="Won a Google Home Mini for creating mutiple apps using Google Cloud Actions and DialogFlow for Google Assistant."
                />

                <Achievement
                img={apache}
                name="Apache Cassandra Workshop Winner"
                source="DataStax, Inc."
                des="Workshop by Developer Advocate team of DataStax to learn fundamentals and basics of Astra DB, cloud based NOSQL Apache Cassandra-as-Service Platform."
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