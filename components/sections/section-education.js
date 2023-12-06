import React from "react";
import Heading from "../Legos/Heading";
import Course from "../Legos/Course";

function SectionEducation(){
    return(
        <>
        <Heading
        title="Academic background"
        desc="Summary of my Masters Degree and Bachelors Degree coursework."
        />

<div className=' font-productsans flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap'>
          
          <div className=' basis-1/3 flex-1 group bg-card-light rounded-lg hover:bg-hover-bg-light
          dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            
            <div className=' px-4 py-4 text-center'>
            <h3 className="text-2xl pt-4 text-gray-800 dark:text-white">Masters in Computer Science</h3>
            <p className='text-xl pb-4 dark:text-white'>University of Southern California, Los Angeles, US</p>
            </div>
            <div className='container mx-auto font-productsans'>
              <div className=' grid-cols-1 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-row-2'>

              <Course 
                id="DSCI-552" name="Machine Learning for Data Science"
                des="Practical applications of machine learning techniques to real-world problems. 
                Uses in data mining and recommendation systems and for building adaptive user interfaces."
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Mohammad Reza Rajati</span></p>}
              />

              <Course 
                id="CSCI-585" name="Database Systems"
                des="Database system architecture, conceptual database models - semantic, object-oriented, logic-based, and relational databases, 
                user and program interfaces,  database system implementation, integrity, security, concurrency and recovery. 
                Requires  Knowledge of relational databases, SQL, relational algebra and physical database design."
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Sathyanaraya Raghavachary</span></p>}
              />

              <Course 
                id="CSCI-544" name="Applied Natural Language Processing"
                des="Introduction to key components of human language technologies, including information extraction, sentiment analysis, question answering, machine translation."
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Ron Artstein and Prof. Mohammad Rostami</span></p>}
              />

              <Course 
                id="CSCI-567" name="Machine Learning"
                des="Statistical methods for building intelligent and adaptive systems that improve performance from experiences. 
                Focus on theoretical understanding of these methods and their computational implications. 
                Requires Undergraduate level training or coursework in linear algebra, multivariate calculus, basic probability and statistics"
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Yan Liu</span></p>}
              />

              <Course 
                id="CSCI-571" name="Web Technologies"
                des="Advanced study of programming languages with application to the Web. Languages for client-side and server-side processing. 
                Examples taken from: HTML, Java, JavaScript, Perl, XML and others"
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Marco Papa</span></p>}
              />

              <Course 
                id="CSCI-561" name="Foundations of Artificial Intelligence"
                des="Foundations of symbolic intelligent systems, search, logic, knowledge representation, planning, learning."
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Wei-Min Shen</span></p>}
              />

              <Course 
                id="CSCI-570" name="Analysis of Algorithms"
                des="Explores fundamental techniques such as recursion, Fourier transform ordering, dynamic programming for efficient algorithm construction. 
                Examples include arithmetic, algebraic, graph, pattern matching, sorting, searching algorithms."
                prof={<p>Taught by <span className=" text-my-text-light dark:text-my-text-dark">Prof. Shahriar Shamsian</span></p>}
              />
                

              </div>
            </div>
          </div>

          <div className=' basis-1/3 flex-1 group bg-card-light rounded-lg hover:bg-hover-bg-light
          dark:bg-card-dark dark:hover:bg-hover-bg-dark'>
            
            <div className=' px-4 py-4 text-center'>
            <h3 className="text-2xl pt-4 text-gray-800 dark:text-white">Bachelors in Computer Engineering</h3>
            <p className='text-xl pb-4 dark:text-white'>MES College of Engineering, Pune, India</p>
            </div>
            <div className='container mx-auto font-productsans'>
              <div className='grid-cols-1 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-2'>

              <Course 
                id="BE" name="Final Year Engineering"
                des={
                  <div className='container mx-auto font-productsans'>
                      <div className=' md:grid-cols-2 p-2 space-y-2 md:space-y-0 md:grid md:gap-2'>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 7</p>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 8</p>
                        <p className='md:hidden text-md text-my-text-light dark:text-my-text-dark'>Semester 7 and 8</p>
                        <p>Artificial Intelligence and Robotics</p>
                        <p>Machine Learning</p>
                        <p>Data Analytics</p>
                        <p>Human Computer Interface</p>
                        <p>Data Mining and Warehousing</p>
                        <p>Soft Computing and Optimization</p>
                        <p>High Performance Computing</p>
                        <p>Information and Cyber Security</p>
                        <p>Software Testing and QA</p>
                        <p>Final Year Project</p>
                      </div>
                    </div>
                }
              />

              <Course 
                id="TE" name="Third Year Engineering"
                des={
                  <div className='container mx-auto font-productsans'>
                      <div className=' md:grid-cols-2 p-2 space-y-2 md:space-y-0 md:grid md:gap-2'>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 5</p>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 6</p>
                        <p className='md:hidden text-md text-my-text-light dark:text-my-text-dark'>Semester 5 and 6</p>
                        <p>Theory of Computation</p>
                        <p>Design and Analysis of Algorithms</p>
                        <p>Database Management Systems</p>
                        <p>System Prog. and Operating Systems</p>
                        <p>Software Engg. and Project Mgmt.</p>
                        <p>Embedded Systems and IOT</p>
                        <p>Info. Systems and Engg Economics</p>
                        <p>Software Modelling and Design</p>
                        <p>Computer Networks</p>
                        <p>Web Technology</p>
                      </div>
                    </div>
                }
              />

              <Course 
                id="SE" name="Second Year Engineering"
                des={
                  <div className='container mx-auto font-productsans'>
                      <div className=' md:grid-cols-2 p-2 space-y-2 md:space-y-0 md:grid md:gap-2'>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 3</p>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 4</p>
                        <p className='md:hidden text-md text-my-text-light dark:text-my-text-dark'>Semester 3 and 4</p>
                        <p>Discrete Mathematics</p>
                        <p>Engineering Mathematics III</p>
                        <p>Data Structures and Algorithms</p>
                        <p>Advanced Data Structures</p>
                        <p>Object Oriented Programming</p>
                        <p>Principles of Prog. Languages</p>
                        <p>Digital Electronics and Logic Design</p>
                        <p>Computer Graphics</p>
                        <p>Comp. Organization and Arch.</p>
                        <p>Microprocessor</p>
                      </div>
                    </div>
                }
              />

              <Course 
                id="FE" name="First Year Engineering"
                des={
                  <div className='container mx-auto font-productsans'>
                      <div className=' md:grid-cols-2 p-2 space-y-2 md:space-y-0 md:grid md:gap-2'>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 1</p>
                        <p className='hidden md:block text-2xl text-my-text-light dark:text-my-text-dark'>Semester 2</p>
                        <p className='md:hidden text-md text-my-text-light dark:text-my-text-dark'>Semester 1 and 2</p>
                      <p>Engineering Mathematics I</p>
                      <p>Engineering Mathematics II</p>
                      <p>Engineering Physics</p>
                      <p>Engineering Chemistry</p>
                      <p>Fundamentals of Prog. Lang. I</p>
                      <p>Fundamentals of Prog. Lang. II</p>
                      <p>Basic Electronics Engg.</p>
                      <p>Basic Electrical Engg.</p>
                      <p>Basic Civil and Environment Engg</p>
                      <p>Basic Mechanical Engg</p>
                      <p>Engineering Graphics I</p>
                      <p>Engineering Graphics II</p>
                      <p>Workshop Practices</p>
                      <p>Physical Education</p>

                      </div>
                    </div>
                }
              />

              </div>
            </div>
          </div>
          
        </div>

        </>
    )
}

export default SectionEducation