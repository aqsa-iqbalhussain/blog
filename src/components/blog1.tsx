"use client";

import React, { useState } from "react";

// Explicitly define the type of comments state as an array of strings
const BlogContext = () => {
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
            src="/ai.jpg"
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
            AI Evolution
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
              AI is transforming the future by merging machine learning and neural networks. With self-improving algorithms,
              AI adapts and evolves, making data-driven decisions that shape industries. It’s a synthetic intelligence,
              increasingly blurring the lines between human and machine capabilities, all through layers of code and data.
            </p>
            <p>
              Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think, learn, and perform tasks that typically
              require human intelligence. AI encompasses various subfields, including machine learning (ML), natural language processing (NLP),
              robotics, and computer vision. The goal of AI is to create systems that can perform tasks autonomously, recognize patterns, understand speech, and make decisions based on data.
              The evolution of AI can be traced through several key milestones. In the early stages, during the 1950s to 1970s,
              the concept of AI emerged, driven by the works of pioneers like Alan Turing, who introduced the Turing Test to measure machine intelligence.
            </p>

            <p>
              Early AI research focused on symbolic reasoning and problem-solving but was limited in its applications, such as playing chess.
              However, by the 1970s to 1980s, AI research faced setbacks during a period known as the "AI Winter." This era was marked by reduced 
              funding and a decline in enthusiasm, primarily due to the challenges of limited computing power and overly ambitious expectations.
            </p>

            <p>
              In the 1990s and 2000s, AI began to regain traction with advancements in computational power, improved algorithms, and the availability
              of large datasets. Machine learning, particularly neural networks, gained prominence, leading to breakthroughs in speech recognition,
              image processing, and natural language understanding.
            </p>

            <p>
              The 2010s and beyond saw the rise of deep learning, a subset of machine learning, which uses neural networks with many 
              layers to process vast amounts of data. This era marked significant advancements, with AI systems becoming more capable and efficient,
              powering virtual assistants, self-driving cars, AI in healthcare, and advanced language models like OpenAI's GPT series.
            </p>

            <p>
              Today, AI continues to evolve with research into General AI (AGI), which aims to create machines that can perform any intellectual
              task a human can do. As AI technology progresses, the conversation around its ethical implications, including issues of bias, privacy,
              and job displacement, has become increasingly important. AI’s rapid growth holds the potential to transform industries and redefine many aspects of human life.
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

export default BlogContext;
