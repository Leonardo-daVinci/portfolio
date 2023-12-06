import React from "react";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs"
import Heading from "../Legos/Heading";
import Carousel from "../Legos/Carousel";


function SectionMerits(){
    return(
        <>

        <Heading 
        title="Certifications and Achievements"
        desc={<>
        This section includes certifications in machine learning, deep learning and data science, recognition in hackathons, 
        competitions and DevFests, and awards and publications.
        <br></br>  It showcases my dedication to continuously learn and improve my skills.
        </>}
        />

        <Carousel />

        <Link href="/details">
          <div className=' flex justify-end'>
          <div className='font-productsans text-center rounded-2xl mb-10 group p-5 lg:w-1/2
           bg-card-light hover:bg-hover-bg-light
           flex items-center
            dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
             
            <h3 className='text-center w-full text-2xl'>
              View all certifications and achievements here</h3>
            <BsArrowRight className=' text-2xl ml-5'/>
            </div>
          </div>
          </Link>
        
        </>
    )
}

export default SectionMerits