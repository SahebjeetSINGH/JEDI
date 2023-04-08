import React,{useState,useEffect} from 'react'
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HeadText = () => {
  const [text, setText] = useState("Reimagine the Way you Own Games");
 

  let interval = null;

  const handleMouseOver = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(newText);

      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }



  return (
    <div className='w-4/6'>
        <h1 onMouseOver={handleMouseOver} data-value="REIMAGINE THE WAY YOU OWN GAMES" className='text-[#fff] font-Kanit font-black text-[46px]'>{text}</h1>
        
    </div>
  )
}

export default HeadText
