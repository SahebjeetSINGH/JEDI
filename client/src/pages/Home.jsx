import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import Slider from '../components/Banner'
import Header from '../components/Header'

import Loader from '../components/Loader.jsx'

import logo from '../assets/848381e4990a0f79bfe491f3e8300f7b.webp';

import '../index.css'



const RenderCards=({data,title})=>{
  
  if(data?.length>0){
    return(
      
      data.map((post)=>
        
        <Card 
        header={post.title}
        description={post.steamRatingText}
        price={post.normalPrice}
        photo={post.thumb}
        />

        
           
  
      )
  

    )
    
  }
  

}

const Home = () => {
  const [trigger,changeTrigger]=useState(null);
  const [loading,setLoading]=useState(false);
  
  
  
  useEffect(()=>{
    
    const fetchData=async ()=>{
      setLoading(true);
      try{
        const response=await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',{
        method:'GET',
        headers:{
          "access-control-allow-origin" : "*",
          'Content-Type':'application/json',
          
        },
        })
        const result=await response.json();
        changeTrigger(result)

      }catch(error){
        alert(error);

      }finally{
        setLoading(false)
      }
      

     

      

    }
    fetchData();


  },[])
  
    
     
    
  
  return (
    
    <div className=' bg-[#000] w-full h-screen scrollbar scrollbar-thumb-rose-500 '>
      
      <div className=''>
        {/* <img src={logo} className='w-28 object-contain' />
          <h1 className='text-white font-Kanit justify-start text-[36px] mr-16'>GameZone</h1>
          
            <h2 className='float-right justify-end text-white text-[36px]'>Cart</h2> */}
            <Header />
          

         
          

      </div>

      <div className=' h-4/6 object-contain drop-shadow-4xl shadow-black-500/50'>

      <Slider />

      </div>
      
      <div className='px-10 relative z-20 drop-shadow-4xl flex flex-col'>
        <div  className=' ml-5'>
          <h1 className='text-[#fff] font-Kanit  text-[32px] inline-block px-6 rounded-lg bg-[#202124] '>Checkout These!</h1>
        </div>
          <div className='grid grid-cols-4 gap-8 '>
         
          {loading?(
        

              <Loader />

            
          ):(
            <RenderCards data={trigger} title='Missing Posts' />
          )
          

          }
         
           
           {console.log(trigger)}

      
 
 
          </div>

      </div>
      
      
      
    </div>
  )
}

export default Home;