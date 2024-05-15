import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education1 from './Education1';
import ProfessionalSkills from './Professional Skills';
import Experience from './Experience.js';


const Education = () => {

  const [educationData, setEducationData] = useState(true)
  const [skillsData, setSkillsData] = useState(false)
  const [experience, setExperience] = useState(false);
  return (
    <section id='education'
    className='w-full py-20 border-b-[1px] border-b-black'>
         <div className='flex justify-center items-center text-center'>
        <Title 
        title=''
        des="Education"/>
        </div>
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3'>
                <li
                 onClick={() => setEducationData(true) & 
                 setSkillsData(false) & setExperience(false)}
                 className={`${educationData ? "border-designColor rounded:lg": "border-transparent"} resumeLi`}>
                  Education
                </li>
                <li 
                onClick={() => setEducationData(false) & 
                setSkillsData(true) & setExperience(false)} 
                className={`${skillsData ? "border-designColor rounded:lg": "border-transparent"} resumeLi`}>
                  Professional Skills
                </li>
                <li
                 onClick={() => setEducationData(false) & 
                 setSkillsData(false) & setExperience(true)}
                 className={`${experience ? "border-designColor rounded:lg": "border-transparent"} resumeLi`}>
                  Experience
                </li>
                
            </ul>
        </div>
        {educationData && <Education1/> }
        {skillsData &&<ProfessionalSkills/>}
        {experience && <Experience/>}
    </section>
  )
}

export default Education