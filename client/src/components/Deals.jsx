import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import Loader from '../components/Loader.jsx'
import Pagination from '../components/Pagination';


const RenderCards=({data,title})=>{
  
  if(data?.length>0){
    return(
      
      data?.map((post)=>
        
        <Card 
        key={post.gameID}
        header={post.title}
        description={post.steamRatingText}
        price={post.normalPrice}
        photo={post.thumb}
        
        />
      )
    ) 
  }
}

const Deals = () => {
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
    <div className=' px-4 relative z-20 drop-shadow-4xl flex flex-col'>
    <div  className='  w-96'>
      <h1 className='text-[#fff] font-Kanit  text-[2rem] inline-block px-6 rounded-lg font-extrabold	ml-11 opacity-80 bg-[#202124] '>Deals!</h1>
    </div>
      <div className='w-full'>
     
      {loading?(
    

          <Loader />

        
      ):(
        <div className=' flex w-full flex-col'>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4'>

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
  
  )
}

export default Deals
