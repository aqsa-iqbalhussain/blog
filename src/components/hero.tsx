"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Hero =()=>{
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {/* {` Hello! You're on Aqsa's blog`} */}
        <br className="hidden lg:inline-block" />
       
        <Typewriter
  options={{
    strings: [" Hello! You're on Aqsa's blog"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      "I am proudly enrolled in the esteemed Governor Sindh Initiative focused on Cloud Computing and the rapidly advancing field of Applied Generative AI, which explores
       the use of AI to create innovative content and solutions. Stay tuned on my blog for more updates and insights!"
      </p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="./computer.jpg"
      />
    </div>
  </div>
</section>

        </>
    )
}
export default Hero