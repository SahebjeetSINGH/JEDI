import React,{useState,useEffect} from 'react'

import image from '../assets/DSCN1902.jpg'

const Card = ({header,description,price,photo}) => {
  const[count,setCount]=useState(0);
  const[showImage,toggleImage]=useState(true);

  useEffect(()=>{
    let timer=setTimeout(()=>{
      toggleImage(false)
    },1000)

    return ()=>clearTimeout(timer);

  },[count]);

  const handleImage=()=>{
    if(showImage===true){
      toggleImage(false)
    }else{
      toggleImage(true);
    }
    
  }

 

  return (
    

    
    <div className=' gradient__bg rounded-lg px-5 py-3 flex   w-80  h-fit flex-col gap-5 text-white'  >
      {showImage && (
        <div>
          <img src={photo} alt='..Image' />
        </div>
      )}
      
      <h1 className='text-[30px]'>{header}</h1>
      <h1 className='justify-start'>{description}</h1>
      <h1>{price}</h1>
      <h2>{count}</h2>
     
      <button  className='mt-5 rounded-md bg-[#7AA874] text-[14px] text-[#000] text-center w-2/3 ' onClick={()=>{setCount(count-1)}} >Increase</button>
      <button className='mt-5  rounded-md bg-[purple]  text-[14px] text-[#000] text-center w-2/3' onClick={handleImage}>   {showImage? 'Hide Image':'Show Image'}</button>
      
      
        
          

      
    </div>
    
  )
}


export default Card
