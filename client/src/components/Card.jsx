import React,{useState,useContext, createContext} from 'react'
import { Navigate,Link } from 'react-router-dom';
import { TezosToolkit } from '@taquito/taquito'
import { AnimatePresence,motion } from 'framer-motion';
import config from '../config/index'
import axios from 'axios';
import { slideAnimation } from '../utils/motion';
// import MintNFT from '../utils/mint';
const Tezos=new TezosToolkit("https://ghostnet.smartpy.io/")


const MintNFT = ({ amount, metadata }) => {
  const [isMinting, setIsMinting] = useState(false);
  // const contract= Tezos.wallet.at(config.contractAddress);
  // console.log(contract)
  console.log()
  console.log(config.contractAddress)

  const handleMinting = async () => {
    try {
      setIsMinting(true);
      const contract = await Tezos.wallet.at(config.contractAddress);
      let bytes = '';
      for (let i = 0; i < metadata.length; i++) {
        bytes += metadata.charCodeAt(i).toString(16).slice(-4);
      }
      console.log(bytes)
      console.log(contract)
      const op = await contract.methods.mint(amount, bytes).send();
      await op.confirmation();
      setIsMinting(false);
    } catch (error) {
      setIsMinting(false);
      console.log(error);
    }
  };

  return (
    <button className='mt-5 h-8 flex-initial relative rounded-md ml-12 text-[14px] text-white text-center w-2/3   transition ease-in-out delay-150 bg-[#000] hover:-translate-y-1 hover:scale-110 hover:bg-[#000] duration-300' onClick={handleMinting} disabled={isMinting}>
      {isMinting ? 'Minting...' : 'Mint NFT'}
    </button>
  );
};
let list=[];
export const hashContext=createContext({
  hash:[],
  addHash:(list)=>console.error('Please implement')

}

);
export function HashProvider({children}){
  const[hash,setHash]=useState([])
  const addHash=()=>{
    setHash(list)
  }
  
  console.log(list)
  

  return(
    <hashContext.Provider value={{hash,addHash}}>{children}</hashContext.Provider>
  )


}

const Card = ({header,description,price,photo}) => {
  const[count,setCount]=useState(0);

  const[showCard,toggleCard]=useState(true);
  const[hash,setHash]=useState([]);
  const[amount,setAmount]=useState(0);
  let pinningMetadata=false
  let mintingToken=false
  let metadata = JSON.stringify({
    'photo':photo
  
  })
  const buy=async()=>{
    
    
    try{
      pinningMetadata=true;
      let dataBody={
        image:photo,
        title:header,
        description:description,
        creator:config.address
  
      }
      console.log(dataBody)
      const data=JSON.stringify(dataBody)
     
   
      const response=await fetch('http://localhost:8080/mint',{
        method:'POST',
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Content-Type':"application/json",
        },
        body:data,
      });
      if(response){
        const data=await response.json();
        console.log(response)
        if(data.status===200 &&
          data.msg.metadataHash &&
          data.msg.imageHash){
            pinningMetadata=false;
            mintingToken=true
        }else{
          throw 'No IPFS Hash'
        }
        }else{
          throw 'No response'
      }
    }catch(error){
        console.log(error)
    }finally{
        pinningMetadata=false;
        mintingToken=false;
    }
   
  }

  const handleClick=async ()=>{
    try{
     
      
      await axios("https://api.pinata.cloud/pinning/pinJSONToIPFS",{
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
        const value=res.IpfsHash;
        setHash([...hash,value])
        list.push(value)
        console.log(list)
      
        
      }); 

      
      
    
    }catch(err){
      alert(err)
  
    }
    
  
  }
  


  return(
    <div >
      
      {showCard?(
        <motion.div {...slideAnimation('down')} className='px-8 mb-28 rounded-md w-80 ml-10 mt-24 hover:drop-shadow-2xl py-4 bg-gradient-to-r bg-[#202124] flex  content-center   h-fit flex-col gap-5 text-white ' onMouseEnter={() => toggleCard(false)}  >
        
          <img src={photo}   />
          <div className='flex items-center  w-full'>
          <button className=' font-Montserrat  border border-[#fff] px-2 font-semibold  justify-start ' >BUY</button>

          <h1 className='font-Montserrat font-semibold ml-40'>${price}</h1>

          </div>
          
          
         
          
        </motion.div>



      ):(
        <div className='px-8 absolute rounded-3xl w-80 ml-10 mt-24  py-4 bg-[#202124] flex z-50  content-center   h-fit flex-col gap-5 text-white '  onMouseLeave={() => toggleCard(true)} >
       
        <img src={photo} alt='..Image' className=' rounded-3xl ' />
        <h1 className='text-[30px] font-Kanit font-black  '>{header}</h1>
        <h1 className='justify-start font-Montserrat font-black '><span className='font-bold'>Reviews:</span> {description}</h1>
        <h1 className='font-Montserrat font-semibold'>${price}</h1>
        <h1></h1>
        
        
       
        <button   className='mt-5 h-8 flex-initial relative rounded-md ml-12 text-[14px] text-white text-center w-2/3   transition ease-in-out delay-150 bg-[#f94449] hover:-translate-y-1 hover:scale-110 hover:bg-[#de0a26] duration-300' onClick={buy} >BUY</button>
        
        <MintNFT  amount={price} metadata={metadata}/> 
        
          
            
  
        
      </div>
         

      )}
    </div>
    

    
   
    
  )
}



export default Card
  



