import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { slideAnimation,headTextAnimation } from '../utils/motion'
import { AnimatePresence,motion } from 'framer-motion'

const Formfield= () => {
  const navigate=useNavigate();
  const [visible,setVisible]=useState('password')
  const [shift,setShift]=useState(false)
  const [hide,setHide]=useState(' ')
  const [form,setForm]=useState({
    'FirstName':' ',
    'LastName':'',
    'Alias':'',
    'Email':'',
    'Passcode':'',
  })
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
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})

  }
  const submitData=async()=>{
   
   
    const formData=JSON.stringify(form)
    console.log(formData)
    try{
      await fetch('http://localhost:8080/profile',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:formData,

    }).then((res)=>{
      navigate('/')
      console.log(res)

    }).catch((err)=>{
      console.log(err)
    })

    }catch(err){
      console.log(err)
    }
    

  }

  return (
    
    <motion.div className='flex w-1/2 h-4/6 px-2 py-2 pl-[10px] bg-[#fbfbfb] flex-col bg-opacity-10 backdrop-blur-2xl justify-center rounded-md ' {...slideAnimation('down')} >
        <motion.div className='ml-20 mt-14 mb-10' {...headTextAnimation}>
        <h1 className='text-[#fff] font-Bebas-Neue  italic font-black text-[4rem]'>Resurrect Yourself</h1>
        <p className='text-[#fff] font-Kanit font-black text-[2rem] ml-1 '>Be Reborn</p>

        </motion.div>

        
        <form onSubmit ={submitData} className='w-full flex  flex-col justify-center items-center mb-16' >
        
            
          <motion.div className={`${hide}`} {...slideAnimation('down')}>
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center  '>
            <label for='name' className=' text-[#fff] text-[20px] font-Kanit mr-2 '>First Name:</label>
            <input type='text' id='fname' name='FirstName' value={form.FirstName} placeholder='First Name' onChange={handleChange}  className='font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]'  /><br/>

            </div >
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center '>
            <label for='name' className='text-[#fff] text-[20px] font-Kanit mr-2'>Last Name:</label>
            <input type='text' id='lname' name='LastName'  value={form.LastName} placeholder='Last Name' onChange={handleChange} className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' /><br/>

            </div>
            <div className='m-2 px-2 py-2 w-full  flex flex-1   justify-center items-center '>
            <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-14'>Email:</label>
            <input type="text" id="email" name="Email" value={form.Email} placeholder='Enter your Email Address' onChange={handleChange} className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>

            </div>
            <div className='m-2 px-2 py-2 w-full  flex justify-center mb-4 items-center '>
            <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-14'>Alias    :</label>
            <input type="text" id='alias' name="Alias" value={form.Alias} placeholder='Enter your Alias' onChange={handleChange} className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
        
            </div>
          </motion.div>
            
            {shift && (
              <motion.div className=' px-2 py-2 w-full  flex  flex-col justify-center mb-4 items-center ' {...slideAnimation('left')}>
               <div >
                <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-2 pl-4  '>New Passcode:</label>
                <input type={`${visible}`} id="pass" name="ipasscode" placeholder='Passcode' className='font-Kanit  bg-gray-50  border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
              </div>

            
              <div >
               <label for="email" className=' text-[#fff] text-[20px] font-Kanit mr-2 inline-block  pl-8 mb-8'>Confirm New:</label>
               <input type={`${visible}`} id="pass" name="Passcode" value={form.Passcode} placeholder='Confirm' onChange={handleChange} className=' font-Kanit bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-red-800 ml-2 mt-2 rounded-sm  h-1/2 outline-none py-1 w-[400px]' ></input><br/>
              </div>
              <button className='text-[12px] h-fit text-[#fbfbfb] bg-[#FF3131] font-Kanit p-3 mb-10' type='button'  onClick={handleClick}>Show Password</button>
              <button className='text-[12px] h-fit text-[#fbfbfb] bg-[#FF3131] font-Kanit p-3 w-44 ml-16' type='submit' >'Confirm</button>
             </motion.div> 
        

            )


            }
            <button className='text-[12px] h-fit text-[#fbfbfb] bg-[#FF3131] font-Kanit p-3 w-44 ml-16 mb-4' type='button'  onClick={shiftClick}>{shift ? 'Back':'Next'}{console.log(form)}</button>
            
            
       

        </form>
      
      
        
    </motion.div>
  )
}

export default Formfield
