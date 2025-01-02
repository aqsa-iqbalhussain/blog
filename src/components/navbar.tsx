"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = ()=>{
    return (
        <div className='bg-white z-50 sticky top-0'> 
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center bg-slate-300">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-2xl">Aqsa's Blog</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href ={"/"} className="mr-5 hover:text-blue-800 text-lg text-black">Home</Link>
      <Link href = {"#blogs"}className="mr-5  hover:text-blue-800 text-lg text-black ">Blog</Link>
      <Link href = {"#contacts"} className="mr-5 hover:text-blue-800 text-lg text-black">Contact</Link>
    </nav>
    
   
</div>
</header>
</div>

        
    )
}
export default Navbar