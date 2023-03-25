import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import image from '../assets/Overwatch-Logo.webp';
import image2 from '../assets/2576115.webp';
import image3 from '../assets/amongus_0.webp';
import logo from '../assets/848381e4990a0f79bfe491f3e8300f7b.webp';

const Home = () => {
  const [trigger,changeTrigger]=useState(false);
  
    const fetchData=async ()=>{
      const response=await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',{
        method:'Get',
        headers:{
          'Content-Type':'application/json',
        },
      })
      const result=await response.json();
      console.log(result)

    }
     
  
  
  return (
    
    <div className=' bg-[#000] w-full h-screen '>
      
      <div className='mb-16 bg-[#000] flex items-center '>
        <img src={logo} className='w-28 object-contain' />
          <h1 className='text-white text-[36px] '>GameZone</h1>

      </div>
      <div className='flex flex-row gap-60'>
      <Card 
        header='Valorant'
        description='bad game it sucks'
        price='free'
        photo={image2}
        
      />
      
      <Card 
        header='Overwatch'
        description='game is good'
        price='free'
        photo={image}
        
        
      />
      <Card 
        header='Among Us'
        description='bad game'
        price='free'
        photo={image3}
      />

      <button className='rounded-md bg-[#ffffff] text-[#000] text-[15px]' onClick={()=>fetchData()}>

           Click me!
      </button>

      </div>
      
    </div>
  )
}

export default Home;