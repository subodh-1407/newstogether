// Popular.js
import React, { useContext } from 'react';
import { FaCheck } from "react-icons/fa6";
import { ThemeContext } from './ThemeContext';  

const Popular = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <section className={`w-full h-[557px] ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className='flex justify-center items-center top-10'>
          <div className={`absolute w-5/6 border-[1.5px] rounded-lg ${theme === 'dark' ? 'border-gray-300' : 'border-gray-600'}`}></div>
        </div>

        <div className="flex flex-col pt-10 leading-10 w-full relative">
          <h2 className={`font-bold text-[32px] pt-10 text-left pl-60 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
            POPULAR&nbsp;
            <span className="text-blue-700">NEWS</span>
          </h2>
          <h3 className={`text-[26px] font-bold text-left pl-28 pt-10 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
            Apple Unveils Vision Pro AR Headset
          </h3>
          <ul className="space-y-2">
            <li className={`flex items-center mx-28 gap-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
              <FaCheck className='text-blue-700'/>
              Apple Unveils Vision Pro AR Headset
            </li>
            <li className={`flex items-center mx-28 gap-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
              <FaCheck className='text-blue-700'/>
              NVIDIA Announces Breakthrough in AI Chips
            </li>
            <li className={`flex items-center mx-28 gap-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
              <FaCheck className='text-blue-700'/>
              Meta's Threads Gains 50 Million Users
            </li>
            <li className={`flex items-center mx-28 gap-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
              <FaCheck className='text-blue-700'/>
              Google Introduces AI-Powered Search Features
            </li>
            <li className={`flex items-center mx-28 gap-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
              <FaCheck className='text-blue-700'/>
              Amazon's Project Kuiper to Launch in 2024
            </li>
          </ul>
          <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" autoPlay loop muted alt="" className="max-w-[600px] absolute right-20 top-20 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"></video>
        </div>
      </section>
    </div>
  )
}

export default Popular;
