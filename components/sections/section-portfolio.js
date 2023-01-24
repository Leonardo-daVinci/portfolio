import React from "react";
import Image from "next/image";
import amazon from "../../public/amazon-clone.png"
import fashion from "../../public/hm-fashion.png"
import vigil from "../../public/vigil-system.png"
import littleGo from "../../public/littleGo.png"
import stocksApp from "../../public/stocksApp.png"
import tflite from "../../public/tflite.png"


import Chips from "../Chips";
import ViewBtn from "../ViewBtn";

function SectionPortfolio(){
    return(
        <>
        <div className=' font-productsans flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            
            {/* Multi-camera Surveillance */}
            <div className=' basis-1/4 flex-1 group bg-card-light rounded-lg hover:bg-hover-bg-light
            dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={vigil} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

              <Chips category="Machine Learning" />
              <Chips category="Python" />

              <h3 className="text-xl pt-4 text-gray-800 dark:text-white">Multi-Camera Surveillance System</h3>
              <p className='text-md pt-2 dark:text-white'>Maps individuals in 3D space and predicts their movement using LSTM model.</p>
              </div>
              {/* <ViewBtn link="" /> */}
            </div>

            <div className=' basis-1/4 flex-1 bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={amazon} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

                <Chips category="React" />
                <Chips category="Firebase" />
                <Chips category="JavaScript" />

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">Amazon React Clone</h3>
              <p className='text-md pt-2 dark:text-white'>A clone of Amazon website with user accounts using React context API and Firebase firestore
              Along with payment module using Stripe.js and Cloud Functions.</p>
              </div>
              <ViewBtn link="https://github.com/Leonardo-daVinci/amazon-clone" />
            </div>

            <div className='basis-1/4 flex-1 bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={fashion} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

                <Chips category="Machine Learning" />
                <Chips category="Python" />

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">H and M Fashion Recommendation System</h3>
              <p className='text-md pt-2 dark:text-white'>Ensemble based recommender for Kaggle competition. Employed LSTM, K-Means, PCA, and other algorithms in a two staged ensemble model.
              </p>

              <ViewBtn link="/portfolio/HM-Report.pdf" />
              
              </div>
            </div>

            <div className='basis-1/4 flex-1 bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={littleGo} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 pt-4'>

                <Chips category="Machine Learning" />
                <Chips category="Python" />

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">Little Go Agent</h3>
              <p className='text-md pt-2 dark:text-white'>A reinforcement learning agent that plays 5x5 Go game using Q-Learning Algorithm.</p>
              </div>
              <ViewBtn link="https://github.com/Leonardo-daVinci/Reinforcement_Learning" />
              
            </div>

            <div className='basis-1/4 flex-1 bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={stocksApp} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 py-4'>

                <Chips category="Android" />
                <Chips category="Node.js" />
                <Chips category="GCP" />

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">StocksApp</h3>
              <p className='text-md pt-2 dark:text-white'>Mobile application that simulates buying and selling stocks along with portfolio for each user.
              Built using Android frontend and Node,js backend.</p>
              </div>
              <ViewBtn link="https://github.com/Leonardo-daVinci/StocksApp" />
            </div>

            <div className='basis-1/4 flex-1 bg-card-light rounded-lg hover:bg-hover-bg-light group
             dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
              <Image src={tflite} className=" rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
              <div className=' px-4 py-4'>

                <Chips category="TensorFlow" />
                <Chips category="Android" />

                <h3 className="text-xl pt-4 text-gray-800 dark:text-white">EMNIST Character Classifier</h3>
              <p className='text-md pt-2 dark:text-white'>Android application that classifies user input doodles into EMNIST characters using TensorFlow Lite.</p>
              </div>
              <ViewBtn link="https://github.com/Leonardo-daVinci/EMNIST-Android-TF" />
            </div>

          </div>
        </>
    )
}

export default SectionPortfolio