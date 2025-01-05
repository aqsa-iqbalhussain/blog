"use client";

import React, { useState } from "react";
import Image from "next/image";

// Explicitly define the type of comments state as an array of strings
const Robotic = () => {
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
            src="/robot.jpg"
            height={500}
            width={500}
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
            Robotic Technology
  
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
            Robotic technology, enhanced by AI, allows robots to perform complex tasks with greater precision, 
            adaptability, and decision-making abilities, significantly improving efficiency across various industries.
            </p>
            <p>
            Robotic technology encompasses the design, creation, and operation of robots, machines that are capable of
             performing tasks autonomously or with minimal human intervention. This technology integrates several fields 
             such as mechanical engineering, electrical engineering, computer science, and artificial intelligence to build
              machines that can carry out a wide range of activities. Robots can be programmed to perform repetitive tasks,
               execute complex operations, or interact with their environment, making them highly versatile.
            </p>

            <p>
            Modern robots are often equipped with sensors, cameras, and advanced software that enable them to perceive their 
            surroundings, process information, and make decisions. For instance, industrial robots used in manufacturing are 
            designed for precision and speed, performing tasks like assembly, welding, and painting in automotive factories.
             Similarly, service robots are used in fields like healthcare, where they assist in surgeries or provide support
              for elderly care.In addition to physical manipulation, robotic technology is increasingly integrating with
               artificial intelligence (AI), allowing robots to learn, adapt, and improve their performance over time. 
               AI-powered robots can understand human instructions, recognize objects, navigate complex environments, and even exhibit behaviors like emotional responses in social contexts.
            </p>

            <p>
            Robotic technology is already transforming industries such as healthcare, logistics, agriculture, and
             even space exploration. Drones, autonomous vehicles, and medical robots are just a few examples of how 
             robots are improving efficiency, safety, and quality of life. However, as robots become more autonomous, 
             ethical considerations surrounding job displacement, safety, and privacy are becoming more pressing.As robotic 
             technology advances, it promises to revolutionize how humans interact with machines, creating opportunities for
              new applications that we can only begin to imagine. From assisting in daily chores to exploring distant planets,
               the future of robotics holds immense potential for reshaping industries and improving the human experience.




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

export default Robotic;
