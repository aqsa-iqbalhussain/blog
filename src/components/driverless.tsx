"use client";

import React, { useState } from "react";

// Explicitly define the type of comments state as an array of strings
const Driverless = () => {
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
            src="/driverless.jpg"
          />
          <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
            Driverless Car Technology
  
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>
            Driverless cars use advanced AI and sensors to navigate, make real-time decisions, and optimize routes, enhancing safety 
            and efficiency while reducing human error. These autonomous vehicles are equipped with cameras, radar, lidar, and GPS.   
            </p>
            <p>
            Driverless car technology, or autonomous vehicle (AV) technology, represents a significant leap forward in the evolution of transportation. These vehicles use an array of sensors such as LIDAR (Light Detection and Ranging), radar, ultrasonic sensors, and high-definition cameras, which work together to provide a 360-degree view of the environment. This comprehensive data allows the car to detect pedestrians, other vehicles, 
            road signs, traffic lights, and obstacles in its path, enabling it to make decisions based on the information received.
            </p>

            <p>
            At the core of autonomous vehicles is a sophisticated computer system powered by artificial intelligence (AI) 
            and deep learning algorithms. These systems process the data collected by sensors to interpret the surroundings,
             predict potential hazards, and execute driving maneuvers. The vehicles are also equipped with high-definition maps
              that provide detailed road layouts, which help the car navigate accurately and efficiently.
           The level of autonomy in driverless cars varies, with the highest level being full autonomy, where the car can drive
            itself without any human intervention. In semi-autonomous systems, the vehicle may handle most driving tasks, but the human driver is still required to remain alert and take control when necessary. Key features in these vehicles include automatic lane-keeping, adaptive cruise control, 
           self-parking, and collision avoidance, all of which contribute to safer and more convenient driving experiences.
            </p>

            <p>
            As the technology matures, it has the potential to reduce accidents caused by human error, ease congestion,
             and improve fuel efficiency. Additionally, autonomous vehicles are expected to offer greater mobility for the 
             elderly and disabled, providing them with the freedom to travel independently. Despite these promising 
             advancements, challenges such as regulatory approval, infrastructure adaptation, cybersecurity, and public 
             acceptance must be addressed before driverless cars can become a common sight on roads worldwide.




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

export default Driverless;
