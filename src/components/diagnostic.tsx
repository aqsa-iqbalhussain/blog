"use client";

import React, { useState } from "react";

// Explicitly define the type of comments state as an array of strings
const Diagnostic = () => {
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
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover rounded it"
            alt="hero"
            src="/dr.jpg"
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
            AI in Diagnostic Technology
  
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
            AI diagnostic technology uses artificial intelligence to analyze data and identify patterns, 
            helping to detect diseases or issues more accurately and efficiently, often in healthcare or technical fields.

            </p>
            <p>
            AI diagnostic technology refers to the application of artificial intelligence to assist in the identification
             and analysis of medical conditions or diseases. By utilizing advanced algorithms, machine learning models,
              and large datasets, AI diagnostic systems can process medical images, patient data, and other diagnostic
               inputs to detect patterns and make predictions with high accuracy. These systems are designed to assist
                healthcare professionals by providing insights that can lead to quicker and more accurate diagnoses
                , potentially improving patient outcomes.
            
            </p>

            <p>
            AI diagnostic tools are used in a variety of medical fields, including radiology, pathology, cardiology, and 
            dermatology. For example, in radiology, AI can analyze medical imaging data such as X-rays, CT scans, and MRIs
             to identify abnormalities like tumors, fractures, or diseases. In dermatology, AI systems can assist in diagnosing
              skin conditions, including detecting early signs of skin cancer from images of moles or lesions.These technologies
               are often built on large datasets of medical records, images, and other clinical data, which enable the AI to 
               learn and refine its diagnostic abilities over time. Machine learning models, such as deep learning, can be 
               trained to recognize complex patterns and relationships in the data that might be difficult for humans to
                identify, thus providing support in diagnosing rare or hard-to-detect conditions.
            </p>

            <p>
            AI diagnostic tools can help reduce human error, speed up the diagnostic process, and offer more consistent 
            results, especially in under-resourced areas where access to healthcare professionals may be limited. 
            Additionally, these systems can assist in personalized medicine by analyzing patient data to recommend
             tailored treatment plans.Despite its promise, AI diagnostic technology is not intended to replace healthcare 
             professionals but rather to enhance their ability to make informed decisions. Ethical considerations, 
             including data privacy and the potential for bias in AI models, are important areas of focus as the technology
              continues to evolve. As AI diagnostic tools become more advanced and widely adopted, they are expected to 
              revolutionize healthcare by improving efficiency, accuracy, and accessibility.





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

export default Diagnostic;
