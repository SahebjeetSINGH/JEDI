import React,{useState,useContext} from 'react'
import Header from '../components/Header'
import Card2 from '../components/Card2'
// import Form from '../components/Form'
import Formfield from '../components/Form'
// import config from '../config/index'

// const getUserNFTS=async(address)=>{
//   const contract=await Tezos.wallet.at(config.contractAddress);
//   nftStorage=await contract.storage();
//   const getTokenIds=await nftStorage.reverse_ledger.get(address);
//   if(getTokenIds){
//     console.log('Executed')
//     userNFTS=await Promise.all([
//       getTokenIds.map(async (id)=>{
//         const tokenid=id.toNumber();
//         const metadata=await nftStorage.token_metadata.get(tokenid)
//         const tokenInfoBytes=metadata.token_info.get("")
//         const tokenInfo=bytes2Char(tokenInfoBytes);
//         return{
//           tokenid,
//           ipfsHash:
//              tokenInfo.slice(0,7)==='ipfs://'?tokenInfo.slice(7):null
//         }

//       })
//     ])
//   }
// }

const Render=({list})=>{
    if(list?.length>0){
        return(
            list?.map((url)=>{
                <Card2 
                url={url}
                />
    
            })

        )
        
    }return(
        <h1>'Missing NFTS'</h1>
    )
}

const Cart = () => {
    const hash=[]
    
    const[url,setURL]=useState([])
    const RenderCards=()=>{    
        hash.forEach((distinct)=>{
            const fetchdata=async()=>{
                try{
                    if(hash?.length>0){
                        const response=await fetch(`https://ipfs.io/ipfs/${distinct}`,{
                        method:'GET',
                        })
                        const result=await response.json()
                        const val=result.photo
                        setURL([...url,val])
    
        
                    }
                    
                }catch(err){
                    console.log(err)
        
                }
                
            }
            fetchdata()
        })
        return url
        
    }
    
    
    
    console.log(hash)

    
    
    
    
    

    
    
  return (
    <div className='w-full app__bg h-screen flex items-center justify-center'> 
       <Formfield />
      
    </div>
  )
}

export default Cart
