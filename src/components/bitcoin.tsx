"use client";

import React, { useState } from "react";
import Image from "next/image"; 

// Explicitly define the type of comments state as an array of strings
const Bitcoin = () => {
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
            src="/crypto.jpg"
            height={500}
            width={500}
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
            Bitcoin and Cryptocurrency
  
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
            Bitcoin is a decentralized digital currency created in 2009, 
            enabling secure, peer-to-peer transactions without a central authority, using blockchain technology.
            Bitcoin and cryptocurrency represent a revolutionary shift in the world of finance, providing decentralized 
            digital assets that operate without the need for a central authority like banks or governments. Bitcoin, 
            the first and most well-known cryptocurrency, was introduced in 2009 by an anonymous entity known as Satoshi Nakamoto.
             It operates on a technology called blockchain, a distributed ledger that records all transactions made with Bitcoin in 
             a secure and transparent manner. This decentralized
            nature ensures that Bitcoin is not controlled by any single entity and is resistant to censorship or manipulation.
            </p>
            <p>
            Cryptocurrencies, in general, are digital currencies that use cryptographic techniques to secure transactions
             and control the creation of new units. They can be traded and transferred across the globe through peer-to-peer networks,
              providing an alternative to traditional currency systems. Besides Bitcoin, there are thousands of other cryptocurrencies, 
              such as Ethereum, Litecoin, and Ripple, each with its own unique features and use cases. Ethereum, for example, is known for enabling the
             creation of decentralized applications and smart contracts, which can execute automatically when certain conditions are met.
            </p>

            <p>
            The appeal of cryptocurrencies lies in their potential for financial inclusion, faster cross-border transactions,
             and the ability to operate independently of centralized financial systems. Blockchain technology, which underpins most 
             cryptocurrencies, has also been hailed for its transparency, 
            security, and potential applications beyond just digital currencies, such as supply chain management and voting systems.
            </p>

            <p>
            However, cryptocurrencies are not without challenges. Their value can be highly volatile, and regulatory 
            frameworks surrounding them are still evolving. Issues like scalability, energy consumption 
            (especially with proof-of-work systems like Bitcoin), and concerns over their use in illicit activities
             have prompted ongoing debates about their future. Despite these hurdles, cryptocurrencies continue to garner
              significant attention from investors, governments, and businesses as they offer a new and disruptive way to handle money, investments, and even contracts in the digital age.






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

export default Bitcoin;
