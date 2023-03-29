import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import Slider from '../components/Banner'
import Header from '../components/Header'
import HeadText from '../components/HeadText';
import Loader from '../components/Loader.jsx'
import Pagination from '../components/Pagination';
import Deals from '../components/Deals';

import '../index.css'




const RenderCards=({data,title})=>{
  
  if(data?.length>0){
    return(
      
      data?.map((post)=>
        
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
  const [trigger,changeTrigger]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  
  
  
  
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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = trigger.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
    
  
  return (
    
    <div className=' bg-[#000] w-full h-screen scrollbar scrollbar-thumb-rose-500 '>
      
      <div className=''>
        
      <Header  />
      
      </div>

      <div className='w-1/2 z-20 absolute'>
       <div className='absolute z-20 w-full px-40 py-40'>
         <HeadText />
       </div>
       <div className='absolute z-10 w-full bg-gradient-to-b from-[#202124] to-[#000]  h-screen  blur-3xl opacity-50 mr-40'>
         
       </div>

      </div>
      

      <div className=' h-4/6 object-contain drop-shadow-4xl shadow-black-500/50'>

      <Slider />

      </div>
      <div className='blur-3xl absolute w-full h-4/6 z-10 bg-gradient-to-b from-[#202124] to-[#000] opacity-75'> 
      

      </div>
      
      <div className=' px-4 relative z-20 drop-shadow-4xl flex flex-col'>
        <div  className=' ml-5'>
          <h1 className='text-[#fff] font-Kanit  text-[32px] inline-block px-6 rounded-lg opacity-80 bg-[#202124] '>Checkout These!</h1>
        </div>
          <div className='w-full'>
         
          {loading?(
        

              <Loader />

            
          ):(
            <div className=' flex w-full flex-col'>
              <div className='grid grid-cols-4 gap-8'>

               <RenderCards data={currentPosts} title='Missing Posts' />

              </div>
            
            <div className=' mt-24 items-center flex justify-center'>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={trigger.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
            />
            </div>
            </div>
          )
          

          }
         
           
           {console.log(trigger)}

      
 
 
          </div>

      </div>
      <Deals />
     
      
      
    </div>
  )
}

export default Home;