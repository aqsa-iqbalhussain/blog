"use client";

import React, { useState } from "react";
import Image from "next/image";

// Explicitly define the type of comments state as an array of strings
const Blockchain = () => {
  const [comments, setComments] = useState<string[]>([]); // State type is explicitly defined as an array of strings
  const [commentText, setCommentText] = useState<string>(""); // commentText is of type string

  const addComment = () => {
    // Check if the comment is valid
    if (commentText.trim() !== "") {
      setComments((prevComments) => [...prevComments, commentText]); // Functional state update
      setCommentText(""); // Clear the input field
    } else {
      alert("Please write a comment before submitting!"); // Alert user if input is empty
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-left flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover rounded-lg"
            alt="hero"
            src="/blockchain.avif"
            height={500}
            width={500}
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
         Blockchain Technology
  
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
            Blockchain technology is a secure, transparent system that stores data in linked blocks,
         making it nearly impossible to alter, and is widely used in cryptocurrencies and other industries.
         Blockchain technology is a decentralized and distributed digital ledger system designed to securely 
         record transactions across multiple computers in a way that prevents any modification or tampering of data
          once it has been added. The key feature of blockchain is its ability to enable peer-to-peer transactions 
          without the need for a central authority or intermediary, such as a bank.
            </p>
            <p>
            In a blockchain, information is stored in blocks that are linked together in a chain, hence the name blockchain
             Each block contains a list of transactions, a timestamp, and a unique code called a hash. Once a block is 
             added to the chain, it is immutable, meaning it cannot be altered or deleted. This ensures transparency, 
             security, and trust in the system.Blockchain is the foundation of cryptocurrencies like Bitcoin and Ethereum, 
             but its applications extend beyond digital currencies. It is used in various industries, such as supply chain 
             management, healthcare, finance, and voting systems, to provide secure, transparent, and efficient solutions
              for data sharing and record-keeping.





            </p>

            <p>
            Blockchain technology has applications across many industries, such as supply chain management,
            where it provides end-to-end visibility of products and reduces fraud. In healthcare, 
            it secures medical records and streamlines processes like billing and prescription tracking.
            Blockchain also offers secure voting systems that provide verifiable and tamper-proof election records.
             It has transformed the financial sector by enabling decentralized finance (DeFi), which offers faster,
            cheaper transactions. Additionally, it can be used to protect intellectual property by registering
             patents and copyrights on a public ledger.
            </p>

           

           

           
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className=" body-font bg-gray-800 text-white p-6  ">
        <div className="container mx-auto">
          <p className="text-lg mb-4">If you liked the article, please share your feedback...</p>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Type your comment here..."
            className="w-full h-20 p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            onClick={addComment}
            className="w-full bg-white hover:bg-slate-300 text-black py-2 rounded-md transition duration-200"
          >
            Add Comment
          </button>

          <h3 className="text-xl mt-6 mb-2">All Comments:</h3>
          <div className="space-y-2">
            {comments.map((comment, index) => (
              <p key={index} className="bg-gray-700 p-2 rounded-md">
                {comment}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blockchain;
