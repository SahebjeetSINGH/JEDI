import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import image1 from '../assets/fortnite.png'

function Banner() {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1053357407889268786/1089908385979314267/TEKKEN8_Header_mobile_2.png',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1053357407889268786/1089652018555146260/1082090.jpg',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1064938077912567978/1089908536735178793/horizon.jpg',
    },

    {
      url: 'https://images5.alphacoders.com/109/1091255.png',
    },
    {
      url: 'https://images2.alphacoders.com/949/949049.png',
    },
    {
      url:'https://images7.alphacoders.com/750/750703.jpg'
    },
    {
      url:'http://wallpaperset.com/w/full/a/7/8/169199.jpg'
    },
    {
      url:'https://wallpaperaccess.com/full/4015624.png'
    },
    {
      url:'https://wallpapercave.com/wp/wp11672147.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='  h-[1080px]  w-full drop-shadow-4xl  m-auto z-[1] relative group items-center justify-center '>
      <div
         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}

        className='w-full h-full rounded-xl bg-center bg-[length:100%_100%] duration-500 '
      >
        {/* <img src={slides[currentIndex].url} className='object-contain' /> */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full  bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      </div>

      {/* Left Arrow */}
      
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
