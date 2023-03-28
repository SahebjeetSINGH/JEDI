import React,{useState,useEffect} from 'react'
import axios from 'axios';



const Card = ({header,description,price,photo}) => {
  const[count,setCount]=useState(0);

  const[showCard,toggleCard]=useState(true);
  const[hash,setHash]=useState(null);

  // useEffect(()=>{
  //   let timer=setTimeout(()=>{
  //     toggleImage(false)
  //   },1000)

  //   return ()=>clearTimeout(timer);

  // },[count]);
  // const handleClick=()=>{
  //   if(showCard===true){
  //     toggleCard(false);
  //   }else{
  //     toggleCard(true)
  //   }
    
  // }
  let metadata = JSON.stringify({
    "photo":{photo}
  })
  const handleClick=async ()=>{
    try{
      // await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      //   method: "POST",
      //   headers: {
      //     pinata_api_key: apiKey,
      //     pinata_secret_api_key: secretKey,
      //     "Content-Type": `application/json`,
      //   },
      //   body: metadata,
      // })
      //   .catch((Err) => console.log(Err))
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res);
      //     // console.log(formdata)
      //   });
      // const imghash = `ipfs://${resfile.data.IpfsHash}`;
    
      const response=await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS",{
        method:'POST',
       
        headers:{
          pinata_api_key:'79315d7be5e60ffdd152',
          pinata_secret_api_key:'98ecde8b9fade82fa60dd0d346c013bbf70da7abe226a64c737281721e28c176',
          'Content-Type':"application/json"
        }   ,
        body:metadata,

      }).catch((Err) => console.log(Err))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // console.log(formdata)
      });
      const result=await response;
      // const ImgHash=`ipfs://${result.data.ipfsHash}`;
      // const signer=contract.connect(provider.getSigner());
      // console.log(ImgHash)
      // signer.add(account,ImgHash);
      console.log(result)
      setHash(result.IpfsHash);

      
    
    }catch(err){
      alert(err)

    }
    

  }
  



  return(
    <div onClick={handleClick}>
      {showCard?(
        <div className='px-8 rounded-md w-80 ml-10 mt-24 hover:drop-shadow-2xl py-4 bg-gradient-to-r bg-[#202124] flex  content-center   h-fit flex-col gap-5 text-white ' >
        
          <img src={photo}   />
          <div className='flex items-center  w-full'>
          <button className=' font-Montserrat  border border-[#fff] px-2 font-semibold  justify-start ' onClick={handleClick}>BUY</button>

          <h1 className='font-Montserrat font-semibold ml-40'>${price}</h1>

          </div>
         {/* <div>
            <img src={`https://gateway.pinata.cloud/ipfs/${hash}`} />

          </div>  */}
          
        </div>



      ):(
        <div className='px-8 rounded-3xl w-80 ml-10 mt-24  py-4 bg-[#202124] flex z-50 relative content-center   h-fit flex-col gap-5 text-white ' >
        {/* {showImage && (
          <div>
            
          </div>
        )} */}
        <img src={photo} alt='..Image' className=' rounded-3xl ' />
        <h1 className='text-[30px] font-Kanit font-black  truncate'>{header}</h1>
        <h1 className='justify-start font-Montserrat font-black '><span className='font-bold'>Reviews:</span> {description}</h1>
        <h1 className='font-Montserrat font-semibold'>${price}</h1>
        <h1></h1>
        
        
       
        <button  className='mt-5 h-8 flex-initial relative rounded-md ml-12 text-[14px] text-white text-center w-2/3   transition ease-in-out delay-150 bg-[#f94449] hover:-translate-y-1 hover:scale-110 hover:bg-[#de0a26] duration-300' onClick={()=>{setCount(count+1)}} >BUY</button>
        
        
        
          
            
  
        
      </div>
         

      )}
    </div>
    

    
   
    
  )
}


export default Card
