import React,{useState,useContext} from 'react'

import Header from '../components/Header'
import Card2 from '../components/Card2'



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
    <div  > 
       {/* {console.log(list)} */}
       <RenderCards />
       <Render list={url} />
      
    </div>
  )
}

export default Cart
