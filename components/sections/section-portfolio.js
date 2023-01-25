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
import Project from "../Project";

function SectionPortfolio(){
    return(
        <>
        <div className="my-10 container grid lg:grid-cols-3 gap-10 mx-auto">

          <Project 
              img = {vigil}
              tags = {<div>
                <Chips category="Machine Learning" />
                <Chips category="Python" />
              </div>}
              name = "Multi-Camera Surveillance System"
              des = "Maps individuals in 3D space and predicts their movement using LSTM model."
              link = ""
          />

          <Project 
            img = {amazon}
            tags = {<div>
              <Chips category="React" />
                <Chips category="Firebase" />
                <Chips category="JavaScript" />
            </div>}
            name = "Amazon React Clone"
            des = "A clone of Amazon website with user accounts using React context API and Firebase firestore Along with payment module using Stripe.js and Cloud Functions."
            link = "https://github.com/Leonardo-daVinci/amazon-clone"
          />

          <Project 
            img = {fashion}
            tags = {<div>
              <Chips category="Machine Learning" />
              <Chips category="Python" />
            </div>}
            name = "H and M Fashion Recommendation System"
            des = "Ensemble based recommender for Kaggle competition. Employed LSTM, K-Means, PCA, and other algorithms in a two staged ensemble model."
            link="/portfolio/HM-Report.pdf" 
            />

          <Project 
            img = {littleGo}
            tags = {<div>
              <Chips category="Machine Learning" />
              <Chips category="Python" />
            </div>}
            name = "Little Go Agent"
            des = "A reinforcement learning agent that plays 5x5 Go game using Q-Learning Algorithm."
            link="https://github.com/Leonardo-daVinci/Little-Go-Agent"
            />

          <Project 
            img = {stocksApp}
            tags = {<div>
              <Chips category="Android" />
              <Chips category="Node.js" />
              <Chips category="GCP" />
            </div>}
            name = "StocksApp"
            des = "Mobile application that simulates buying and selling stocks along with portfolio for each user. Built using Android frontend and Node,js backend."
            link = "https://github.com/Leonardo-daVinci/StocksApp"
            />

          <Project 
            img = {tflite}
            tags = {<div>
              <Chips category="TensorFlow" />
              <Chips category="Android" />
            </div>}
            name = "EMNIST Character Classifier"
            des = "Android application that classifies user input doodles into EMNIST characters using TensorFlow Lite."
            link = "https://github.com/Leonardo-daVinci/EMNIST-Character-Recognizer"
            />

        </div>
        </>
    )
}

export default SectionPortfolio