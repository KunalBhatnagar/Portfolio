import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index,icon,title}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", index*0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadon-card'
      >
        <div options={{max:45, scale: 1, speed:450}} 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-center text-bold text-[20px]'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a skilled software developer with expertise in languages like C++, Python, and TypeScript, along with a strong foundation in data analysis. A quick learner known for my problem-solving skills and adaptability, I leverage frameworks like React and Node.js, as well as machine learning tools, to create innovative and scalable solutions.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service,index) =>{
          return <ServiceCard key={service.title} index ={index} {...service} />
        })}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")