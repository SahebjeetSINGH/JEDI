import React,{useState} from 'react'
import { slideAnimation,headTextAnimation } from '../utils/motion'
import { AnimatePresence,motion } from 'framer-motion'

const Formfield= () => {
  const [visible,setVisible]=useState('password')
  const [shift,setShift]=useState(false)
  const [hide,setHide]=useState(' ')
  const handleClick=()=>{
    if(visible=='password'){
      setVisible('text')

    }else{
      setVisible('password')
    }
  }
  const shiftClick=()=>{
    if(shift==false){
      setShift(true)
      setHide('hidden')

      se
    }else{
      setShift(false)
      setHide(' ')
    }
  }

  return (
    <motion.div className='flex w-1/2 h-4/6 px-2 py-2 pl-[10px] bg-[#fbfbfb] flex-col bg-opacity-10 backdrop-blur-2xl justify-center rounded-md ' {...slideAnimation('down')} >
        <motion.div className='ml-20 mt-14 mb-10' {...headTextAnimation}>
        <h1 className='text-[#fff] font-Bebas-Neue  italic font-black text-[4rem]'>Resurrect Yourself</h1>
        <p className='text-[#fff] font-Kanit font-black text-[2rem] ml-1 '>Be Reborn</p>

        </motion.div>

        
        <form method='POST' action='/profile ' className='w-full flex  flex-col justify-center items-center mb-16' >
        
            
          <motion.div className={`${hide}`} {...slideAnimation('down')}>
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center  '>
            <label for='name' className=' text-[#fff] text-[20px] font-Kanit mr-2 '>First Name:</label>
            <input type='text' id='name' name='name' placeholder='First Name' className='font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]'  /><br/>

            </div >
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center '>
            <label for='name' className='text-[#fff] text-[20px] font-Kanit mr-2'>Last Name:</label>
            <input type='text' id='name' name='name' placeholder='Last Name' className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' /><br/>

            </div>
            <div className='m-2 px-2 py-2 w-full  flex flex-1   justify-center items-center '>
            <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-14'>Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter your Email Address' className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>

            </div>
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center '>
            <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-14'>Alias    :</label>
            <input type="email" id="email" name="email" placeholder='Enter your Alias' className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
        
            </div>
          </motion.div>
            
            {shift && (
              <motion.div className=' px-2 py-2 w-full  flex  flex-col justify-center mb-4 items-center ' {...slideAnimation('left')}>
               <div >
                <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-2 pl-4  '>New Passcode:</label>
                <input type={`${visible}`} id="email" name="email" placeholder='Passcode' className='font-Kanit  bg-gray-50  border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
              </div>

            
              <div >
               <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-2 inline-block  pl-8 mb-8'>Confirm New:</label>
               <input type={`${visible}`} id="email" name="email" placeholder='Confirm' className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
              </div>
              <button className='text-[12px] h-fit text-[#fbfbfb] bg-[#FF3131] font-Kanit p-3' type='button'  onClick={handleClick}>Show Password</button>
             </motion.div> 
        

            )


            }
            <button className='text-[12px] h-fit text-[#fbfbfb] bg-[#FF3131] font-Kanit p-3 w-44 ml-16' type='button'  onClick={shiftClick}>{shift ? 'Confirm':'Next'}</button>
            
       

        </form>
      
      
        
    </motion.div>
  )
}

export default Formfield
