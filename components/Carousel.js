import React from "react";
import Slider from "react-slick";
import {BsArrowRight} from "react-icons/bs"
import Image from 'next/image'
import coursera from "../public/coursera-logo.png"
import Chips from "./Chips";
import Certifications from "./Certifications";

function Carousel() {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return(
        <>
            {/* Certifications SECTION */}
            <div className=" font-productsans">
            <Slider {...settings}>

            <div className='  text-center rounded-xl my-10 group p-5 flex-1
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
            
            
          </div>

            {/* Coursera Certificate  1*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Introduction to TensorFlow for AI, ML, and Deep Learning</h3>
                <p className='py-2 dark:text-white'>
                    DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/1f8ea593b1c2ad611800a10e65337336" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>


            {/* Coursera Certificate  1-1*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Neural Networks and Deep Learning</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/b5fea1b15974aa58b6e1233d10cb3dac" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>


            {/* Coursera Certificate  2*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Convolutional Neural Networks in TensorFlow</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/5df47f9480c647ddde06ac7a1437f0cf" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>

          
            {/* Coursera Certificate  3*/}

          <div className=' text-center rounded-xl my-10 flex group px-5 
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Natural Language Processing in TensorFlow</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/d8438d9d4d830342f83649642936bdfd" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>


            {/* Coursera Certificate  4*/}

          <div className=' text-center rounded-xl my-10 flex group px-5 
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Sequence, Time Series and Prediction</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/85833a94a7eeef74a2e8904914bc84de" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>

          
          
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
            
            
          </div>

            {/* Coursera Certificate  1*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Introduction to TensorFlow for AI, ML, and Deep Learning</h3>
                <p className='py-2 dark:text-white'>
                    DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/1f8ea593b1c2ad611800a10e65337336" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>


            {/* Coursera Certificate  2*/}

          <div className=' text-center rounded-xl my-10 flex group px-5
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Convolutional Neural Networks in TensorFlow</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/5df47f9480c647ddde06ac7a1437f0cf" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>

          
            {/* Coursera Certificate  3*/}

          <div className=' text-center rounded-xl my-10 flex group px-5 
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Natural Language Processing in TensorFlow</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/d8438d9d4d830342f83649642936bdfd" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>


            {/* Coursera Certificate  4*/}

          <div className=' text-center rounded-xl my-10 flex group px-5 
           bg-card-light hover:bg-hover-bg-light
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                <div className='flex justify-center'>
            <Image src={coursera} width={"50%"} height={"50%"} layout="responsive"/>
            </div>
                <h3 className=' text-2xl pt-4 pb-2'>Sequence, Time Series and Prediction</h3>
                <p className='py-2 dark:text-white'>
                DeepLearning.AI
                </p>

                <div className="w-full flex justify-end p-4">
                    <a href="https://coursera.org/share/85833a94a7eeef74a2e8904914bc84de" target="_blank">
                    <button className="py-2 px-6 
                    rounded-full border-2 border-my-text-light
                    text-my-text-light
                    hover:text-white hover:bg-my-text-light">
                        View
                    </button>
                    </a>
            </div>
            </div>

          
          
            </Slider>
            </div>


        </>
    )
}


export default Carousel