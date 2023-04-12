import React,{useState,useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion';
import { slideAnimation,headTextAnimation } from '../utils/motion'
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HeadText = () => {
  const [text, setText] = useState("Reimagine the Way you Own Games");
 

  let interval = null;

  const handleMouseOver = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(newText);

      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }



  return (
    <AnimatePresence>

    
     <motion.div className='ml-20' {...slideAnimation('left')}>
        <motion.div className='flex w-4/6 px-2 py-2 pl-[10px] backdrop-blur-2xl justify-center  sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:block 4xl:block ' {...headTextAnimation} >
        <h1 className='text-[#fff] font-Bebas-Neue  italic font-black text-[4rem] '>Re Imagine the Way you own Games</h1>

        </motion.div>
      
      <motion.div className=' w-[50vw] ml-[26vw] -mt-36 backdrop-blur-3xl justify-center sm:hidden md:block lg:block xl:block 2xl:hidden 3xl:hidden 4xl:hidden ' >
      <h1 className='text-[#fff] font-Bebas-Neue  italic font-black text-[3.6rem] '>Re Imagine the Way you own Games</h1>
      </motion.div>
      <motion.div className=' w-[50vw] ml-[26vw] -mt-36 backdrop-blur-3xl justify-center sm:block md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden ' >
      <h1 className='text-[#fff] font-Bebas-Neue  italic font-black text-[3.5rem] '>Re Imagine the Way you own Games</h1>
      </motion.div>
      
     </motion.div>

    </AnimatePresence>
    
    
    
    
  )
}

export default HeadText
