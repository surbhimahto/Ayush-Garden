import React from "react";
import { useParams } from "react-router-dom";

const plantSubData = {
  1: [
    {
      title: "Aloe Vera Gel",
      description: "Aloe Vera Gel is used for soothing skin.",
      image: "https://example.com/aloe-gel.jpg",
    },
    {
      title: "Aloe Vera Juice",
      description: "Aloe Vera Juice is known for its health benefits.",
      image: "https://example.com/aloe-juice.jpg",
    },
    {
      title: "Aloe Vera Juice",
      description: "Aloe Vera Juice is known for its health benefits.",
      image: "https://example.com/aloe-juice.jpg",
    },
    {
      title: "Aloe Vera Juice",
      description: "Aloe Vera Juice is known for its health benefits.",
      image: "https://example.com/aloe-juice.jpg",
    },
    {
      title: "Aloe Vera Juice",
      description: "Aloe Vera Juice is known for its health benefits.",
      image: "https://example.com/aloe-juice.jpg",
    },
    {
      title: "Aloe Vera Juice",
      description: "Aloe Vera Juice is known for its health benefits.",
      image: "https://example.com/aloe-juice.jpg",
    },
  ],
  2: [
    {
      title: "Snake Plant Care",
      description: "Learn how to care for your snake plant.",
      image: "https://example.com/snake-care.jpg",
    },
    {
      title: "Snake Plant Varieties",
      description: "Explore the different types of snake plants.",
      image: "https://example.com/snake-varieties.jpg",
    },
  ],
  3: [
    {
      title: "Monstera Care",
      description: "Tips to care for your Monstera plant.",
      image: "https://example.com/monstera-care.jpg",
    },
    {
      title: "Monstera Propagation",
      description: "Learn how to propagate Monstera plants.",
      image: "https://example.com/monstera-propagation.jpg",
    },
  ],
};

const PlantDetails = () => {
  const { plantId } = useParams();
  const subcards = plantSubData[plantId] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Plant Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {subcards.map((subcard, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={subcard.image}
              alt={subcard.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{subcard.title}</h2>
              <p className="text-gray-600 mb-4">{subcard.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantDetails;
