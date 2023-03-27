import React,{useState,useEffect} from 'react'



const Card = ({header,description,price,photo}) => {
  const[count,setCount]=useState(0);

  const[showImage,toggleImage]=useState(true);

  useEffect(()=>{
    let timer=setTimeout(()=>{
      toggleImage(false)
    },1000)

    return ()=>clearTimeout(timer);

  },[count]);

  

 

  return (
    

    
    <div className='px-4 rounded-3xl  py-4 bg-gray-500 flex  content-center   h-fit flex-col gap-5 text-white' >
      {/* {showImage && (
        <div>
          
        </div>
      )} */}
      <img src={photo} alt='..Image' className=' rounded-3xl ' />
      <h1 className='text-[30px] font-Kanit font-black mb-4'>{header}</h1>
      <h1 className='justify-start font-Montserrat font-black mb-4'><span className='font-bold'>Reviews:</span> {description}</h1>
      <h1 className='font-Montserrat font-semibold'>${price}</h1>
      <h1></h1>
      
      
     
      <button  className='mt-5 rounded-md ml-16  text-[14px] text-white text-center w-2/3   transition ease-in-out delay-150 bg-[#f94449] hover:-translate-y-1 hover:scale-110 hover:bg-[#de0a26] duration-300' onClick={()=>{setCount(count+1)}} >BUY</button>
      
      
      
        
          

      
    </div>
    
  )
}


export default Card
