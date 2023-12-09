import React from "react";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs"
import Heading from "../Legos/Heading";
import Carousel from "../Legos/Carousel";
import MoreBtn from "../Legos/MoreBtn";


function SectionMerits(){
    return(
        <>

        <Heading 
        title="Certifications and Achievements"
        // desc={<>
        // This section includes certifications in machine learning, deep learning and data science, recognition in hackathons, 
        // competitions and DevFests, and awards and publications.
        // <br></br>  It showcases my dedication to continuously learn and improve my skills.
        // </>}
        desc="Recognition in the field of Generative AI, Machine Learning, Data Science and more."
        />

        <Carousel />

        <Link href="/details">
          <MoreBtn title="View all certifications and achievements"/>
          </Link>
        
        </>
    )
}

export default SectionMerits