import React from "react";
import Image from 'next/image'
import Heading from "../Legos/Heading";
import Bullet from "../Legos/Bullet";
import Hobby from "../Legos/Hobby";

import club from "../../public/club.png"
import ais from "../../public/ais.png"
import reading from "../../public/reading.png"
import gym from "../../public/physical-activity.png"
import french from "../../public/french.png"
import muay from "../../public/muay-thai.png"
import dance from "../../public/dancing.png"
import art from "../../public/digital-art.png"


function SectionExtras(){
    return(
        <>
        
        {/* Co-curricular activities */}

        <Heading 
        title="Co-curricular Activities"
        desc="Involvement in Student Clubs, hobbies and other personal info "
        />

        <div className='container mx-auto'>
                  <div className='md:grid-cols-3 gap-2 pt-10 space-y-2 lg:space-y-0 md:grid lg:gap-5'>
                      
                      <div className=' font-productsans text-center p-5 rounded-xl flex flex-col justify-center group
                      bg-card-light hover:bg-hover-bg-light 
                      dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                        <div className='flex justify-center'>
                        <Image src={club} width={100} height={100}/>
                        </div>
                        <h3 className=' text-2xl pt-4 pb-2'>Student Mentor</h3>
                        <p className='pb-2'>
                          Google Developer Student Clubs <br></br>MES College of Engineering
                        </p>
                        </div>
                        

                      <div className=' font-productsans p-5 rounded-xl flex-1 group col-span-2 my-auto
                      bg-card-light hover:bg-hover-bg-light 
                      dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                        
                        <Bullet des="Taught students concepts of Deep Learning and implementation of Neural Networks in TensorFlow."/>
                        <Bullet des="Directed students for building mobile applications in Android using Android Studio."/>
                        <Bullet des="Conducted intercollege technical event for Google Cloud workshop and directed students in Machine Learning Track." />
                        <Bullet des="Lead college team for Google's 'Build for India' competition." />

                      </div>
                  </div>
        </div>

        <div className='container mx-auto'>
                  <div className='md:grid-cols-3 gap-2 pt-5 space-y-2 lg:space-y-0 md:grid lg:gap-5'>
                      
                      <div className=' font-productsans text-center p-5 rounded-xl flex flex-col justify-center group
                      bg-card-light hover:bg-hover-bg-light 
                      dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                        <div className='flex justify-center'>
                        <Image src={ais} width={100} height={100}/>
                        </div>
                        <h3 className=' text-2xl pt-4 pb-2'>Director</h3>
                        <p className='pb-2'>
                          Association of Indian Students <br></br> University of Southern California
                        </p>
                      </div>

                      <div className=' font-productsans p-5 rounded-xl flex-1 group col-span-2
                      bg-card-light hover:bg-hover-bg-light 
                      dark:text-white dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
                        
                        <Bullet des="Organized cultural events such as Diwali, Holi, Garba Night, etc. for over a thousand students in the university." />
                        <Bullet des="Designed posters and other publicity campaign materials for the events above. " />
                        <Bullet des="Represented India in the International Day Event organized by the university." />
                        <Bullet des="Performed group dance for the events of Holi and Diwali." />

                      </div>
                  </div>
        </div>

        {/* Hobbies */}

        <Heading 
        title="Hobbies"
        // desc=" My hobbies section includes a variety of activities that I enjoy and that demonstrate my diverse interests. 
        // It provides a glimpse into my personality and demonstrates my ability to balance work and leisure."
        desc="Diverse activities showcasing my personality, work-life balance, and interests."
        />

        <div className='container mx-auto'>
            <div className='lg:grid-cols-3 pt-10 pb-20 space-y-2 lg:space-y-0 grid lg:gap-8
                  grid-cols-2 gap-2
                  md:gap-2 sm:gap-2'>

                <Hobby 
                    img = {reading}
                    desc="Reading Science Fiction, Thriller books"
                />
                <Hobby 
                    img = {gym}
                    desc="Excercising at the Gym"
                />
                <Hobby 
                    img = {french}
                    desc="Practicing speaking and writing French"
                />
                <Hobby 
                    img = {muay}
                    desc="Learning martial arts form Muay Thai"
                />
                <Hobby 
                    img = {dance}
                    desc="Participating in Group Dances"
                />
                <Hobby 
                    img = {art}
                    desc="Calligraphy and making digital art"
                />


                    
            </div>
        </div>
        
        </>
    )
}

export default SectionExtras