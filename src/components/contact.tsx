import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
const Contact =()=>{
    return(
        <>
        <div id="contacts">
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
        
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">aqsaiqbal12345678@gmail.com</a>
          <p className="leading-normal my-5">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/aqsa-iqbal-2417162b7/"}
              className="text-gray-500"
            >
              <FaLinkedin className="text-2xl hover:text-[#4c00ff]" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/aqsa-iqbalhussain?tab=repositories"}
              className="text-gray-500"
            >
              <FaGithub className="text-2xl hover:text-[#0c0a0a]" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/share/pz8GY1CcgHbRqg48/"}
              className="text-gray-500"
            >
              <FaFacebook className="text-2xl hover:text-[#4c00ff]" />
            </Link>
          </span>
        </div>
          
           
           
            
        </div>
      </div>
    </div>

  
</section>
</div>


        </>
    )
}
export default Contact