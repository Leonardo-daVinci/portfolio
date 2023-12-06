import React from "react";
import Heading from "../Legos/Heading";
import Blocks from "../Legos/Blocks";


import lang from '../../public/lang.png'
import machine from '../../public/machine.png'
import tools from '../../public/tools.png'
import SkillTable from "../Legos/SkillTable";


function SectionSkills(){
    return (
        <>
        
        <Heading 
        title="My Skills"
        desc="I have a strong background in mathematics and computer science and have been 
        working on developing my skills in ML techniques and algorithms"
        />

        {/* Cards */}
        <div className='lg:flex gap-5 '>

            <SkillTable 
            title='Languages Known'
            img={lang}
            desc='Using multitudes of languages to accomplish tasks and leveraging best features of each one!'
            blocks={
                <div className=' grid-cols-2 space-y-2 lg:space-y-0 grid gap-2
                    sm:grid-cols-2 md:grid-cols-2'>
                 <Blocks skill="Python" image="https://cdn.simpleicons.org/python/3776AB" />
                  <Blocks skill="Kotlin" image="https://cdn.simpleicons.org/kotlin/7F52FF" />
                  <Blocks skill="JavaScript" image="https://cdn.simpleicons.org/javascript/F7DF1E" />
                  <Blocks skill="SQL" image="https://cdn.simpleicons.org/sqlite/003B57" />
                </div>
            }
            />

            <SkillTable
            title="Frameworks"
            img={machine}
            desc="Set of libraries and techniques I use to implement and develop machine learning models."
            blocks={
                <div className=' lg:grid-cols-3 space-y-2 lg:space-y-0 grid gap-2 grid-cols-2 '>
                  <Blocks skill="TensorFlow" image="https://cdn.simpleicons.org/tensorflow/FF6F00"/>
                  <Blocks skill="PyTorch" image="https://cdn.simpleicons.org/pytorch/EE4C2C" />
                  <Blocks skill="Scikit-Learn" image="https://cdn.simpleicons.org/scikitlearn/F7931E" />
                  <Blocks skill="Firebase" image="https://cdn.simpleicons.org/firebase/FFCA28" />
                  <Blocks skill="React" image="https://cdn.simpleicons.org/react/61DAFB" />
                  <Blocks skill="NodeJS" image="https://cdn.simpleicons.org/nodedotjs/339933" /> 
              </div>
                 
            }
            />


          <SkillTable 
             title="Tools"
            img={tools}
            desc="Tools for  data pre-processing, visualization, model development and deployment."
            blocks={
                <div className='container ml-auto font-productsans'>
              <div className=' grid-cols-3 space-y-2 lg:space-y-0 grid gap-2'>

                  <div className=' text-center rounded-lg flex-1 w-full col-span-2
                  bg-hover-bg-light group-hover:bg-card-light  
                  dark:bg-hover-bg-dark dark:group-hover:bg-hover-bg-light dark:group-hover:text-gray-700'>
                    <div className='flex justify-center mb-2 mt-5 basis-1/3' >
                      <img height="32" width="32" src="https://cdn.simpleicons.org/jupyter/F37626" />
                    </div>
                    <p className='pb-2' >Jupyter Notebook</p>
                  </div>

                  <Blocks skill="Studio" image="https://cdn.simpleicons.org/android/3DDC84" />
                  <Blocks skill="Colab" image="https://cdn.simpleicons.org/googlecolab/F9AB00" />
                  <Blocks skill="Anaconda" image="https://cdn.simpleicons.org/anaconda/44A833" />
                  <Blocks skill="Git" image="https://cdn.simpleicons.org/git/F05032" />

              </div>
              </div>
            }
          />

        </div>

        </>
    )
}

export default SectionSkills