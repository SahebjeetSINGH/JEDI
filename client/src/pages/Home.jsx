import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import Slider from '../components/Banner'
import Header from '../components/Header'
import Example2 from '../components/Card2.jsx';
import { GameCard } from '../components/temp';

import logo from '../assets/848381e4990a0f79bfe491f3e8300f7b.webp';

import '../index.css'



const RenderCards=({data,title})=>{
  
  if(data?.length>0){
    return(
      
      data.map((post)=>
        
        <GameCard 
        title={post.title}
        description={post.steamRatingText}
        price={post.normalPrice}
        logoUrl={post.thumb}
        />

        
           
  
      )
  

    )
    
  }
  

}

const Home = () => {
  const [trigger,changeTrigger]=useState(null);
  const [render,toggleRender]=useState(true);
  
  
  
  useEffect(()=>{
    console.log('saheb gay')
    const fetchData=async ()=>{
      const response=await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',{
        method:'GET',
        headers:{
          "access-control-allow-origin" : "*",
          'Content-Type':'application/json',
          
        },
      })
      const result=await response.json();
      changeTrigger(result)

     

      

    }
    fetchData();


  },[])
  
    
     
    
  
  return (
    
    <div className=' bg-[#000] w-full h-screen '>
      
      <div className=''>
        {/* <img src={logo} className='w-28 object-contain' />
          <h1 className='text-white font-Kanit justify-start text-[36px] mr-16'>GameZone</h1>
          
            <h2 className='float-right justify-end text-white text-[36px]'>Cart</h2> */}
            <Header />
          

         
          

      </div>

      <div className='mb-40 h-4/6 object-contain shadow-2xl shadow-black-500/50'>

      <Slider />

      </div>
      
      <div className='px-10 relative z-50 drop-shadow-4xl flex flex-col'>
        <div  className='mb-10 ml-5'>
          <h1 className='text-[#fff] font-Kanit  text-[32px] '>Checkout These!</h1>
        </div>
          <div className='grid grid-cols-4 gap-8 '>
         
          {render &&(
            <RenderCards data={trigger} title='Missing Posts' />


          )
          

          }
          <Example2  items={trigger} />
           
           {console.log(trigger)}

      
 
 
          </div>

      </div>
      
      
      
    </div>
  )
}

export default Home;