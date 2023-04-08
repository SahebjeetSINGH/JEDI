import React from 'react'

const Card2 = ({url}) => {
  return (
    <div className='px-8 mb-28 rounded-md w-80 ml-10 mt-24 hover:drop-shadow-2xl py-4 bg-gradient-to-r bg-[#202124] flex  content-center   h-fit flex-col gap-5 text-white'  >
        
      <img src={url}   />
      {console.log(url)}
     
    
  </div>
  )
}

export default Card2
