import Image from 'next/image'
import React from "react";

const Blog =()=>{
    return(
        
        <div id="blogs">
        <section className="text-gray-600 body-font">
            <h1 className="text-bold text-4xl text-center text-black">Resources and Insights</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/ai.jpg"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
             Artificial Intelligence
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            AI Evolution
            </h1>
            <p className="leading-relaxed mb-3">
            AI is transforming the future by merging machine learning and neural networks. With self-improving algorithms, 
     
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href="/blog1" target="blank">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>  
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/driverless.jpg"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Technology
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Driverless Car
            </h1>
            <p className="leading-relaxed mb-3">
            Driverless cars use advanced AI and sensors to navigate, make real-time decisions, and optimize routes, enhancing safety 
            {/* and efficiency while reducing human error. */}
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href="/driverless">
             Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/crypto.jpg"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Cryptocurrency
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Bitcoin
            </h1>
            <p className="leading-relaxed mb-3">
            Bitcoin is a decentralized digital currency created in 2009, 
            enabling secure, peer-to-peer transactions without a central authority, using blockchain technology.
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="/bitcoin">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/robot.jpg"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Technology
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Robotics Technology
            </h1>
            <p className="leading-relaxed mb-3">
            Robotic technology, enhanced by AI, allows robots to perform complex tasks with greater precision, 
            adaptability, and decision-making abilities, significantly improving efficiency across various industries.
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"  href="/robot">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/dr.jpg"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Technology
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            AI Diagnostics
            </h1>
            <p className="leading-relaxed mb-3">
            AI diagnostic technology uses artificial intelligence to analyze data and identify patterns, 
            helping to detect diseases or issues more accurately and efficiently, often in healthcare or technical fields.

            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href="/diagnostic">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>  
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/blockchain.avif"
            alt="blog"
            height={500}
            width={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Technology
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Blockchain
            </h1>
            <p className="leading-relaxed mb-3">
            Blockchain technology is a secure, transparent system that stores data in linked blocks,
         making it nearly impossible to alter, and is widely used in cryptocurrencies and other industries.

            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 " href="/blockchain">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</section>
<div/>

         </div>
    )

}

export default Blog