import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {Tilt} from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';

const ServiceCard = ({index,icon,name}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", index*0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadon-card'
      >
        <div options={{max:45, scale: 1, speed:450}} 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={name} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-center text-bold text-[20px]'>{name}</h3>
        </div>

      </motion.div>

    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center '>
      <motion.div variants={textVariant()}>
    <p className={styles.heroSubText}>Technical Skills</p>
    <div className='mt-20 flex flex-wrap gap-10 '>
        {technologies.map((technology,index) =>{
          return <ServiceCard key={technology.name} index ={index} {...technology} />
        })}

      </div>


    </motion.div>
      

    </div>
  )
}

export default SectionWrapper(Tech, "")