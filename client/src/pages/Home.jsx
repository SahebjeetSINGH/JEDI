import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import image from '../assets/Overwatch-Logo.webp';
import image2 from '../assets/2576115.webp';
import image3 from '../assets/amongus_0.webp';
import logo from '../assets/848381e4990a0f79bfe491f3e8300f7b.webp';
import '../index.css'

const RenderCards=({data,title})=>{
  if(data?.length>0){
    return(
      data.map((post)=>
        <Card 
        header={post.title}
        description={post.metaCritic}
        price={post.normalPrice}
        photo={post.thumb}
        />
           
  
      )
  

    )
    
  }
  

}

const Home = () => {
  const [trigger,changeTrigger]=useState(null);
  
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
      
      <div className='mb-16 bg-[#000] flex items-center '>
        <img src={logo} className='w-28 object-contain' />
          <h1 className='text-white text-[36px] '>GameZone</h1>

      </div>
      <div className=' grid grid-cols-4 gap-8 '>
        <RenderCards data={trigger} title='Missing Posts' />
        {console.log(trigger)}
     

      <button className='rounded-md bg-[#ffffff] text-[#000] text-[15px]' onClick={()=>{}}>

           Click me!
      </button>

      </div>
      
    </div>
  )
}

export default Home;