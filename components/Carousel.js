import React from "react";
import Slider from "react-slick";
import {BsArrowRight} from "react-icons/bs"

import Image from 'next/image'
import coursera from "../public/coursera-logo.png"
import devfest from "../public/devfest.png"
import intel from "../public/intel.png"
import udacity from "../public/udacity.png"
import unity from "../public/unity.png"
import gcloud from "../public/gcloud.png"
import certificate from "../public/certificate.png"
import achieve from "../public/achievement.png"

import Certificate from "./Certificate";

function Carousel() {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return(
        <>
            {/* Certifications SECTION */}
            <div className=" font-productsans mt-10">

            {/* <div className='  text-center rounded-xl my-10 group p-5 flex-1
           bg-card-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            <h3 className=' text-2xl pt-5 pb-2'>Certifications</h3>
            
            <div className=" flex justify-start m-auto items-center pb-5">
            <p className='py-2 w-full ml-5
            text-lg 
            dark:text-white'>
              These are some of my most recent certifications!
            </p>
            <BsArrowRight className=" text-2xl mx-5"/>
            </div>
            </div> */}

            <Slider {...settings}>

            <div className='  text-center rounded-xl group p-5 flex
           bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            <h3 className=' text-2xl pt-5 pb-2'>Certifications</h3>
            
            <div className=" flex justify-start m-auto items-center pb-5">
                <p className='py-2 w-full ml-5
                text-lg 
                dark:text-white'>
                These are some of my most recent certifications!
                </p>
                <BsArrowRight className=" text-2xl mx-5"/>
                </div>
                <div className='flex justify-center'>
                    <Image src={certificate} width={100} height={100}/>
                </div>
            </div>

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
          
            </Slider>
            </div>

            {/* Achievements SECTION */}
            <div className=" font-productsans">
            <Slider {...settings}>

            <div className='  text-center rounded-xl my-10 group p-5 flex-1
           bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            <h3 className=' text-2xl pt-5 pb-2'>Achievements</h3>
            
            <div className=" flex justify-start m-auto items-center pb-5">
                <p className='py-2 w-full ml-5
                text-lg 
                dark:text-white'>
                Collection of my Achievements and Recognitions! 
                </p>
                <BsArrowRight className=" text-2xl mx-5"/>
                </div>
                <div className='flex justify-center'>
                    <Image src={achieve} width={100} height={100}/>
                </div>
            </div>

            {/* Devfest Achievement  1*/}

            <div className='rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={devfest} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl text-center  pt-4 pb-2'>ML Expert Track Winner</h3>
                <p className=' text-center text-lg py-2 text-my-text-light dark:text-white'>
                    DevFest India
                </p>
                <p className="pb-4 text-lg">
                Implemented an end to end predictive model pipeline using colab then will learn to use DevOps for ML
                 and conclude it with an image classification case study to classify tumors in health reports using TensorFlow.
                </p>
            </div>

             {/* Devfest Achievement  2*/}

             <div className='rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={devfest} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl text-center  pt-4 pb-2'>Android Expert Track Winner</h3>
                <p className=' text-center text-lg py-2 text-my-text-light dark:text-white'>
                    DevFest India
                </p>
                <p className="pb-4 text-lg">
                Built a clone of BookMyShow App using UI basics, loading dynamic content from the server
                 and how to make the app available run offline.
                </p>
            </div>



            {/*Achievement  3*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={intel} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
            <h3 className=' text-2xl text-center  pt-4 pb-2'>Intel Edge AI Scholarship</h3>
                <p className=' text-center text-lg  py-2 text-my-text-light dark:text-white'>
                    Udacity and Intel Corporation
                </p>
                <p className="pb-4 text-lg">
                Hands-on experience with edge AI tools and platforms, 
                including the Intel<span>&#174;</span> Distribution of OpenVINO<span>&#8482;</span> toolkit and Intel<span>&#174;</span> Developer Cloud for the Edge.
                </p>
            </div>

          

            {/* Achievement  4*/}

          <div className=' text-center rounded-xl my-10 flex group px-5 
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={unity} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Unity Game Development Competition</h3>
                <p className='py-2 text-lg text-my-text-light dark:text-white'>
                College of Engineering, Pune
                </p>
                <p className="pb-4 text-lg">
                Built a game development project - Open World Runner - using Unity Game Engine, featuring 3D graphics and gameplay mechanics. 
                </p>
            </div> 
          
            </Slider>
            </div>


        </>
    )
}


export default Carousel