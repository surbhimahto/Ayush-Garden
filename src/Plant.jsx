import React from "react";

const plantsData = [
  {
    title: "Aloe Vera",
    description: "Aloe Vera is known for its medicinal properties.",
    image: "#",
  },
  {
    title: "Snake Plant",
    description: "Snake plants are great for indoor air purification.",
    image: "#",
  },
  {
    title: "Monstera",
    description: "Monstera is a popular houseplant known for its large leaves.",
    image: "#",
  },
];

const Plant = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plantsData.map((plant, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={plant.image}
              alt={plant.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{plant.title}</h2>
              <p className="text-gray-600 mb-4">{plant.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plant;
