import React from "react";
import Slider from "react-slick";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"

import Image from 'next/image'
import coursera from "../public/coursera-logo.png"
import devfest from "../public/devfest.png"
import intel from "../public/intel.png"
import udacity from "../public/udacity.png"
import udemy from "../public/udemy.png"
import unity from "../public/unity.png"
import gcloud from "../public/gcloud.png"
import certificate from "../public/certificate.png"
import achieve from "../public/achievement.png"
import ibm from "../public/ibm.png"

import Certificate from "./Certificate";
import Achievement from "./Achievement";

function Carousel() {

    // Experimental Section
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          >
            <BsArrowRight className="hidden lg:block text-2xl ml-5 hover:text-my-text-light dark:hidden"/>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            onClick={onClick}
          >
            <BsArrowLeft className="hidden lg:block text-2xl hover:text-my-text-light dark:hidden"/>
          </div>
        );
      }


    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
          breakpoint: 900,
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
                name="TensorFlow Developer Specialization"
                source="DeepLearning.AI"
                link="https://coursera.org/share/ea025eb7e88138cfcbac4cf00ff673f9" 
            />

            <Certificate 
                img={gcloud}
                name="Machine Learning Path"
                source="Google Cloud"
                link="https://www.cloudskillsboost.google/public_profiles/244b103e-debd-4b14-a0f6-90ebc3705404"
            />

            <Certificate 
                img={udacity}
                name="Developing Android Apps with Kotlin"
                source="Google"
                link="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012"
            />

            <Certificate
                img={ibm}
                name="Deep Learning"
                source="IBM - Cognitive Class"
                link="https://www.credly.com/badges/7bdc937c-012d-4cce-af13-fb4b094541fe"
            />

            <Certificate
                img={udemy}
                name="Progressive Web App Bootcamp"
                source="Udemy"
                link="https://www.udemy.com/certificate/UC-2cb6a0fc-2bc3-445d-84d8-dad3038a0ee5/"
            />
          
            </Slider>
            </div>

            {/* Achievements SECTION */}
            <div className=" font-productsans py-5">
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

            <Achievement
                    img={devfest}
                    name= "ML Expert Track Winner"
                    source="DevFest India"
                    des = " Implemented an end to end predictive model pipeline using colab then will learn to use DevOps for ML and conclude it with an image classification case study to classify tumors in health reports using TensorFlow."
                />

             {/* Devfest Achievement  2*/}
            <Achievement
                img={devfest}
                name="Android Expert Track Winner"
                source="DevFest India"
                des = "Built a clone of BookMyShow App using UI basics, loading dynamic content from the server and how to make the app available run offline"
            />


            {/*Achievement  3*/}

            <Achievement
                img={intel}
                name="Intel Edge AI Scholarship"
                source="Udacity and Intel Corporation"
                des={<>
                    Hands-on experience with edge AI tools and platforms, 
                including the Intel<span>&#174;</span> Distribution of OpenVINO<span>&#8482;</span> toolkit and Intel<span>&#174;</span> Developer Cloud for the Edge.
                    </>}
                />

            {/* Achievement  4*/}

            <Achievement
                img={unity}
                name="Unity Game Development Competition"
                source="College of Engineering, Pune"
                des="Built a game development project - Open World Runner - using Unity Game Engine, featuring 3D graphics and gameplay mechanics. "
                />
          
            </Slider>
            </div>


        </>
    )
}


export default Carousel